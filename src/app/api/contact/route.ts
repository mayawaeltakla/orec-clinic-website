import { NextResponse } from 'next/server'
import { z } from 'zod'
import { LANGUAGES } from '@/lib/i18n'
import { sendContactEmail } from '@/lib/contact-mail'
import { contactDbConfigured, saveContactMessage } from '@/lib/contact-db'
import { rateLimit, clientIp } from '@/lib/rate-limit'

export const runtime = 'nodejs'

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(6).max(30),
  service: z.string().trim().max(160).optional().nullable(),
  message: z.string().trim().max(4000).optional().nullable(),
  lang: z.string().max(10).optional(),
  consent: z.literal(true),
  website: z.string().max(200).optional().nullable(), // honeypot — real visitors never fill it
})

/** Saves to Neon Postgres in production; Prisma/SQLite only as a local-dev fallback. Never fails the request. */
async function saveToDb(d: { name: string; phone: string; service?: string | null; message?: string | null; lang: string }, emailed: boolean) {
  try {
    if (contactDbConfigured()) {
      await saveContactMessage(d, emailed)
      return true
    }
    const { db } = await import('@/lib/db')
    await db.contactMessage.create({
      data: { name: d.name, phone: d.phone, service: d.service ?? null, message: d.message ?? null, lang: d.lang },
    })
    return true
  } catch (err) {
    console.error('[contact] db save failed:', (err as Error)?.message?.slice(0, 300))
    return false
  }
}

const recentSubmissions = new Map<string, number>()

export async function POST(req: Request) {
  // Oversized bodies are never legitimate (the form allows ~4.5 KB of text)
  if (Number(req.headers.get('content-length') ?? 0) > 20_000) {
    return NextResponse.json({ ok: false, error: 'too_large' }, { status: 413 })
  }
  // Per visitor: 4 requests / 10 min and 2 / 20 s; per instance: 200 / 10 min (protects the email quota)
  const ip = clientIp(req)
  const limits = [rateLimit(`ip10:${ip}`, 4, 600_000), rateLimit(`ip20:${ip}`, 2, 20_000), rateLimit('global', 200, 600_000)]
  const blocked = limits.find((l) => !l.ok)
  if (blocked) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429, headers: { 'Retry-After': String(blocked.retryAfter) } })
  }
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 400 })
  }
  const parsed = ContactSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ ok: false, error: 'validation' }, { status: 400 })

  // Honeypot filled → pretend success so bots learn nothing
  if (parsed.data.website) return NextResponse.json({ ok: true })
  // Same phone + message within 10 minutes → already delivered, don't email twice
  const dupKey = `${parsed.data.phone}|${parsed.data.message ?? ''}`
  const now = Date.now()
  for (const [k, t] of recentSubmissions) if (now - t > 600_000) recentSubmissions.delete(k)
  if (recentSubmissions.has(dupKey)) return NextResponse.json({ ok: true })

  const lang = LANGUAGES.some((l) => l.code === parsed.data.lang) ? (parsed.data.lang as string) : 'ar'
  const data = { ...parsed.data, lang }

  // E-mail first so the stored row records whether the clinic was actually notified
  const mail = await sendContactEmail(data)
  if (!mail.ok) console.error('[contact] email failed', mail.status, mail.error)
  const emailed = mail.ok
  const saved = await saveToDb(data, emailed)
  if (!emailed && !saved) {
    console.error('[contact] no delivery channel succeeded', { name: data.name, service: data.service })
    return NextResponse.json({ ok: false, error: 'delivery' }, { status: 502 })
  }
  recentSubmissions.set(dupKey, now)
  return NextResponse.json({ ok: true })
}
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { LANGUAGES, CLINIC } from '@/lib/i18n'
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

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

/** Email via Resend (set RESEND_API_KEY; optional CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL). */
async function sendEmail(d: { name: string; phone: string; service?: string | null; message?: string | null; lang: string }) {
  const key = process.env.RESEND_API_KEY
  if (!key) return false
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || 'Orec Clinic Website <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL || CLINIC.email],
      subject: `طلب جديد من الموقع — ${d.name}${d.service ? ` — ${d.service}` : ''}`,
      html: `<div dir="rtl" style="font-family:Arial,sans-serif;line-height:1.8">
        <h2>طلب تواصل جديد</h2>
        <p><b>الاسم:</b> ${esc(d.name)}</p>
        <p><b>الهاتف / واتساب:</b> <span dir="ltr">${esc(d.phone)}</span></p>
        <p><b>الخدمة:</b> ${esc(d.service || '—')}</p>
        <p><b>الرسالة:</b> ${esc(d.message || '—')}</p>
        <p><b>لغة الزائر:</b> ${esc(d.lang)}</p></div>`,
    }),
  })
  if (!res.ok) console.error('[contact] email failed', res.status, await res.text().catch(() => ''))
  return res.ok
}

/** Optional DB copy — never allowed to fail the request (SQLite is read-only on Vercel). */
async function saveToDb(d: { name: string; phone: string; service?: string | null; message?: string | null; lang: string }) {
  try {
    const { db } = await import('@/lib/db')
    await db.contactMessage.create({
      data: { name: d.name, phone: d.phone, service: d.service ?? null, message: d.message ?? null, lang: d.lang },
    })
    return true
  } catch (err) {
    console.warn('[contact] db save skipped:', (err as Error)?.message)
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

  const [emailed, saved] = await Promise.all([sendEmail(data).catch(() => false), saveToDb(data)])
  if (!emailed && !saved) {
    console.error('[contact] no delivery channel succeeded', { name: data.name, service: data.service })
    return NextResponse.json({ ok: false, error: 'delivery' }, { status: 502 })
  }
  recentSubmissions.set(dupKey, now)
  return NextResponse.json({ ok: true })
}
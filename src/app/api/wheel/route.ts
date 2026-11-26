import { NextResponse } from 'next/server'
import { z } from 'zod'
import { LANGUAGES } from '@/lib/i18n'
import { clientHome } from '@/lib/i18n/client-home'
import { rateLimit, clientIp } from '@/lib/rate-limit'
import { sendContactEmail } from '@/lib/contact-mail'
import { drawPrize, findSpin, markEmailed, saveSpin, wheelDbConfigured } from '@/lib/wheel'

export const runtime = 'nodejs'

const Schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(/^\+\d{8,15}$/),
  lang: z.string().max(8).default('ar'),
  website: z.string().max(200).optional().default(''),
})

/** The prize is drawn HERE, never in the browser, so a visitor cannot choose or replay it. */
export async function POST(req: Request) {
  if (Number(req.headers.get('content-length') ?? 0) > 5_000) return NextResponse.json({ ok: false, error: 'too_large' }, { status: 413 })
  const ip = clientIp(req)
  const limits = [rateLimit(`wheel10:${ip}`, 5, 600_000), rateLimit('wheel-global', 300, 600_000)]
  const blocked = limits.find((l) => !l.ok)
  if (blocked) return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429, headers: { 'Retry-After': String(blocked.retryAfter) } })

  const parsed = Schema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ ok: false, error: 'validation' }, { status: 400 })
  const d = parsed.data
  const lang = LANGUAGES.some((l) => l.code === d.lang) ? d.lang : 'ar'
  if (d.website) return NextResponse.json({ ok: true, prize: drawPrize(), repeat: false }) // honeypot: bots learn nothing

  const dbOn = wheelDbConfigured()
  try {
    if (dbOn) {
      const prev = await findSpin(d.phone)
      if (prev !== null) return NextResponse.json({ ok: true, prize: prev, repeat: true })
    }
  } catch (e) {
    console.error('[wheel] lookup failed:', (e as Error)?.message?.slice(0, 200))
  }

  let prize = drawPrize()
  let saved = false
  if (dbOn) {
    try {
      prize = await saveSpin(d.phone, d.name, prize, lang) // authoritative prize (one per number, even under a race)
      saved = true
    } catch (e) {
      console.error('[wheel] save failed:', (e as Error)?.message?.slice(0, 200))
    }
  }
  const mail = await sendContactEmail({ name: d.name, phone: d.phone, service: 'عجلة «اربح معنا»', message: `الجائزة: ${clientHome('ar').prizes[prize]}`, lang })
  if (!mail.ok) console.error('[wheel] email failed', mail.status, mail.error)
  else if (saved) await markEmailed(d.phone).catch(() => {})
  if (!mail.ok && !saved) return NextResponse.json({ ok: false, error: 'delivery' }, { status: 502 })
  return NextResponse.json({ ok: true, prize, repeat: false })
}

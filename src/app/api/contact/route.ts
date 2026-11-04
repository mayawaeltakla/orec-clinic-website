import { NextResponse } from 'next/server'
import { z } from 'zod'
import { LANGUAGES, CLINIC } from '@/lib/i18n'

export const runtime = 'nodejs'

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(6).max(30),
  service: z.string().trim().max(160).optional().nullable(),
  message: z.string().trim().max(4000).optional().nullable(),
  lang: z.string().max(10).optional(),
  consent: z.literal(true),
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

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 400 })
  }
  const parsed = ContactSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ ok: false, error: 'validation' }, { status: 400 })

  const lang = LANGUAGES.some((l) => l.code === parsed.data.lang) ? (parsed.data.lang as string) : 'ar'
  const data = { ...parsed.data, lang }

  const [emailed, saved] = await Promise.all([sendEmail(data).catch(() => false), saveToDb(data)])
  if (!emailed && !saved) {
    console.error('[contact] no delivery channel succeeded', { name: data.name, service: data.service })
    return NextResponse.json({ ok: false, error: 'delivery' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}

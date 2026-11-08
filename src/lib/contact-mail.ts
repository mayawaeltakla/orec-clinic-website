/** Contact e-mail via Resend. Env: RESEND_API_KEY (required), CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (optional). */
import { CLINIC } from '@/lib/i18n'

export const DEFAULT_FROM = 'Orec Clinic Website <onboarding@resend.dev>'

export const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export function mailConfig() {
  return {
    hasKey: Boolean(process.env.RESEND_API_KEY),
    to: process.env.CONTACT_TO_EMAIL || CLINIC.email,
    toIsCustom: Boolean(process.env.CONTACT_TO_EMAIL),
    from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
    fromIsCustom: Boolean(process.env.CONTACT_FROM_EMAIL),
  }
}

export interface MailResult {
  ok: boolean
  status: number
  id?: string
  error?: string
}

export async function sendContactEmail(
  d: { name: string; phone: string; service?: string | null; message?: string | null; lang: string },
  opts: { test?: boolean } = {},
): Promise<MailResult> {
  const key = process.env.RESEND_API_KEY
  if (!key) return { ok: false, status: 0, error: 'RESEND_API_KEY is not set' }
  const cfg = mailConfig()
  try {
    const res = await fetch(`${process.env.RESEND_API_URL || 'https://api.resend.com'}/emails`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: cfg.from,
        to: [cfg.to],
        subject: `${opts.test ? '[اختبار] ' : ''}طلب جديد من الموقع — ${d.name}${d.service ? ` — ${d.service}` : ''}`,
        html: `<div dir="rtl" style="font-family:Arial,sans-serif;line-height:1.8">
        <h2>${opts.test ? 'رسالة اختبار من لوحة التحكم' : 'طلب تواصل جديد'}</h2>
        <p><b>الاسم:</b> ${esc(d.name)}</p>
        <p><b>الهاتف / واتساب:</b> <span dir="ltr">${esc(d.phone)}</span></p>
        <p><b>الخدمة:</b> ${esc(d.service || '—')}</p>
        <p><b>الرسالة:</b> ${esc(d.message || '—')}</p>
        <p><b>لغة الزائر:</b> ${esc(d.lang)}</p></div>`,
      }),
    })
    const text = await res.text().catch(() => '')
    let json: { id?: string; message?: string; name?: string } = {}
    try {
      json = JSON.parse(text)
    } catch {}
    if (!res.ok) return { ok: false, status: res.status, error: (json.message || json.name || text || 'send failed').slice(0, 300) }
    return { ok: true, status: res.status, id: json.id }
  } catch (e) {
    return { ok: false, status: 0, error: (e as Error)?.message?.slice(0, 200) || 'network error' }
  }
}

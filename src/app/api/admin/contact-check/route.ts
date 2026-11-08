import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin-auth'
import { mailConfig, sendContactEmail, DEFAULT_FROM } from '@/lib/contact-mail'
import { contactDbConfigured, saveContactMessage, getContactMessage, deleteContactMessage } from '@/lib/contact-db'
import { rateLimit } from '@/lib/rate-limit'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Never returns secret values — only presence flags, kinds and masked addresses. */
const kind = (v: string | undefined) => (!v ? 'absent' : /^postgres(ql)?:\/\//.test(v) ? 'postgres' : /^file:/.test(v) ? 'sqlite-file' : 'other')
const maskEmail = (e: string) => {
  const m = e.match(/<([^>]+)>/)
  const addr = m ? m[1] : e
  const [u, d] = addr.split('@')
  return d ? `${u.slice(0, 2)}***@${d}` : '***'
}

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ ok: false }, { status: 401 })
  const cfg = mailConfig()
  const warnings: string[] = []
  if (!cfg.hasKey) warnings.push('RESEND_API_KEY غير متاح في هذا النشر (تحقق أنه مضاف لبيئة Production وأعدت النشر بعد إضافته).')
  if (cfg.hasKey && !cfg.fromIsCustom)
    warnings.push('المرسِل الافتراضي onboarding@resend.dev لا يسمح بالإرسال إلا إلى بريد صاحب حساب Resend نفسه. لإرسال الرسائل إلى بريد العيادة أضف CONTACT_FROM_EMAIL من نطاق موثّق في Resend.')
  if (cfg.hasKey && !cfg.toIsCustom) warnings.push('CONTACT_TO_EMAIL غير مضبوط: سيُستخدم بريد العيادة الافتراضي المكتوب في الموقع.')
  if (!contactDbConfigured()) warnings.push('لا يوجد رابط Postgres (POSTGRES_URL أو DATABASE_URL يبدأ بـ postgres://): لن تُحفظ الرسائل في قاعدة البيانات.')
  return NextResponse.json({
    ok: true,
    env: {
      RESEND_API_KEY: cfg.hasKey ? 'present' : 'absent',
      CONTACT_TO_EMAIL: cfg.toIsCustom ? 'present' : 'absent',
      CONTACT_FROM_EMAIL: cfg.fromIsCustom ? 'present' : 'absent',
      POSTGRES_URL: kind(process.env.POSTGRES_URL),
      DATABASE_URL: kind(process.env.DATABASE_URL),
      POSTGRES_PRISMA_URL: kind(process.env.POSTGRES_PRISMA_URL),
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? 'present' : 'absent',
    },
    effective: {
      to: maskEmail(cfg.to),
      from: cfg.from === DEFAULT_FROM ? 'onboarding@resend.dev (الافتراضي)' : maskEmail(cfg.from),
      databaseMode: contactDbConfigured() ? 'neon-postgres' : 'none',
      vercelEnv: process.env.VERCEL_ENV ?? 'unknown',
      deployment: (process.env.VERCEL_GIT_COMMIT_SHA ?? '').slice(0, 7) || 'unknown',
    },
    warnings,
  })
}

/** Real end-to-end test: DB write → read back → delete, and a real e-mail through Resend. */
export async function POST() {
  if (!(await isAdmin())) return NextResponse.json({ ok: false }, { status: 401 })
  if (!rateLimit('contact-check', 3, 60_000).ok) return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })

  const sample = { name: 'اختبار النظام', phone: '+900000000000', service: 'فحص الإعدادات', message: `اختبار ${new Date().toISOString()}`, lang: 'ar' }

  let db: { ok: boolean; error?: string; skipped?: boolean } = { ok: false, skipped: true }
  if (contactDbConfigured()) {
    try {
      const id = await saveContactMessage(sample, false)
      const back = await getContactMessage(id)
      const matches = back?.name === sample.name && back?.message === sample.message
      await deleteContactMessage(id)
      db = matches ? { ok: true } : { ok: false, error: 'تمت الكتابة لكن القراءة لم تطابق' }
    } catch (e) {
      db = { ok: false, error: (e as Error).message.slice(0, 300) }
    }
  }
  const email = await sendContactEmail(sample, { test: true })
  return NextResponse.json({ ok: true, db, email: { ok: email.ok, status: email.status, id: email.id, error: email.error } })
}

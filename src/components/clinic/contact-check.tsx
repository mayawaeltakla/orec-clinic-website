'use client'

import { useState } from 'react'

type Check = {
  env: Record<string, string>
  effective: Record<string, string>
  warnings: string[]
}
type Test = { db: { ok: boolean; error?: string; skipped?: boolean }; email: { ok: boolean; status: number; id?: string; error?: string } }

/** Admin-only: shows which settings the live deployment sees (no secret values) and runs a real send test. */
export function ContactCheck() {
  const [check, setCheck] = useState<Check | null>(null)
  const [test, setTest] = useState<Test | null>(null)
  const [busy, setBusy] = useState<'' | 'check' | 'test'>('')
  const [err, setErr] = useState('')

  async function run(kind: 'check' | 'test') {
    setBusy(kind)
    setErr('')
    try {
      const res = await fetch('/api/admin/contact-check', { method: kind === 'check' ? 'GET' : 'POST', cache: 'no-store' })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || String(res.status))
      if (kind === 'check') setCheck(j)
      else setTest(j)
    } catch (e) {
      setErr((e as Error).message)
    } finally {
      setBusy('')
    }
  }

  const row = (k: string, v: string) => (
    <li key={k} className="flex justify-between gap-3 border-b border-border/60 py-1.5 text-sm">
      <code dir="ltr">{k}</code>
      <span className={v === 'absent' ? 'font-bold text-destructive' : 'font-bold text-gold-2'} dir="ltr">{v}</span>
    </li>
  )

  return (
    <section className="mt-6 rounded-2xl border border-border bg-card/70 p-5">
      <h2 className="text-lg font-extrabold text-gold-2">فحص نموذج التواصل</h2>
      <p className="mt-1 text-sm text-muted-foreground">يعرض ما يراه النشر الحالي من إعدادات (دون إظهار أي قيمة سرية)، ويجري تجربة إرسال حقيقية.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={() => run('check')} disabled={!!busy} className="btn-gold h-10 rounded-full px-5 text-sm font-bold disabled:opacity-60">
          {busy === 'check' ? '...' : 'فحص الإعدادات'}
        </button>
        <button onClick={() => run('test')} disabled={!!busy} className="h-10 rounded-full border border-border bg-card px-5 text-sm font-bold disabled:opacity-60">
          {busy === 'test' ? '...' : 'إرسال رسالة تجريبية'}
        </button>
      </div>
      {err && <p className="mt-3 text-sm font-bold text-destructive" dir="ltr">{err}</p>}
      {check && (
        <div className="mt-4">
          <ul>{Object.entries(check.env).map(([k, v]) => row(k, v))}</ul>
          <ul className="mt-3">{Object.entries(check.effective).map(([k, v]) => row(k, v))}</ul>
          {check.warnings.map((w, i) => (
            <p key={i} className="mt-3 rounded-xl border border-gold/40 bg-card px-4 py-3 text-sm">{w}</p>
          ))}
          {check.warnings.length === 0 && <p className="mt-3 text-sm font-bold text-gold-2">لا توجد ملاحظات على الإعدادات.</p>}
        </div>
      )}
      {test && (
        <ul className="mt-4 space-y-1.5 text-sm">
          <li>
            قاعدة البيانات:{' '}
            <b className={test.db.ok ? 'text-gold-2' : 'text-destructive'}>
              {test.db.skipped ? 'غير مربوطة' : test.db.ok ? 'نجحت (كتابة + قراءة + حذف)' : `فشلت: ${test.db.error}`}
            </b>
          </li>
          <li>
            البريد:{' '}
            <b className={test.email.ok ? 'text-gold-2' : 'text-destructive'} dir="ltr">
              {test.email.ok ? `sent (${test.email.status}) id ${test.email.id ?? ''}` : `failed (${test.email.status}): ${test.email.error}`}
            </b>
          </li>
        </ul>
      )}
    </section>
  )
}

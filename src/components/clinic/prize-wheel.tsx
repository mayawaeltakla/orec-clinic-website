'use client'

import { useRef, useState } from 'react'
import { Gift } from 'lucide-react'
import { useLanguage } from './language-context'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { clientHome } from '@/lib/i18n/client-home'
import { whatsappLink } from '@/lib/i18n'

const COUNTRIES: [string, string][] = [
  ['+963', '🇸🇾'], ['+90', '🇹🇷'], ['+966', '🇸🇦'], ['+971', '🇦🇪'], ['+965', '🇰🇼'], ['+974', '🇶🇦'], ['+968', '🇴🇲'], ['+973', '🇧🇭'],
  ['+962', '🇯🇴'], ['+961', '🇱🇧'], ['+964', '🇮🇶'], ['+20', '🇪🇬'], ['+218', '🇱🇾'], ['+216', '🇹🇳'], ['+213', '🇩🇿'], ['+212', '🇲🇦'],
  ['+249', '🇸🇩'], ['+967', '🇾🇪'], ['+44', '🇬🇧'], ['+49', '🇩🇪'], ['+33', '🇫🇷'], ['+34', '🇪🇸'], ['+39', '🇮🇹'], ['+7', '🇷🇺'],
  ['+48', '🇵🇱'], ['+41', '🇨🇭'], ['+1', '🇺🇸'],
]
const COLORS = ['#0f3b63', '#c9a45c', '#1d5f8f', '#e3c98a', '#0a2e4d', '#b78f43', '#2b79a8', '#d8b66d']

/** Floating «اربح معنا» button → one-spin prize wheel. The prize is drawn on the server (/api/wheel). */
export function PrizeWheel() {
  const { lang } = useLanguage()
  const T = clientHome(lang.code)
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [cc, setCc] = useState('+963')
  const [num, setNum] = useState('')
  const [website, setWebsite] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const [angle, setAngle] = useState(0)
  const [result, setResult] = useState<{ prize: number; repeat: boolean; phone: string } | null>(null)
  const spins = useRef(0)
  const n = T.prizes.length
  const seg = 360 / n

  async function spin(e: React.FormEvent) {
    e.preventDefault()
    if (busy || result) return
    const digits = num.replace(/\D/g, '').replace(/^0+/, '')
    const phone = `${cc}${digits}`
    if (name.trim().length < 2 || digits.length < 6 || phone.length > 16) return setErr(T.wheelInvalid)
    setErr('')
    setBusy(true)
    try {
      const res = await fetch('/api/wheel', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: name.trim(), phone, lang: lang.code, website }) })
      const j = (await res.json().catch(() => null)) as { ok?: boolean; prize?: number; repeat?: boolean } | null
      if (!res.ok || !j?.ok || typeof j.prize !== 'number') throw new Error('bad')
      // Land the pointer (top) in the middle of the prize's segment, after several full turns
      spins.current += 1
      setAngle(spins.current * 360 * 5 - (j.prize * seg + seg / 2))
      window.setTimeout(() => {
        setResult({ prize: j.prize!, repeat: Boolean(j.repeat), phone })
        setBusy(false)
      }, 4800)
    } catch {
      setErr(T.wheelError)
      setBusy(false)
    }
  }

  const gradient = `conic-gradient(${T.prizes.map((_, i) => `${COLORS[i % COLORS.length]} ${i * seg}deg ${(i + 1) * seg}deg`).join(',')})`

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-gold fixed bottom-4 z-50 flex min-h-12 items-center gap-2 rounded-full px-4 text-sm font-extrabold shadow-xl ltr:left-4 rtl:right-4 sm:bottom-5"
        style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
      >
        <Gift className="h-5 w-5 animate-pulse" aria-hidden />
        {T.wheelButton}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[92vh] max-w-md overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-extrabold text-gold-2">{T.wheelTitle}</DialogTitle>
            <DialogDescription className="text-center text-sm">{T.wheelSub}</DialogDescription>
          </DialogHeader>

          <div className="relative mx-auto mt-2 h-64 w-64 sm:h-72 sm:w-72" dir="ltr">
            <div className="absolute -top-1 left-1/2 z-10 h-0 w-0 -translate-x-1/2 border-x-[10px] border-t-[20px] border-x-transparent border-t-[#c9a45c]" aria-hidden />
            <div
              className="relative h-full w-full rounded-full border-4 border-[#c9a45c] shadow-lg"
              style={{ background: gradient, transform: `rotate(${angle}deg)`, transition: 'transform 4.6s cubic-bezier(0.12, 0.7, 0.1, 1)' }}
              aria-hidden
            >
              {T.prizes.map((p, i) => (
                <span
                  key={p}
                  className="absolute left-1/2 top-1/2 w-[46%] origin-left text-[9px] font-extrabold leading-tight text-white sm:text-[10px]"
                  style={{ transform: `rotate(${i * seg + seg / 2 - 90}deg) translateX(14%)`, textShadow: '0 1px 2px rgba(0,0,0,.6)' }}
                >
                  {p}
                </span>
              ))}
            </div>
            <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#c9a45c] bg-[#0a2e4d]" aria-hidden />
          </div>

          {result ? (
            <div role="status" className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">{result.repeat ? T.wheelOnce : T.wheelCongrats}</p>
              <p className="mt-1 text-xl font-extrabold text-gold-2">{T.prizes[result.prize]}</p>
              <a
                href={whatsappLink(T.wheelWaMsg(name.trim(), result.phone, T.prizes[result.prize]))}
                target="_blank" rel="noopener noreferrer"
                className="btn-gold mt-4 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold"
              >
                {T.wheelSend}
              </a>
            </div>
          ) : (
            <form onSubmit={spin} className="mt-4 space-y-3" noValidate>
              <div aria-hidden className="absolute -start-[9999px] h-0 w-0 overflow-hidden">
                <input tabIndex={-1} autoComplete="off" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>
              <label className="block text-sm font-bold">
                {T.wheelName}
                <input value={name} onChange={(e) => setName(e.target.value)} maxLength={80} autoComplete="name" className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-base" />
              </label>
              <div className="flex gap-2" dir="ltr">
                <label className="block text-sm font-bold">
                  <span className="sr-only">{T.wheelCountry}</span>
                  <select value={cc} onChange={(e) => setCc(e.target.value)} aria-label={T.wheelCountry} className="mt-[22px] h-11 rounded-xl border border-border bg-background px-2 text-base">
                    {COUNTRIES.map(([c, f]) => <option key={c} value={c}>{f} {c}</option>)}
                  </select>
                </label>
                <label className="block flex-1 text-sm font-bold" dir={lang.code === 'ar' ? 'rtl' : 'ltr'}>
                  {T.wheelPhone}
                  <input value={num} onChange={(e) => setNum(e.target.value)} inputMode="tel" autoComplete="tel-national" dir="ltr" maxLength={15} className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-base" />
                </label>
              </div>
              {err && <p role="alert" className="text-sm font-semibold text-destructive">{err}</p>}
              <button type="submit" disabled={busy} className="btn-gold min-h-12 w-full rounded-full text-base font-extrabold disabled:opacity-60">
                {busy ? T.wheelSpinning : T.wheelSpin}
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

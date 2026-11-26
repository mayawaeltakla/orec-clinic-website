'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from './language-context'
import { Ornament } from './ornament'
import { clientHome } from '@/lib/i18n/client-home'
import { RESULTS } from '@/lib/results'

/** «نتائج تتحدث عن نفسها» — before/after slider. Hidden until the clinic supplies real photos (lib/results.ts). */
export function ResultsGallery({ dept }: { dept?: string } = {}) {
  const { lang, dir } = useLanguage()
  const T = clientHome(lang.code)
  const [i, setI] = useState(0)
  const [reveal, setReveal] = useState(50)
  const items = RESULTS.filter((x) => (dept ? x.dept === dept : true))
  if (items.length === 0) return null
  const r = items[i % items.length]
  const go = (d: number) => { setI((i + d + items.length) % items.length); setReveal(50) }
  return (
    <section id="results" className="band-sky relative py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">{T.resultsEyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl"><span className="text-gold-grad">{T.resultsTitle}</span></h2>
          <Ornament />
        </div>
        <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-border bg-card shadow-lg" dir="ltr">
          <div className="relative aspect-[4/3] select-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={r.after} alt="" className="absolute inset-0 h-full w-full object-cover" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={r.before} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }} />
            <span className="absolute start-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-bold text-white">Before</span>
            <span className="absolute end-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-bold text-white">After</span>
            <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${reveal}%` }} />
            <input
              type="range" min={0} max={100} value={reveal} onChange={(e) => setReveal(Number(e.target.value))}
              aria-label="Before / After" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
          {items.length > 1 && (
            <>
              <button type="button" onClick={() => go(-1)} aria-label="Previous" className="absolute start-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow"><ChevronLeft className="h-5 w-5" /></button>
              <button type="button" onClick={() => go(1)} aria-label="Next" className="absolute end-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow"><ChevronRight className="h-5 w-5" /></button>
            </>
          )}
        </div>
        {r.label && <p className="mt-4 text-center text-sm font-bold text-gold-2" dir={dir}>{r.label}</p>}
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">{T.resultsNote}</p>
      </div>
    </section>
  )
}

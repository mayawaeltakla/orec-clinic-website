'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CLINIC_PHOTOS } from '@/lib/i18n/clinic-tour'

/** Slider of the clinic photos: every photo is shown whole (contain over a blurred copy of itself). */
export function ClinicTourSlider() {
  const [i, setI] = useState(0)
  const n = CLINIC_PHOTOS.length
  const [paused, setPaused] = useState(false)
  const go = (d: number) => setI((i + d + n) % n)
  useEffect(() => {
    if (paused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setI((x) => (x + 1) % n), 5000)
    return () => clearTimeout(t)
  }, [i, paused, n])
  return (
    <div className="mx-auto mt-10 max-w-4xl" dir="ltr" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-navy shadow-lg sm:aspect-[16/10]">
        {CLINIC_PHOTOS.map((p, k) => (
          <div key={p.src} className={`absolute inset-0 transition-opacity duration-700 ${k === i ? 'opacity-100' : 'pointer-events-none opacity-0'}`} aria-hidden={k !== i}>
            <Image src={p.src} alt="" fill sizes="(min-width:1024px) 900px, 100vw" className="scale-110 object-cover opacity-60 blur-2xl" />
            <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 900px, 100vw" priority={k === 0} className="object-contain" />
          </div>
        ))}
        <button type="button" onClick={() => go(-1)} aria-label="Previous" className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow"><ChevronLeft className="h-5 w-5" /></button>
        <button type="button" onClick={() => go(1)} aria-label="Next" className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow"><ChevronRight className="h-5 w-5" /></button>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {CLINIC_PHOTOS.map((p, k) => (
          <button key={p.src} type="button" onClick={() => setI(k)} aria-label={`${k + 1} / ${n}`} aria-current={k === i} className={`relative h-14 w-20 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24 ${k === i ? 'border-gold' : 'border-transparent opacity-70 hover:opacity-100'}`}>
            <Image src={p.src} alt="" fill sizes="96px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

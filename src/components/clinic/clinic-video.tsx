'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { useLanguage } from './language-context'
import { CLINIC_VIDEO } from '@/lib/i18n/clinic-tour'

/** Clinic tour video: poster + play button; the file loads only when played. */
export function ClinicVideo({ className = '' }: { className?: string }) {
  const { lang } = useLanguage()
  const [on, setOn] = useState(false)
  const L = CLINIC_VIDEO[lang.code]
  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-navy shadow-[0_24px_60px_-34px_rgba(10,46,77,0.5)] ${className}`} dir="ltr">
      {on ? (
        <video src="/clinic/tour.mp4" poster="/clinic/tour-poster.jpg" controls autoPlay playsInline preload="metadata" className="absolute inset-0 h-full w-full object-contain" />
      ) : (
        <button type="button" onClick={() => setOn(true)} aria-label={L.play} className="group absolute inset-0 block h-full w-full">
          <Image src="/clinic/tour-poster.jpg" alt="" fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
          <span className="absolute inset-0 bg-navy/25 transition group-hover:bg-navy/10" aria-hidden />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy shadow-xl transition group-hover:scale-105">
            <Play className="h-8 w-8 translate-x-0.5 fill-current" aria-hidden />
          </span>
        </button>
      )}
    </div>
  )
}

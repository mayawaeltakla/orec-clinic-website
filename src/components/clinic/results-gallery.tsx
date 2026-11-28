'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from './language-context'
import { Ornament } from './ornament'
import { clientHome } from '@/lib/i18n/client-home'
import Image from 'next/image'
import { RESULTS, type ResultItem } from '@/lib/results'
import { SECTION_LABELS } from '@/lib/i18n/section-labels'

/** Masonry grid of the combined before/after photos supplied by the clinic. */
export function ResultsPhotos({ items, alt }: { items: ResultItem[]; alt: string }) {
  const photos = items.filter((x) => x.image)
  if (photos.length === 0) return null
  return (
    <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
      {photos.map((r) => (
        <li key={r.image} className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <Image src={r.image!} alt={r.label ?? alt} width={r.w ?? 1000} height={r.h ?? 1300} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="h-auto w-full" />
        </li>
      ))}
    </ul>
  )
}

/** «نتائج تتحدث عن نفسها» — before/after slider. Hidden until the clinic supplies real photos (lib/results.ts). */
export function ResultsGallery({ dept }: { dept?: string } = {}) {
  const { lang, dir, lp } = useLanguage()
  const T = clientHome(lang.code)
  const [i, setI] = useState(0)
  const all = RESULTS.filter((x) => (dept ? x.dept === dept : true))
  const photos = all.filter((x) => x.image)
  const items = all.filter((x) => x.before && x.after)
  if (all.length === 0) return null
  const r = items.length > 0 ? items[i % items.length] : null
  const go = (d: number) => { if (items.length === 0) return; setI((i + d + items.length) % items.length);  }
  return (
    <section id="results" className="band-sky relative py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">{T.resultsEyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl"><span className="text-gold-grad">{T.resultsTitle}</span></h2>
          <Ornament />
        </div>
        {items.length === 0 && photos.length > 0 && (
          <div className="mt-10">
            <ResultsPhotos items={photos.slice(0, 6)} alt={T.resultsTitle} />
            {photos.length > 6 && (
              <p className="mt-2 text-center">
                <a href={lp('/experiences')} className="btn-gold inline-flex min-h-11 items-center rounded-full px-6 text-sm font-bold">{SECTION_LABELS[lang.code].experiences}</a>
              </p>
            )}
          </div>
        )}
        {r && items.length > 0 && (<>
        <div className="relative mx-auto mt-10 max-w-4xl" dir="ltr">
          <div className="grid grid-cols-2 items-start gap-3 sm:gap-4">
            {([['before', r.before!], ['after', r.after!]] as const).map(([k, src]) => (
              <figure key={k} className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
                <div className="relative w-full" style={{ aspectRatio: `${r.w ?? 4} / ${r.h ?? 3}` }}>
                  <Image src={src} alt={k === 'before' ? 'Before' : 'After'} fill sizes="(min-width:1024px) 450px, 46vw" className="object-contain" />
                </div>
                <figcaption className="bg-navy py-1.5 text-center text-xs font-bold tracking-wide text-white">{k === 'before' ? 'Before' : 'After'}</figcaption>
              </figure>
            ))}
          </div>
          {items.length > 1 && (
            <div className="mt-5 flex items-center justify-center gap-4">
              <button type="button" onClick={() => go(-1)} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow"><ChevronLeft className="h-5 w-5" /></button>
              <span className="text-sm font-bold text-muted-foreground">{(i % items.length) + 1} / {items.length}</span>
              <button type="button" onClick={() => go(1)} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow"><ChevronRight className="h-5 w-5" /></button>
            </div>
          )}
        </div>
        {r.label && <p className="mt-4 text-center text-sm font-bold text-gold-2" dir={dir}>{r.label}</p>}
        </>)}
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">{T.resultsNote}</p>
      </div>
    </section>
  )
}

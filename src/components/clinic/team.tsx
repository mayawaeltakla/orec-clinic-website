'use client'

import Image from 'next/image'
import { BANNERS } from '@/lib/banners'
import { ImageBanner } from './page-banner'
import { FaqTeaser } from './faq-teaser'
import { CtaBand } from './cta-band'
import { useLanguage } from './language-context'
import { PAGE_LABELS } from '@/lib/i18n/page-labels'
import { DOCTORS } from '@/lib/team-data'

export function Team() {
  const { lang } = useLanguage()
  const L = PAGE_LABELS[lang.code]
  const pick = (m: Partial<Record<string, string>> & { en?: string }) => m[lang.code] ?? m.en ?? ''

  return (
    <>
      <ImageBanner art={BANNERS.team} title={L.teamTitle} subtitle={L.teamSubtitle} crumbs={[{ label: L.teamTitle }]} />
    <section className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {DOCTORS.map((d, i) => (
            <article key={d.id} className="lift overflow-hidden rounded-2xl border border-border bg-card/80 shadow-sm">
              <div className="relative w-full" style={{ aspectRatio: '853 / 1280' }}>
                <Image
                  src={d.photo}
                  alt={`${pick(d.name)} — ${pick(d.role)}`}
                  fill
                  sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw"
                  priority={i < 2}
                  className="object-cover object-center"
                />
              </div>
              {!d.poster && (
                <div className="p-5">
                  <h2 className="text-lg font-extrabold text-gold-2">{pick(d.name)}</h2>
                  <p className="mt-2 text-sm font-semibold text-foreground/85">{pick(d.role)}</p>
                  {d.bio && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pick(d.bio)}</p>}
                </div>
              )}
            </article>
          ))}
        </div>

        {DOCTORS.length === 0 && <p className="mt-10 text-center text-sm text-muted-foreground">{L.teamSoon}</p>}

      </div>
    </section>
      <FaqTeaser />
      <CtaBand title={L.contactDoctor} />
    </>
  )
}

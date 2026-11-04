'use client'

import { useLanguage } from './language-context'
import { PAGE_LABELS } from '@/lib/i18n/page-labels'
import { DOCTORS } from '@/lib/team-data'

export function Team() {
  const { lang, lp } = useLanguage()
  const L = PAGE_LABELS[lang.code]
  const pick = (m: Partial<Record<string, string>> & { en?: string }) => m[lang.code] ?? m.en ?? ''

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            <span className="text-gold-grad">{L.teamTitle}</span>
          </h1>
          <p className="mt-3 text-sm leading-loose text-muted-foreground sm:text-base">{L.teamSubtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((d) => (
            <article key={d.id} className="overflow-hidden rounded-3xl border border-gold/25 bg-card/80">
              <img src={d.photo} alt={pick(d.name)} loading="lazy" width={600} height={720} className="aspect-[5/6] w-full object-cover object-top" />
              <div className="p-5">
                <h2 className="text-lg font-extrabold text-gold-2">{pick(d.name)}</h2>
                <p className="mt-2 text-sm font-semibold text-foreground/85">{pick(d.role)}</p>
                {d.bio && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pick(d.bio)}</p>}
              </div>
            </article>
          ))}
        </div>

        {DOCTORS.length === 0 && <p className="mt-10 text-center text-sm text-muted-foreground">{L.teamSoon}</p>}

        <div className="mt-10 text-center">
          <a href={lp('/contact')} className="btn-gold inline-flex h-11 items-center rounded-full px-7 text-sm font-bold">
            {L.contactDoctor}
          </a>
        </div>
      </div>
    </section>
  )
}

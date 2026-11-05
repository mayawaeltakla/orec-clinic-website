'use client'

import { ShieldCheck, Stethoscope, MessageSquareQuote } from 'lucide-react'
import { useLanguage } from './language-context'
import { Ornament } from './ornament'
import { TRUST_LABELS } from '@/lib/i18n/trust-labels'

/** Trust block: real facts from the client's file + clearly-marked slots for content still to come. */
export function Trust() {
  const { dict, lang, lp } = useLanguage()
  const T = TRUST_LABELS[lang.code]
  const stats = dict.hero.stats
  const license = dict.hero.badges[2]

  const cards = [
    { icon: ShieldCheck, title: T.licenseTitle, text: license, soon: false },
    { icon: Stethoscope, title: T.doctorsTitle, text: T.doctorsText, soon: true, href: lp('/team'), cta: T.seeTeam },
    { icon: MessageSquareQuote, title: T.reviewsTitle, text: T.reviewsText, soon: true },
  ]

  return (
    <section id="trust" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">{T.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            <span className="text-gold-grad">{T.title}</span>
          </h2>
          <Ornament />
          <p className="mt-5 text-sm leading-loose text-muted-foreground sm:text-base">{T.subtitle}</p>
        </div>

        {/* Facts strip */}
        <dl className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-gold/30 bg-gold/20 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-6 py-7 text-center">
              <dt className="text-3xl font-extrabold text-gold-2" dir="ltr">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text, soon, href, cta }) => (
            <article key={title} className="lift relative flex flex-col rounded-3xl border border-gold/25 bg-card p-6 sm:p-7">
              {soon && (
                <span className="absolute end-5 top-5 rounded-full border border-gold/40 px-3 py-0.5 text-[11px] font-bold text-gold">
                  {T.soon}
                </span>
              )}
              <span className="gold-ring flex h-12 w-12 items-center justify-center rounded-full" aria-hidden>
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-gold-2">{title}</h3>
              <p className="mt-2 text-sm leading-loose text-foreground/80">{text}</p>
              {href && cta && (
                <a href={href} className="mt-4 inline-flex text-sm font-bold text-gold-2 underline underline-offset-4">
                  {cta}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

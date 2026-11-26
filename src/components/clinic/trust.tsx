'use client'

import { useState } from 'react'
import { ShieldCheck, Stethoscope, MessageSquareQuote, CalendarDays, Globe, HeartHandshake } from 'lucide-react'
import { useLanguage } from './language-context'
import { Ornament } from './ornament'
import { TRUST_LABELS } from '@/lib/i18n/trust-labels'
import { SECTION_LABELS } from '@/lib/i18n/section-labels'
import { clientHome } from '@/lib/i18n/client-home'
import { PARTNER_LOGOS } from '@/lib/results'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

/** Trust block: real facts from the client's file + clearly-marked slots for content still to come. */
export function Trust() {
  const { dict, lang, lp } = useLanguage()
  const T = TRUST_LABELS[lang.code]
  const H = clientHome(lang.code)
  const [licOpen, setLicOpen] = useState(false)
  const logos = PARTNER_LOGOS.filter((l) => l.src)
  const stats = dict.hero.stats
  const license = dict.hero.badges[2]

  const cards = [
    { icon: ShieldCheck, title: T.licenseTitle, text: license, soon: false, license: true },
    { icon: Stethoscope, title: T.doctorsTitle, text: T.doctorsText, soon: false, href: lp('/team'), cta: T.seeTeam },
    { icon: MessageSquareQuote, title: T.reviewsTitle, text: T.reviewsText, soon: true, href: lp('/experiences'), cta: SECTION_LABELS[lang.code].experiences },
  ]

  return (
    <section id="trust" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">{T.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            <span className="text-gold-grad">{T.title}</span>
          </h2>
          <Ornament />
          <p className="mt-5 text-sm leading-loose text-muted-foreground sm:text-base">{T.subtitle}</p>
        </div>

        {/* Facts strip — same deep-navy treatment as the hero stats band */}
        <div className="vars-navy leaf-navy relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl shadow-[0_24px_60px_-34px_rgba(10,46,77,0.6)]">
          <dl className="grid grid-cols-1 sm:grid-cols-3">
            {stats.map((s, i) => {
              const StatIcon = [CalendarDays, Globe, Stethoscope][i % 3]
              return (
                <div
                  key={s.label}
                  className={`flex items-center justify-center gap-4 px-4 py-7 sm:py-9 ${i > 0 ? 'border-t border-white/15 sm:border-s sm:border-t-0' : ''}`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/90" aria-hidden>
                    <StatIcon className="h-6 w-6" />
                  </span>
                  <div className="text-start">
                    <dt className="text-2xl font-extrabold leading-none text-white sm:text-3xl" dir="ltr">{s.value}</dt>
                    <dd className="mt-1.5 text-xs font-medium text-white/80 sm:text-sm">{s.label}</dd>
                  </div>
                </div>
              )
            })}
          </dl>
          <p className="flex items-center justify-center gap-3 border-t border-white/15 px-6 py-5 text-center text-sm font-medium leading-relaxed text-white/90 sm:text-base">
            <HeartHandshake className="h-5 w-5 shrink-0 text-[#7fdbe0]" aria-hidden />
            {T.promise}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text, soon, href, cta, license: isLicense }) => (
            <article key={title} className="lift relative flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
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
              {isLicense && (
                <button type="button" onClick={() => setLicOpen(true)} className="btn-gold mt-4 inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-bold">
                  {H.licenseButton}
                </button>
              )}
              {href && cta && (
                <a href={href} className="mt-4 inline-flex text-sm font-bold text-gold-2 underline underline-offset-4">
                  {cta}
                </a>
              )}
            </article>
          ))}
        </div>

        {logos.length > 0 && (
          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-muted-foreground">{H.partnersTitle}</p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-6">
              {logos.map((l) => (
                <li key={l.name} className="flex h-20 items-center rounded-xl border border-border bg-white px-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src!} alt={l.name} className="max-h-14 w-auto object-contain" loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Dialog open={licOpen} onOpenChange={setLicOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-extrabold text-gold-2">{H.licenseDialogTitle}</DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-loose text-foreground/85">{H.licenseText}</DialogDescription>
          </DialogHeader>
          {logos.length > 0 && (
            <ul className="mt-2 flex flex-wrap items-center justify-center gap-4">
              {logos.map((l) => (
                <li key={l.name} className="flex h-24 items-center rounded-xl border border-border bg-white px-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src!} alt={l.name} className="max-h-16 w-auto object-contain" />
                </li>
              ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

'use client'

import { useLanguage } from './language-context'
import { Quote, BadgeCheck, Sparkles, Gem, Stethoscope } from 'lucide-react'

export function About() {
  const { dict, lp } = useLanguage()
  const a = dict.about

  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="gold-line absolute inset-x-0 top-0" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Text column */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">
              {a.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
              <span className="text-gold-grad">{a.title}</span>
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-gold-2">
                  <Stethoscope className="h-5 w-5 text-gold" aria-hidden />
                  {a.intro.title}
                </h3>
                <p className="mt-2 text-sm leading-loose text-muted-foreground sm:text-base">
                  {a.intro.text}
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-gold-2">
                  <Gem className="h-5 w-5 text-gold" aria-hidden />
                  {a.vision.title}
                </h3>
                <p className="mt-2 text-sm leading-loose text-muted-foreground sm:text-base">
                  {a.vision.text}
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-gold-2">
                  <Sparkles className="h-5 w-5 text-gold" aria-hidden />
                  {a.specialty.title}
                </h3>
                <p className="mt-2 text-sm leading-loose text-muted-foreground">{a.specialty.text}</p>
                <ul className="mt-4 space-y-3">
                  {a.specialty.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-2xl border border-gold/15 bg-navy-2/50 p-4">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                      <div>
                        <span className="block text-sm font-bold text-foreground">{it.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{it.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Founder + license column */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-5">
              <figure className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-b from-gold/12 via-card to-card p-6 sm:p-7">
                <Quote className="absolute end-4 top-4 h-10 w-10 text-gold/20" aria-hidden />
                <figcaption className="text-sm font-bold tracking-wide text-gold" dir="auto">
                  {a.founder.title}
                </figcaption>
                <blockquote className="mt-4 text-sm leading-loose text-foreground/90">
                  {a.founder.quote}
                </blockquote>
                <div className="mt-5 flex items-center gap-4 border-t border-gold/20 pt-4">
                  <img
                    src="/founder-dr-alzuhaili.jpg"
                    alt={a.founder.name}
                    className="h-20 w-20 shrink-0 rounded-2xl border border-gold/40 object-cover sm:h-24 sm:w-24"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="text-base font-extrabold text-gold-grad" dir="auto">
                      {a.founder.name}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-muted-foreground" dir="ltr">
                      {a.founder.nameEn}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground/85">{a.founder.role}</p>
                  </div>
                </div>
              </figure>

              <div className="rounded-3xl border border-gold/25 bg-navy-2/60 p-6 text-center">
                <ShieldBadge />
                <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground/85">{a.license}</p>
                <a
                  href={lp('/contact')}
                  className="btn-gold mt-5 inline-flex h-11 items-center rounded-full px-7 text-sm font-bold"
                >
                  {a.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ShieldBadge() {
  return (
    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

'use client'

import { useState } from 'react'
import { useLanguage } from './language-context'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ServiceIcon } from './service-icon'
import { UserCheck, Lightbulb, ClipboardList, ArrowLeft, ArrowRight } from 'lucide-react'

const SECTION_ICONS = ['🦷', '✨', '🛠️', '⚡']

export function DentalDetails() {
  const { dict, dir } = useLanguage()
  const [tab, setTab] = useState('0')
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section id="dental" className="relative py-20 sm:py-24">
      <div className="gold-line absolute inset-x-0 top-0" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">
            {dict.dental.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            <span className="text-gold-grad">{dict.dental.title}</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {dict.dental.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={tab} onValueChange={setTab} className="mt-12">
          <TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-wrap justify-center gap-2 rounded-2xl border border-gold/20 bg-card/70 p-2">
            {dict.dental.sections.map((s, i) => (
              <TabsTrigger
                key={i}
                value={String(i)}
                className="flex-1 cursor-pointer rounded-xl border border-transparent px-4 py-2.5 text-xs font-bold text-foreground/75 transition-all data-[state=active]:border-gold/40 data-[state=active]:bg-gold/15 data-[state=active]:text-gold-2 sm:text-sm"
              >
                <ServiceIcon emoji={SECTION_ICONS[i]} className="me-1.5 inline h-4 w-4 align-[-2px]" />
                {s.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {dict.dental.sections.map((s, i) => (
            <TabsContent key={i} value={String(i)} className="mt-8">
              <article className="overflow-hidden rounded-3xl border border-gold/20 bg-card/80">
                {/* Header band */}
                <div className="relative border-b border-gold/15 bg-navy-2/70 p-6 sm:p-8">
                  <div
                    aria-hidden
                    className="absolute -top-16 end-[10%] h-40 w-40 rounded-full bg-gold/10 blur-3xl"
                  />
                  <div className="relative flex flex-wrap items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-navy text-2xl font-extrabold text-gold" dir="ltr" aria-hidden>
                      {s.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-extrabold text-gold-2 sm:text-2xl">{s.name}</h3>
                      <p className="mt-1 text-sm font-medium text-foreground/80">{s.tagline}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Intro */}
                  <p className="max-w-4xl text-sm leading-loose text-foreground/90 sm:text-base">
                    {s.intro}
                  </p>

                  {/* Blocks */}
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {s.blocks.map((b, bi) => (
                      <div
                        key={bi}
                        className="lift rounded-2xl border border-gold/15 bg-navy-2/50 p-5"
                      >
                        <h4 className="flex items-start gap-2 text-sm font-bold text-gold-2 sm:text-base">
                          <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                          {b.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Candidates + tips */}
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-gold/25 bg-gold/5 p-5">
                      <h4 className="flex items-center gap-2 text-sm font-bold text-gold-2 sm:text-base">
                        <UserCheck className="h-4 w-4 text-gold" aria-hidden />
                        {s.candidatesTitle}
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {s.candidates.map((c, ci) => (
                          <li key={ci} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {s.tipsTitle && s.tips && (
                      <div className="rounded-2xl border border-gold/25 bg-gold/5 p-5">
                        <h4 className="flex items-center gap-2 text-sm font-bold text-gold-2 sm:text-base">
                          <Lightbulb className="h-4 w-4 text-gold" aria-hidden />
                          {s.tipsTitle}
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {s.tips.map((t, ti) => (
                            <li key={ti} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent p-5 sm:flex-row">
                    <p className="text-sm font-semibold text-foreground/90">{s.tagline}</p>
                    <a
                      href="/contact"
                      className="btn-gold inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-6 text-sm font-bold"
                    >
                      {dict.dental.cta}
                      <Arrow className="h-4 w-4" aria-hidden />
                    </a>
                  </div>
                </div>
              </article>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

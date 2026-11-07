'use client'

import { PageBanner } from './page-banner'
import { useLanguage } from './language-context'
import { HeartHandshake, Crown, Cpu, Infinity as InfinityIcon } from 'lucide-react'
import { Ornament } from './ornament'

const ICONS = [HeartHandshake, Crown, Cpu, InfinityIcon]

export function WhyUs({ standalone = false }: { standalone?: boolean }) {
  const { dict } = useLanguage()

  return (
    <>
      {standalone && <PageBanner image="/orec-reception.jpg" eyebrow={dict.why.eyebrow} title={dict.why.title} subtitle={dict.why.intro} crumbs={[{ label: dict.why.title }]} />}
    <section id="why" className={`relative ${standalone ? 'py-14 sm:py-16' : 'py-24 sm:py-28 lg:py-32'}`}>
      <div className="gold-line absolute inset-x-0 top-0" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!standalone && (
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">
            {dict.why.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            <span className="text-gold-grad">{dict.why.title}</span>
          </h2>
          <Ornament />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {dict.why.intro}
          </p>
        </div>

        )}

        <div className={`${standalone ? '' : 'mt-14'} grid gap-6 rounded-3xl bg-accent/60 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4 lg:gap-8 lg:p-10`}>
          {dict.why.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <article
                key={item.num}
                className="lift group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6"
              >
                <span
                  aria-hidden
                  className="absolute -end-3 -top-6 text-7xl font-extrabold text-gold/10 transition-colors group-hover:text-gold/20"
                  dir="ltr"
                >
                  {item.num}
                </span>
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-navy-2 text-gold">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="mt-4 block text-xs font-bold tracking-widest text-gold/70" dir="ltr">
                    {item.num}
                  </span>
                  <h3 className="mt-1 text-base font-extrabold text-gold-2">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}

'use client'

import { PageBanner } from './page-banner'
import { CtaBand } from './cta-band'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from './language-context'
import { FAQ } from '@/lib/i18n/faq'

export function FaqSection() {
  const { lang } = useLanguage()
  const c = FAQ[lang.code]

  return (
    <>
      <PageBanner image="/orec-entrance.jpg" eyebrow={c.eyebrow} title={c.title} subtitle={c.intro} crumbs={[{ label: c.title }]} />
    <section id="faq" className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {c.items.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border bg-card/80 transition-colors open:border-gold/50 open:bg-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-start text-base font-bold text-foreground marker:hidden hover:text-gold-2 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-loose text-muted-foreground sm:px-6 sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>

      </div>
    </section>
      <CtaBand title={c.ctaTitle} text={c.ctaText} />
    </>
  )
}

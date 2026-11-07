'use client'

import { ChevronDown, MessageCircle } from 'lucide-react'
import { useLanguage } from './language-context'
import { Ornament } from './ornament'
import { FAQ } from '@/lib/i18n/faq'
import { PAGE_LABELS } from '@/lib/i18n/page-labels'
import { whatsappLink } from '@/lib/i18n'

export function FaqSection() {
  const { lang, dict, lp } = useLanguage()
  const c = FAQ[lang.code]

  return (
    <section id="faq" className="relative py-20 sm:py-24 lg:py-28">
      <div className="gold-line absolute inset-x-0 top-0" aria-hidden />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">
            {c.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            <span className="text-gold-grad">{c.title}</span>
          </h1>
          <Ornament />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{c.intro}</p>
        </div>

        <div className="mt-12 space-y-3">
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

        <div className="mt-14 rounded-3xl bg-accent/60 p-8 text-center sm:p-10">
          <h2 className="text-xl font-extrabold text-gold-2 sm:text-2xl">{c.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{c.ctaText}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={lp('/contact')}
              className="btn-gold inline-flex h-12 items-center rounded-full px-8 text-sm font-bold sm:text-base"
            >
              {PAGE_LABELS[lang.code].contactDoctor}
            </a>
            <a
              href={whatsappLink(dict.whatsapp.prefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-foreground/25 bg-card/70 px-8 text-sm font-semibold text-gold-2 transition-all hover:border-gold hover:bg-card sm:text-base"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {dict.contact.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

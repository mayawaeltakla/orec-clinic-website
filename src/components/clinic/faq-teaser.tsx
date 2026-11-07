'use client'

import { ChevronDown } from 'lucide-react'
import { useLanguage } from './language-context'
import { FAQ } from '@/lib/i18n/faq'

/** Short FAQ block (first items of the real FAQ) with a link to the full page. */
export function FaqTeaser({ count = 4 }: { count?: number }) {
  const { lang, lp } = useLanguage()
  const c = FAQ[lang.code]
  return (
    <section className="band-sky border-y border-border py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
          <span className="text-gold-grad">{c.title}</span>
        </h2>
        <div className="mt-8 space-y-3">
          {c.items.slice(0, count).map((item, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-card/80 open:border-gold/50 open:bg-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-start text-base font-bold marker:hidden hover:text-gold-2 [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180" aria-hidden />
              </summary>
              <p className="px-5 pb-5 text-sm leading-loose text-muted-foreground sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={lp('/faq')} className="text-sm font-bold text-gold-2 underline underline-offset-4">
            {c.title} ›
          </a>
        </div>
      </div>
    </section>
  )
}

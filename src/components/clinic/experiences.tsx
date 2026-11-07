'use client'

import { PageBanner } from './page-banner'
import { MessageSquareQuote, Hourglass } from 'lucide-react'
import { useLanguage } from './language-context'
import { SECTION_LABELS } from '@/lib/i18n/section-labels'
import { whatsappLink } from '@/lib/i18n'
import { REVIEWS } from '@/lib/reviews-data'

export function Experiences() {
  const { lang } = useLanguage()
  const L = SECTION_LABELS[lang.code]
  return (
    <>
      <PageBanner image="/orec-reception.jpg" title={L.expTitle} subtitle={L.expSubtitle} crumbs={[{ label: L.expTitle }]} />
    <section className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {REVIEWS.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {REVIEWS.map((r) => (
              <figure key={r.id} className="lift rounded-2xl border border-border bg-card p-6 sm:p-7">
                <MessageSquareQuote className="h-7 w-7 text-gold/60" aria-hidden />
                <blockquote className="mt-3 text-sm leading-loose text-foreground/90">{r.text[lang.code] ?? r.text.ar}</blockquote>
                <figcaption className="mt-4 text-xs font-bold text-gold-2">
                  {r.name}
                  {r.country ? ` · ${r.country}` : ''}
                  {r.service ? ` · ${r.service}` : ''}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center">
            <span className="gold-ring mx-auto flex h-14 w-14 items-center justify-center rounded-full" aria-hidden>
              <Hourglass className="h-6 w-6" />
            </span>
            <p className="mt-4 text-sm leading-loose text-foreground/85 sm:text-base">{L.expEmpty}</p>
          </div>
        )}

        <div className="mt-10 text-center">
          <p className="text-sm font-semibold text-foreground/85">{L.expShare}</p>
          <a
            href={whatsappLink(L.expSharePrefill)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-3 inline-flex h-11 items-center rounded-full px-7 text-sm font-bold"
          >
            {L.expShareCta}
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

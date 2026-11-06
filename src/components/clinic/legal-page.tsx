'use client'

import { useLanguage } from './language-context'
import { PAGE_LABELS } from '@/lib/i18n/page-labels'
import { getLegalDoc, LEGAL_UPDATED } from '@/lib/legal-content'

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const { lang } = useLanguage()
  const L = PAGE_LABELS[lang.code]
  const { doc, fallback } = getLegalDoc(kind, lang.code)
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-extrabold sm:text-4xl">
        <span className="text-gold-grad">{kind === 'privacy' ? L.privacy : L.terms}</span>
      </h1>
      <p className="mt-2 text-xs text-muted-foreground">
        {L.updated}: <time dateTime={LEGAL_UPDATED}>{LEGAL_UPDATED}</time>
      </p>
      {fallback && L.legalNote && (
        <p className="mt-4 rounded-xl border border-border bg-card/70 px-4 py-3 text-xs text-muted-foreground" lang="en" dir="ltr">
          {L.legalNote}
        </p>
      )}
      <div className="mt-8 space-y-8" lang={fallback ? 'en' : undefined} dir={fallback ? 'ltr' : undefined}>
        {doc.sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-lg font-extrabold text-gold-2">{s.h}</h2>
            {s.p.map((t, i) => (
              <p key={i} className="mt-2 text-sm leading-loose text-foreground/85 sm:text-base">
                {t}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  )
}

'use client'

import { MessageCircle } from 'lucide-react'
import { useLanguage } from './language-context'
import { PAGE_LABELS } from '@/lib/i18n/page-labels'
import { whatsappLink } from '@/lib/i18n'

/** Closing navy band shared by inner pages: heading, text, contact + WhatsApp buttons. */
export function CtaBand({ title, text }: { title: string; text?: string }) {
  const { lang, dict, lp } = useLanguage()
  return (
    <section className="band-navy vars-navy py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-extrabold text-gold-2 sm:text-3xl">{title}</h2>
        {text && <p className="mx-auto mt-3 max-w-xl text-sm leading-loose text-muted-foreground sm:text-base">{text}</p>}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a href={lp('/contact')} className="btn-gold inline-flex h-12 items-center rounded-full px-8 text-sm font-bold">
            {PAGE_LABELS[lang.code].contactDoctor}
          </a>
          <a
            href={whatsappLink(dict.whatsapp.prefill)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-foreground/25 px-8 text-sm font-semibold text-gold-2 transition-colors hover:border-gold"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {dict.contact.whatsapp}
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'

import { Check, ArrowLeft, ArrowRight, Crown } from 'lucide-react'
import { useLanguage } from './language-context'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ResultsGallery } from './results-gallery'
import { whatsappLink } from '@/lib/i18n'
import type { DepartmentExtras, FaqItem } from '@/lib/services-content/types'

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-center text-2xl font-extrabold sm:text-3xl"><span className="text-gold-grad">{children}</span></h2>
)

export function FaqList({ heading, items }: { heading: string; items: FaqItem[] }) {
  return (
    <section className="mx-auto mt-16 max-w-3xl">
      <H2>{heading}</H2>
      <Accordion type="single" collapsible className="mt-8 space-y-3">
        {items.map((f, i) => (
          <AccordionItem key={i} value={`q${i}`} className="rounded-2xl border border-border bg-card/80 px-5">
            <AccordionTrigger className="min-h-12 text-start text-sm font-bold text-foreground hover:no-underline sm:text-base">{f.q}</AccordionTrigger>
            <AccordionContent className="pb-4 text-sm leading-loose text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

/** Client's department template: which service suits me → packages → journey → why us → results → FAQ → final CTA */
export function DepartmentExtrasView({ extras, deptSlug, title }: { extras: DepartmentExtras; deptSlug: string; title: string }) {
  const { lp, dir, dict } = useLanguage()
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight
  const { guide, packages, journey, why, faq, cta } = extras
  const wa = whatsappLink(dict.whatsapp.prefill)

  return (
    <div>
      <section className="mx-auto mt-16 max-w-4xl">
        <H2>{guide.heading}</H2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {guide.rows.map((r) => (
            <li key={r.slug}>
              <a href={lp(`/services/${deptSlug}/${r.slug}`)} className="orec-card lift flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 text-sm font-bold text-foreground hover:text-gold-2">
                <span>{r.need}</span><Arrow className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-center text-sm leading-loose text-muted-foreground">
          {guide.note}{' '}
          <a href={wa} target="_blank" rel="noopener noreferrer" className="font-bold text-gold-2 underline underline-offset-4">{guide.noteCta}</a>
        </p>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <H2>{packages.heading}</H2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-loose text-muted-foreground">{packages.intro}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {packages.plans.map((p) => (
            <article key={p.name} className={`relative flex flex-col rounded-3xl border bg-card p-6 ${p.badge ? 'border-gold shadow-[0_18px_50px_-24px_rgba(201,164,92,0.7)] md:-mt-3 md:pb-9' : 'border-border'}`}>
              {p.badge && (
                <span className="absolute -top-3 start-1/2 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-gold px-4 py-1 text-xs font-extrabold text-navy rtl:translate-x-1/2">
                  <Crown className="h-3.5 w-3.5" aria-hidden />{p.badge}
                </span>
              )}
              <h3 className="text-center text-xl font-extrabold text-gold-2">{p.name}</h3>
              <dl className="mt-5 space-y-4">
                {packages.rowLabels.map((label, i) => (
                  <div key={label} className="border-t border-border pt-3">
                    <dt className="text-[11px] font-bold tracking-wide text-gold/80">{label}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-foreground/90">{p.cells[i]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex min-h-12 items-center rounded-full px-8 text-sm font-extrabold">{packages.cta}</a>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-4xl">
        <H2>{journey.heading}</H2>
        <ol className="mt-8 space-y-3">
          {journey.steps.map((s, i) => (
            <li key={s.title} className="orec-card flex gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-navy text-sm font-extrabold text-gold" dir="ltr">{i + 1}</span>
              <div><h3 className="font-extrabold text-gold-2">{s.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-20 max-w-4xl">
        <H2>{why.heading}</H2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {why.items.map((t) => (
            <li key={t} className="flex gap-3 rounded-2xl border border-border bg-card/80 p-4 text-sm leading-relaxed">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden /><span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="-mx-4 mt-16 sm:-mx-6 lg:-mx-8"><ResultsGallery dept={deptSlug} /></div>

      <FaqList heading={faq.heading} items={faq.items} />

      <div className="vars-navy band-navy mt-16 rounded-3xl px-6 py-12 text-center">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{cta.title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-loose text-white/85">{cta.text}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={`${lp('/contact')}?service=${encodeURIComponent(title)}`} className="btn-gold inline-flex min-h-12 items-center rounded-full px-7 text-sm font-extrabold">{cta.primary}</a>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-full bg-wa-dark px-7 text-sm font-extrabold text-white">{cta.secondary}</a>
        </div>
      </div>
    </div>
  )
}

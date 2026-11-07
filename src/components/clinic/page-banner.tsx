'use client'

import type { ReactNode } from 'react'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { useLanguage } from './language-context'

export interface Crumb {
  label: string
  href?: string
}

/** Shared inner-page hero: breadcrumb, badge, title, subtitle, optional actions, photo card beside the text. */
export function PageBanner({
  image,
  eyebrow,
  title,
  subtitle,
  crumbs = [],
  titleAs: Title = 'h1',
  actions,
}: {
  image: string
  eyebrow?: string
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  titleAs?: 'h1' | 'p'
  actions?: ReactNode
}) {
  const { dict, dir, lp } = useLanguage()
  const Chevron = dir === 'rtl' ? ChevronLeft : ChevronRight
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-14">
        <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
          <a href={lp('/')} className="inline-flex items-center gap-1 transition-colors hover:text-gold-2">
            <Home className="h-3.5 w-3.5" aria-hidden />
            {dict.nav.home}
          </a>
          {crumbs.map((c, i) => (
            <span key={i} className="inline-flex items-center gap-1.5">
              <Chevron className="h-3.5 w-3.5" aria-hidden />
              {c.href ? (
                <a href={lp(c.href)} className="transition-colors hover:text-gold-2">{c.label}</a>
              ) : (
                <span className="font-semibold text-foreground">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <div className="mt-7 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="rise">
            {eyebrow && (
              <p className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-gold" dir="ltr">
                {eyebrow}
              </p>
            )}
            <Title className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              <span className="text-gold-grad">{title}</span>
            </Title>
            {subtitle && <p className="mt-4 text-sm leading-loose text-muted-foreground sm:text-base">{subtitle}</p>}
            {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
          </div>
          <figure className="overflow-hidden rounded-3xl border border-border shadow-[0_24px_60px_-34px_rgba(10,46,77,0.5)]">
            <img src={image} alt="" aria-hidden width={1400} height={788} fetchPriority="high" className="aspect-[16/10] w-full object-cover" />
          </figure>
        </div>
      </div>
    </section>
  )
}

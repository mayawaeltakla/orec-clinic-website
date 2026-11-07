'use client'

import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { useLanguage } from './language-context'

export interface Crumb {
  label: string
  href?: string
}

/**
 * Banner shared by every inner page: real clinic photo, soft fade from the text side,
 * breadcrumb, title and short subtitle — the same visual language as the home hero.
 */
export function PageBanner({
  image,
  eyebrow,
  title,
  subtitle,
  crumbs = [],
  titleAs: Title = 'h1',
}: {
  image: string
  eyebrow?: string
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  titleAs?: 'h1' | 'p'
}) {
  const { dict, dir, lp } = useLanguage()
  const Chevron = dir === 'rtl' ? ChevronLeft : ChevronRight

  return (
    <section className="relative overflow-hidden border-b border-border">
      <img
        src={image}
        alt=""
        aria-hidden
        width={1400}
        height={788}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
      />
      <div aria-hidden className="hero-fade absolute inset-0" />
      <div aria-hidden className="hero-leaf" />

      <div className="relative mx-auto flex min-h-[210px] max-w-7xl flex-col justify-center px-4 py-9 sm:min-h-[250px] sm:px-6 lg:min-h-[290px] lg:px-8 lg:py-12">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-foreground/75">
          <a href={lp('/')} className="inline-flex items-center gap-1 transition-colors hover:text-gold-2">
            <Home className="h-3.5 w-3.5" aria-hidden />
            {dict.nav.home}
          </a>
          {crumbs.map((c, i) => (
            <span key={i} className="inline-flex items-center gap-1.5">
              <Chevron className="h-3 w-3 text-gold/60" aria-hidden />
              {c.href ? (
                <a href={lp(c.href)} className="transition-colors hover:text-gold-2">
                  {c.label}
                </a>
              ) : (
                <span className="font-semibold text-gold-2">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <p className="rise mt-5 text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">
            {eyebrow}
          </p>
        )}
        <Title className={`rise rise-1 max-w-2xl text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl ${eyebrow ? 'mt-2' : 'mt-5'}`}>
          {title}
        </Title>
        {subtitle && (
          <p className="rise rise-2 mt-3 line-clamp-2 max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

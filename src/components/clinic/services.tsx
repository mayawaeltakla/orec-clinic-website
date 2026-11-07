'use client'

import { PageBanner } from './page-banner'
import { useLanguage } from './language-context'
import { DEPT_SLUG_BY_ID } from '@/lib/services-content/config'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Ornament } from './ornament'

/** Real photos for each main service — clinic-provided photos (all four departments) */
const SERVICE_IMAGES: Record<string, { src: string; w: number; h: number }> = {
  dental: { src: '/services/dental.jpg', w: 1000, h: 563 },
  cosmetic: { src: '/services/cosmetic.jpg', w: 1000, h: 563 },
  hair: { src: '/services/hair.jpg', w: 1000, h: 563 },
  obesity: { src: '/services/obesity.jpg', w: 1000, h: 563 },
}

export function Services({ standalone = false }: { standalone?: boolean }) {
  const { dict, dir, lp } = useLanguage()
  const Chevron = dir === 'rtl' ? ChevronLeft : ChevronRight

  return (
    <>
      {standalone && <PageBanner image="/orec-lobby.jpg" eyebrow={dict.services.eyebrow} title={dict.services.title} subtitle={dict.services.subtitle} crumbs={[{ label: dict.services.title }]} />}
    <section id="services" className={`relative ${standalone ? 'py-14 sm:py-16' : 'py-24 sm:py-28 lg:py-32'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!standalone && (
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">
            {dict.services.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            <span className="text-gold-grad">{dict.services.title}</span>
          </h2>
          <Ornament />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {dict.services.subtitle}
          </p>
        </div>

        )}

        {/* Category cards — compact, one row on wide screens. Full service lists live on each department page. */}
        <div className={`${standalone ? '' : 'mt-14'} grid gap-6 sm:grid-cols-2 xl:grid-cols-4`}>
          {dict.services.categories.map((cat) => {
            const img = SERVICE_IMAGES[cat.id]
            const href = lp(`/services/${DEPT_SLUG_BY_ID[cat.id] ?? ''}`)
            return (
              <article key={cat.id} className="orec-card group relative flex flex-col overflow-hidden">
                {img && (
                  <a href={href} tabIndex={-1} aria-hidden className="block overflow-hidden">
                    <img
                      src={img.src}
                      alt=""
                      width={img.w}
                      height={img.h}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </a>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-bold tracking-widest text-gold/70" dir="ltr">
                    {cat.num} · {cat.code}
                  </span>
                  <h3 className="mt-2 text-lg font-extrabold text-gold-2">
                    <a href={href} className="hover:text-gold">{cat.title}</a>
                  </h3>
                  <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
                  <a
                    href={href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-2 transition-colors hover:text-gold"
                  >
                    {dict.services.viewAll}
                    <Chevron className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden />
                  </a>
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

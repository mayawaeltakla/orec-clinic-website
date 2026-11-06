'use client'

import { useLanguage } from './language-context'
import { DEPT_SLUG_BY_ID } from '@/lib/services-content/config'
import { Sparkle, ChevronLeft, ChevronRight } from 'lucide-react'
import { Ornament } from './ornament'

/** Real photos for each main service — clinic-provided photos (all four departments) */
const SERVICE_IMAGES: Record<string, { src: string; w: number; h: number }> = {
  dental: { src: '/services/dental.jpg', w: 1000, h: 563 },
  cosmetic: { src: '/services/cosmetic.jpg', w: 1000, h: 563 },
  hair: { src: '/services/hair.jpg', w: 1000, h: 563 },
  obesity: { src: '/services/obesity.jpg', w: 1000, h: 563 },
}

export function Services() {
  const { dict, dir, lp } = useLanguage()
  const Chevron = dir === 'rtl' ? ChevronLeft : ChevronRight

  return (
    <section id="services" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
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

        {/* Category cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {dict.services.categories.map((cat) => {
            const img = SERVICE_IMAGES[cat.id]
            return (
            <article
              key={cat.id}
              className="orec-card group relative overflow-hidden"
            >
              {/* corner glow */}
              <div
                aria-hidden
                className="absolute -top-20 end-[-20%] h-48 w-48 rounded-full bg-gold/10 blur-3xl transition-opacity group-hover:opacity-100"
              />

              {/* Service photo header — full 16:9 photo, logo never cropped */}
              {img && (
                <div className="relative aspect-video overflow-hidden border-b border-border">
                  <img
                    src={img.src}
                    alt={`${cat.title} — Orec Clinic`}
                    width={img.w}
                    height={img.h}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
              )}

              <div className="relative p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-gold/70" dir="ltr">
                      {cat.num} · {cat.code}
                    </span>
                    <h3 className="mt-2 text-xl font-extrabold text-gold-2 sm:text-2xl">{cat.title}</h3>
                  </div>
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center" aria-hidden>
                    <span className="absolute inset-1.5 rotate-45 rounded-[6px] border border-gold/70 bg-gold/10" />
                    <span className="relative text-lg font-extrabold text-gold">{cat.num}</span>
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>

                {/* Items */}
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <li key={item.en} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Sparkle className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden />
                      <span>
                        {item.name}
                        <span className="block text-xs text-muted-foreground" dir="ltr">
                          {item.en}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Groups (cosmetic surgery) */}
                {cat.groups && (
                  <div className="mt-5 space-y-4">
                    {cat.groups.map((g) => (
                      <div key={g.name} className="rounded-2xl border border-border bg-navy-2/60 p-4">
                        <h4 className="text-sm font-bold text-gold-2">{g.name}</h4>
                        <ul className="mt-2 grid gap-x-4 gap-y-1.5 text-xs text-foreground/75 sm:grid-cols-2">
                          {g.items.map((it) => (
                            <li key={it} className="flex items-start gap-1.5">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/70" aria-hidden />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                <a
                  href={lp(`/services/${DEPT_SLUG_BY_ID[cat.id] ?? ''}`)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-2 transition-colors hover:text-gold"
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
  )
}

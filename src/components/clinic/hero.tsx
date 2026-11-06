'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from './language-context'
import { CLINIC, whatsappLink } from '@/lib/i18n'
import { WhatsAppGlyph } from './social-icons'
import {
  MapPin,
  CalendarCheck,
  ShieldCheck,
  Phone,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'

/** Hero slideshow — real Orec Clinic photos, auto-advancing every 5s */
const SLIDES = [
  {
    src: '/orec-entrance.jpg',
    w: 1400,
    h: 788,
    alt: 'Orec Clinic VIP entrance at dusk — المدخل الملكي لعيادة أوريك عند الغروب',
  },
  {
    src: '/orec-lobby.jpg',
    w: 1400,
    h: 788,
    alt: 'Orec Clinic luxury reception lobby — بهو الاستقبال الفاخر في عيادة أوريك',
  },
  {
    src: '/orec-exterior.jpg',
    w: 1400,
    h: 933,
    alt: 'Orec Clinic building at twilight — مبنى عيادة أوريك في ساعة الغسق',
  },
  {
    src: '/orec-reception.jpg',
    w: 1400,
    h: 1050,
    alt: 'Orec Clinic reception — استقبال عيادة أوريك في إسطنبول',
  },
]

export function Hero() {
  const { dict, dir, lp } = useLanguage()
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  /* Slideshow state — 5s auto-advance, paused on hover/focus, timer resets on manual nav */
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [paused, slide])

  const go = (delta: number) => setSlide((s) => (s + delta + SLIDES.length) % SLIDES.length)
  const PrevIcon = dir === 'rtl' ? ChevronRight : ChevronLeft
  const NextIcon = dir === 'rtl' ? ChevronLeft : ChevronRight

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft clinical wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(900px 420px at 85% 0%, color-mix(in srgb, var(--gold) 10%, transparent), transparent 65%), linear-gradient(180deg, var(--background), var(--muted))' }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* Copy column */}
          <div className="text-center lg:text-start">
            {/* Eyebrow */}
            <p className="rise shimmer text-xs font-bold tracking-[0.35em] sm:text-sm" dir="ltr">
              {dict.hero.eyebrow}
            </p>

            {/* Title */}
            <h1 className="rise rise-1 mt-5 text-3xl font-extrabold leading-[1.25] text-foreground sm:text-4xl md:text-5xl lg:text-[3.1rem] lg:leading-[1.2]">
              {dict.hero.title1.split(/(\([^)]*\))/).map((part, i) =>
                part.startsWith('(') ? (
                  <bdi key={i} className="whitespace-nowrap">
                    {part}
                  </bdi>
                ) : (
                  part
                ),
              )}
              <span className="text-gold-grad mt-2 block">{dict.hero.title2}</span>
            </h1>

            {/* Badges */}
            <div className="rise rise-2 mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {[
                { icon: MapPin, text: dict.hero.badges[0] },
                { icon: CalendarCheck, text: dict.hero.badges[1] },
                { icon: ShieldCheck, text: dict.hero.badges[2] },
              ].map(({ icon: Icon, text }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground/90 shadow-sm sm:text-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                  {text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="rise rise-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
              <a
                href={lp('/contact')}
                className="btn-gold inline-flex h-12 items-center rounded-full px-8 text-sm font-bold sm:text-base"
              >
                {dict.hero.ctaPrimary}
              </a>
              <a
                href={whatsappLink(dict.whatsapp.prefill)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-wa px-7 text-sm font-bold text-white shadow-[0_10px_24px_-12px_rgba(37,211,102,0.6)] transition-all hover:brightness-110 sm:text-base"
              >
                <WhatsAppGlyph className="h-5 w-5" aria-hidden />
                {dict.contact.whatsappCta}
              </a>
              <a
                href={lp('/services')}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-foreground/25 bg-transparent px-8 text-sm font-semibold text-gold-2 transition-all hover:border-gold hover:bg-gold/10 sm:text-base"
              >
                {dict.hero.ctaSecondary}
                <Arrow className="h-4 w-4" aria-hidden />
              </a>
              {/* Live direct contacts — one tap to call or email */}
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground/90 transition-all hover:border-gold hover:text-gold-2 sm:text-base"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden />
                <span dir="ltr">+90 555 262 22 25</span>
              </a>
            </div>
          </div>

          {/* Photo slideshow column — clinic photos, auto every 5s */}
          <div className="rise rise-2 relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <figure
                className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl border border-border bg-navy p-0 shadow-[0_30px_70px_-34px_rgba(10,46,77,0.55)] ring-1 ring-black/5"
                role="group"
                aria-roledescription="carousel"
              >
                {/* Crossfading slides — each photo fills the frame edge-to-edge (cover, no bars).
                    Nothing overlays the photos: no gradient, no controls on top. */}
                {SLIDES.map(({ src, w, h, alt }, i) => (
                  <div
                    key={src}
                    aria-hidden={i !== slide}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                      i === slide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {/* Sharp photo, full-bleed cover */}
                    <img
                      src={src}
                      alt={i === slide ? alt : ''}
                      width={w}
                      height={h}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      fetchPriority={i === 0 ? 'high' : 'auto'}
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                ))}
              </figure>

              {/* Slider controls + location badge — BELOW the photos, never covering them.
                  flex-wrap: the badge wraps to its own line on narrow screens. */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-card px-2.5 py-1.5 shadow-sm">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label={dict.hero.prevSlide}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <PrevIcon className="h-4 w-4" aria-hidden />
                  </button>

                  <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
                    {SLIDES.map(({ src, alt }, i) => (
                      <button
                        key={src}
                        type="button"
                        role="tab"
                        aria-selected={i === slide}
                        aria-label={alt}
                        onClick={() => setSlide(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === slide ? 'w-6 bg-gold' : 'w-2 bg-foreground/25 hover:bg-foreground/45'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label={dict.hero.nextSlide}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <NextIcon className="h-4 w-4" aria-hidden />
                  </button>
                </div>

                {/* Location badge — now static below the photos (was floating on top of them) */}
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-gold/15 text-gold">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-xs font-bold tracking-[0.18em] text-gold-2" dir="ltr">
                      {dict.hero.location}
                    </span>
                    <span className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                      {dict.hero.badges[0]}
                    </span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Stats — full-width deep navy band */}
      <div className="vars-navy header-navy relative border-y-0" style={{ background: 'linear-gradient(180deg, #0c3556, #0a2e4d)' }}>
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-white/15 px-4 rtl:divide-x-reverse sm:px-6">
          {dict.hero.stats.map((s, i) => (
            <div key={i} className="px-2 py-6 text-center sm:px-4 sm:py-7">
              <div className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl" dir="ltr">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] font-medium text-white/75 sm:text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

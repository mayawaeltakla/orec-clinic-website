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
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      {/* Ambient ornaments */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 end-[-10%] h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] start-[-8%] h-[380px] w-[380px] rounded-full bg-[#265c85]/15 blur-[110px]" />
        <div className="floaty absolute top-[12%] start-[42%] hidden h-24 w-24 rounded-full border border-gold/25 lg:block" />
        <div className="floaty absolute bottom-[18%] start-[4%] hidden h-16 w-16 rounded-full border border-gold/20 lg:block" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-card/70 px-4 py-2 text-xs font-medium text-foreground/90 sm:text-sm"
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
                className="inline-flex h-12 items-center gap-2 rounded-full bg-wa px-7 text-sm font-bold text-white shadow-[0_12px_30px_-12px_rgba(37,211,102,0.65)] transition-all hover:-translate-y-0.5 hover:brightness-110 sm:text-base"
              >
                <WhatsAppGlyph className="h-5 w-5" aria-hidden />
                {dict.contact.whatsappCta}
              </a>
              <a
                href={lp('/services')}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-gold/40 bg-transparent px-8 text-sm font-semibold text-gold-2 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 sm:text-base"
              >
                {dict.hero.ctaSecondary}
                <Arrow className="h-4 w-4" aria-hidden />
              </a>
              {/* Live direct contacts — one tap to call or email */}
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-gold/30 px-6 text-sm font-semibold text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold-2 sm:text-base"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden />
                <span dir="ltr">+90 555 262 22 25</span>
              </a>
            </div>
          </div>

          {/* Photo slideshow column — clinic photos, auto every 5s */}
          <div className="rise rise-2 relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div aria-hidden className="absolute -top-10 end-[-8%] h-56 w-56 rounded-full bg-gold/15 blur-[90px]" />

            <div
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <figure
                className="relative aspect-[3/2] w-full overflow-hidden rounded-[2rem] border border-gold/30 bg-navy shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
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
                <div className="flex items-center gap-2 rounded-full border border-gold/25 bg-navy/70 px-2.5 py-1.5 shadow-xl backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label={dict.hero.prevSlide}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-gold hover:text-navy"
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
                          i === slide ? 'w-6 bg-gold' : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label={dict.hero.nextSlide}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-gold hover:text-navy"
                  >
                    <NextIcon className="h-4 w-4" aria-hidden />
                  </button>
                </div>

                {/* Location badge — now static below the photos (was floating on top of them) */}
                <div className="flex items-center gap-3 rounded-2xl border border-gold/35 bg-card/90 px-4 py-2.5 shadow-xl backdrop-blur">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/15 text-gold">
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

            {/* Floating ring ornament */}
            <div
              aria-hidden
              className="floaty absolute -top-7 -start-7 hidden h-20 w-20 rounded-full border border-gold/30 lg:block"
              style={{ animationDelay: '1.2s' }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="rise rise-4 mx-auto mt-14 grid max-w-3xl grid-cols-3 divide-x divide-gold/15 rounded-2xl border border-gold/20 bg-card/60 backdrop-blur rtl:divide-x-reverse">
          {dict.hero.stats.map((s, i) => (
            <div key={i} className="px-2 py-5 text-center sm:px-4">
              <div className="text-xl font-extrabold text-gold-grad sm:text-2xl lg:text-3xl" dir="ltr">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] font-medium text-muted-foreground sm:text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="gold-line absolute inset-x-0 bottom-0" aria-hidden />
    </section>
  )
}

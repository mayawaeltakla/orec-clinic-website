'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from './language-context'
import {
  MapPin,
  CalendarCheck,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Globe,
  Stethoscope,
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

  /* Slideshow — 5s auto-advance, paused on hover/focus, timer resets on manual nav.
     The incoming photo fades in (1s) ON TOP of the outgoing one, which stays opaque
     underneath until the fade ends, so there is never a dip to the page background. */
  const [slide, setSlide] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)
  const current = useRef(0)

  const show = (next: number) => {
    if (next === current.current) return
    setPrev(current.current)
    current.current = next
    setSlide(next)
  }

  useEffect(() => {
    if (prev === null) return
    const t = setTimeout(() => setPrev(null), 1100)
    return () => clearTimeout(t)
  }, [prev])

  useEffect(() => {
    if (paused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => show((current.current + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [paused, slide])

  const go = (delta: number) => show((current.current + delta + SLIDES.length) % SLIDES.length)
  const PrevIcon = dir === 'rtl' ? ChevronRight : ChevronLeft
  const NextIcon = dir === 'rtl' ? ChevronLeft : ChevronRight

  return (
    <section id="top" className="relative overflow-hidden pt-16 lg:pt-20">
      <div
        className="relative min-h-[620px] lg:min-h-[720px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        role="group"
        aria-roledescription="carousel"
      >
        {/* Full-bleed clinic photography, crossfading (own stacking context so the overlays stay on top) */}
        <div aria-hidden={false} className="absolute inset-0 z-0 isolate">
        {SLIDES.map(({ src, w, h, alt }, i) => (
          <div
            key={src}
            aria-hidden={i !== slide}
            className={`absolute inset-0 ${
              i === slide
                ? 'z-20 opacity-100 transition-opacity duration-1000 ease-in-out'
                : i === prev
                  ? 'z-10 opacity-100'
                  : 'z-0 opacity-0'
            }`}
          >
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
        </div>
        {/* Readability fade from the text side */}
        <div aria-hidden className="hero-fade absolute inset-0" />
        <div aria-hidden className="hero-leaf" />

        <div className="relative mx-auto flex min-h-[620px] w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:min-h-[720px] lg:px-8 lg:py-28">
          <div className="max-w-xl text-start">
            <p className="rise text-xs font-bold tracking-[0.35em] text-gold sm:text-sm" dir="ltr">
              {dict.hero.eyebrow}
            </p>

            <h1 className="rise rise-1 mt-6 text-3xl font-extrabold leading-[1.3] text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-[1.3]">
              {dict.hero.title1.split(/(\([^)]*\))/).map((part, i) =>
                part.startsWith('(') ? (
                  <bdi key={i} className="whitespace-nowrap">
                    {part}
                  </bdi>
                ) : (
                  part
                ),
              )}
              <span className="text-gold-grad mt-3 block">{dict.hero.title2}</span>
            </h1>

            <div className="rise rise-2 mt-8 flex flex-wrap items-center gap-3">
              {[
                { icon: MapPin, text: dict.hero.badges[0] },
                { icon: CalendarCheck, text: dict.hero.badges[1] },
                { icon: ShieldCheck, text: dict.hero.badges[2] },
              ].map(({ icon: Icon, text }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2 text-xs font-medium text-foreground/90 shadow-sm sm:text-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                  {text}
                </span>
              ))}
            </div>

            <div className="rise rise-3 mt-10 flex flex-wrap items-center gap-3">
              <a
                href={lp('/contact')}
                className="btn-gold inline-flex h-12 items-center rounded-full px-8 text-sm font-bold sm:text-base"
              >
                {dict.hero.ctaPrimary}
              </a>
              <a
                href={lp('/services')}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-foreground/25 bg-card/70 px-8 text-sm font-semibold text-gold-2 transition-all hover:border-gold hover:bg-card sm:text-base"
              >
                {dict.hero.ctaSecondary}
                <Arrow className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        {/* Slider arrows — faint, transparent, on the photo edges (no dots, no bar) */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={dict.hero.prevSlide}
          className="absolute start-1 top-1/2 z-30 flex h-14 w-10 -translate-y-1/2 items-center justify-center text-white/40 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] transition-colors hover:text-white/90 focus-visible:text-white sm:start-3"
        >
          <PrevIcon className="h-8 w-8" strokeWidth={1.5} aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={dict.hero.nextSlide}
          className="absolute end-1 top-1/2 z-30 flex h-14 w-10 -translate-y-1/2 items-center justify-center text-white/40 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] transition-colors hover:text-white/90 focus-visible:text-white sm:end-3"
        >
          <NextIcon className="h-8 w-8" strokeWidth={1.5} aria-hidden />
        </button>
      </div>

      {/* Stats — full-width deep navy band */}
      <div className="vars-navy leaf-navy relative overflow-hidden">
        <div className="mx-auto grid max-w-5xl grid-cols-1 px-4 sm:grid-cols-3 sm:px-6">
          {dict.hero.stats.map((s, i) => {
            const StatIcon = [CalendarDays, Globe, Stethoscope][i % 3]
            return (
              <div
                key={i}
                className={`flex items-center justify-center gap-4 px-4 py-6 sm:py-9 ${i > 0 ? 'border-t border-white/15 sm:border-s sm:border-t-0' : ''}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/90" aria-hidden>
                  <StatIcon className="h-6 w-6" />
                </span>
                <div className="text-start">
                  <div className="text-2xl font-extrabold leading-none text-white sm:text-3xl" dir="ltr">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-xs font-medium text-white/80 sm:text-sm">{s.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

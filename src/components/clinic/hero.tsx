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
        {/* Full-bleed clinic photography, crossfading */}
        {SLIDES.map(({ src, w, h, alt }, i) => (
          <div
            key={src}
            aria-hidden={i !== slide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${i === slide ? 'opacity-100' : 'opacity-0'}`}
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
                href={`tel:${CLINIC.phoneRaw}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card/90 px-6 text-sm font-semibold text-foreground/90 transition-all hover:border-gold hover:text-gold-2 sm:text-base"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden />
                <span dir="ltr">+90 555 262 22 25</span>
              </a>
            </div>

            <div className="rise rise-4 mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-card/90 px-4 py-2.5 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/15 text-gold">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-xs font-bold tracking-[0.18em] text-gold-2" dir="ltr">
                  {dict.hero.location}
                </span>
                <span className="mt-0.5 text-[11px] font-medium text-muted-foreground">{dict.hero.badges[0]}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Slider controls — bottom corner of the photo */}
        <div className="absolute bottom-5 end-4 flex items-center gap-2 rounded-full border border-border bg-card/95 px-2.5 py-1.5 shadow-sm sm:end-6">
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

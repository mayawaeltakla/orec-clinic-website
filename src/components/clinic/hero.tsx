'use client'

import Image from 'next/image'
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
  { src: '/hero/lobby.jpg', w: 1920, h: 1000, alt: 'Orec Clinic luxury reception and corridor — بهو الاستقبال في عيادة أوريك' },
  { src: '/hero/exterior.jpg', fit: 'contain' as const, w: 1005, h: 795, alt: 'Orec Clinic building — واجهة عيادة أوريك' },
  { src: '/hero/dentists.jpg', w: 1672, h: 941, alt: 'Orec Clinic modern dental clinic — عيادة أسنان عصرية بإضاءة مشرقة' },
  { src: '/hero/vip-car.jpg', w: 1672, h: 941, alt: 'Orec Clinic VIP Vito airport transfer — الاستقبال من المطار بسيارات Vito VIP' },
  { src: '/hero/entrance.jpg', fit: 'contain' as const, w: 1005, h: 1000, alt: 'Orec Clinic entrance — مدخل عيادة أوريك' },
  { src: '/hero/reception.jpg', w: 1670, h: 942, alt: 'Orec Clinic reception desk — استقبال عيادة أوريك' },
  { src: '/hero/exam.jpg', w: 1672, h: 941, alt: 'Professional dental examination at Orec Clinic — فحص أسنان احترافي في العيادة' },
  { src: '/hero/exam-close.jpg', fit: 'contain' as const, w: 845, h: 795, alt: 'Dental examination at Orec Clinic — فحص الأسنان في عيادة أوريك' },
  { src: '/hero/stairs.jpg', fit: 'contain' as const, w: 1448, h: 1086, alt: 'Orec Clinic waiting area and clinics — صالة الانتظار والعيادات في أوريك' },
  { src: '/hero/dentists-2.jpg', fit: 'contain' as const, w: 845, h: 1000, alt: 'Orec Clinic dentists at work — أطباء الأسنان أثناء العمل في أوريك' },
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
  /* Slides 2..n are only mounted after the page has loaded, so they never compete with the first photo (LCP),
     and are already decoded by the time the first crossfade starts (no blank flash on large screens). */
  const [ready, setReady] = useState(false)
  const current = useRef(0)

  const show = (next: number) => {
    if (next === current.current) return
    setPrev(current.current)
    current.current = next
    setSlide(next)
  }

  useEffect(() => {
    const go = () => setReady(true)
    if (document.readyState === 'complete') {
      const t = setTimeout(go, 300)
      return () => clearTimeout(t)
    }
    window.addEventListener('load', go, { once: true })
    const t = setTimeout(go, 3500)
    return () => {
      window.removeEventListener('load', go)
      clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    if (prev === null) return
    const t = setTimeout(() => setPrev(null), 1900)
    return () => clearTimeout(t)
  }, [prev])

  useEffect(() => {
    if (paused || !ready) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => show((current.current + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [paused, slide, ready])

  const go = (delta: number) => show((current.current + delta + SLIDES.length) % SLIDES.length)
  const PrevIcon = dir === 'rtl' ? ChevronRight : ChevronLeft
  const NextIcon = dir === 'rtl' ? ChevronLeft : ChevronRight

  return (
    <section id="top" className="relative overflow-hidden pt-16 lg:pt-20">
      <div aria-hidden className="hero-leaf" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
        <div className="text-start">
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

        {/* Photo slideshow — every photo is shown whole (16:9 frame; other shapes are fitted, never cropped) */}
        <div
          className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-navy-2 shadow-[0_30px_70px_-40px_rgba(10,46,77,0.6)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="group"
          aria-roledescription="carousel"
        >
          <div className="absolute inset-0 z-0 isolate">
            {SLIDES.map((sl, i) => (i === 0 || ready) && (
              <div
                key={sl.src}
                aria-hidden={i !== slide}
                className={`absolute inset-0 will-change-[opacity] ${
                  i === slide
                    ? 'z-20 opacity-100 transition-opacity duration-[1600ms] ease-in-out'
                    : i === prev
                      ? 'z-10 opacity-100'
                      : 'z-0 opacity-0'
                }`}
              >
                {'fit' in sl && (
                  <Image src={sl.src} alt="" aria-hidden fill sizes="(min-width:1024px) 50vw, 100vw" quality={70} className="scale-110 object-cover blur-2xl brightness-90" />
                )}
                <Image
                  src={sl.src}
                  alt={i === slide ? sl.alt : ''}
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  priority={i === 0}
                  loading="eager"
                  quality={75}
                  className={'fit' in sl ? 'object-contain' : 'object-cover'}
                />
              </div>
            ))}
          </div>

          {/* Slider arrows */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={dict.hero.prevSlide}
            className="absolute start-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/55 focus-visible:bg-black/55"
          >
            <PrevIcon className="h-6 w-6" strokeWidth={1.8} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={dict.hero.nextSlide}
            className="absolute end-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/55 focus-visible:bg-black/55"
          >
            <NextIcon className="h-6 w-6" strokeWidth={1.8} aria-hidden />
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

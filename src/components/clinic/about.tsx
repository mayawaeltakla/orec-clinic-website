'use client'

import Image from 'next/image'
import { useLanguage } from './language-context'
import { Quote, BadgeCheck, Sparkles, Gem, Stethoscope } from 'lucide-react'
import { Ornament } from './ornament'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'

export function About({ standalone = false }: { standalone?: boolean }) {
  const { dict, lp } = useLanguage()
  const a = dict.about
  if (standalone) return <AboutPage />

  return (
    <>
    <section id="about" className={`relative ${standalone ? 'py-14 sm:py-16' : 'py-24 sm:py-28 lg:py-32'}`}>
      <div className="gold-line absolute inset-x-0 top-0" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Text column */}
          <div className="lg:col-span-3">
            {!standalone && (
              <>
            <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">
              {a.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
              <span className="text-gold-grad">{a.title}</span>
            </h2>
          <Ornament className="!mx-0 !justify-start" />

              </>
            )}

            <figure className={`${standalone ? '' : 'mt-8'} overflow-hidden rounded-3xl border border-border shadow-[0_24px_60px_-34px_rgba(10,46,77,0.5)]`}>
              <img src="/orec-lobby.jpg" alt="Orec Clinic — عيادة أوريك" width={1400} height={788} loading="lazy" className="aspect-[16/9] w-full object-cover" />
            </figure>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-gold-2">
                  <Stethoscope className="h-5 w-5 text-gold" aria-hidden />
                  {a.intro.title}
                </h3>
                <p className="mt-2 text-sm leading-loose text-muted-foreground sm:text-base">
                  {a.intro.text}
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-gold-2">
                  <Gem className="h-5 w-5 text-gold" aria-hidden />
                  {a.vision.title}
                </h3>
                <p className="mt-2 text-sm leading-loose text-muted-foreground sm:text-base">
                  {a.vision.text}
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-gold-2">
                  <Sparkles className="h-5 w-5 text-gold" aria-hidden />
                  {a.specialty.title}
                </h3>
                <p className="mt-2 text-sm leading-loose text-muted-foreground">{a.specialty.text}</p>
                <ul className="mt-4 space-y-3">
                  {a.specialty.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-navy-2/50 p-4">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                      <div>
                        <span className="block text-sm font-bold text-foreground">{it.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{it.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Founder + license column */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-5">
              <figure className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-gold/12 via-card to-card p-6 sm:p-7">
                <Quote className="absolute end-4 top-4 h-10 w-10 text-gold/20" aria-hidden />
                <figcaption className="text-sm font-bold tracking-wide text-gold" dir="auto">
                  {a.founder.title}
                </figcaption>
                <blockquote className="mt-4 text-sm leading-loose text-foreground/90">
                  {a.founder.quote}
                </blockquote>
                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                  <img
                    src="/founder-dr-alzuhaili.jpg"
                    alt={a.founder.name}
                    className="h-20 w-20 shrink-0 rounded-2xl border border-gold/40 object-cover sm:h-24 sm:w-24"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="text-base font-extrabold text-gold-grad" dir="auto">
                      {a.founder.name}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-muted-foreground" dir="ltr">
                      {a.founder.nameEn}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground/85">{a.founder.role}</p>
                  </div>
                </div>
              </figure>

              <div className="rounded-2xl border border-border bg-navy-2/60 p-6 text-center">
                <ShieldBadge />
                <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground/85">{a.license}</p>
                <a
                  href={lp('/contact')}
                  className="btn-gold mt-5 inline-flex h-11 items-center rounded-full px-7 text-sm font-bold"
                >
                  {a.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

function ShieldBadge() {
  return (
    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

/** Full "About" page: hero split, three pillars, standards grid, founder, license + CTA. Uses only the clinic's own About content. */
function AboutPage() {
  const { dict, dir, lp } = useLanguage()
  const a = dict.about
  const Chevron = dir === 'rtl' ? ChevronLeft : ChevronRight
  const pillars = [
    { icon: Stethoscope, title: a.intro.title, text: a.intro.text, dark: false },
    { icon: Gem, title: a.vision.title, text: a.vision.text, dark: true },
    { icon: Sparkles, title: a.specialty.title, text: a.specialty.text, dark: false },
  ]
  return (
    <>
      {/* 1. Hero split */}
      <section className="relative overflow-hidden border-b border-border">
        <Image src="/orec-lobby.jpg" alt="" aria-hidden fill sizes="100vw" priority quality={70} className="object-cover object-[50%_40%]" />
        <div aria-hidden className="hero-fade absolute inset-0" />
        <div aria-hidden className="hero-leaf" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-20">
          <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <a href={lp('/')} className="inline-flex items-center gap-1 hover:text-gold-2">
              <Home className="h-3.5 w-3.5" aria-hidden />
              {dict.nav.home}
            </a>
            <Chevron className="h-3.5 w-3.5" aria-hidden />
            <span className="font-semibold text-foreground">{a.title}</span>
          </nav>
          <div className="mt-8">
            <div className="rise max-w-xl lg:max-w-2xl">
              <p className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-gold" dir="ltr">
                {a.eyebrow}
              </p>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                <span className="text-gold-grad">{a.title}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Intro text + actions, under the hero */}
      <section className="pt-12 sm:pt-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm leading-loose text-muted-foreground sm:text-lg">{a.intro.text}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={lp('/contact')} className="btn-gold inline-flex h-12 items-center rounded-full px-8 text-sm font-bold">
              {a.cta}
            </a>
            <a href={lp('/services')} className="inline-flex h-12 items-center rounded-full border border-border bg-card px-8 text-sm font-bold text-foreground transition-colors hover:border-gold/50">
              {dict.nav.services}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Three pillars */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className={`lift rounded-3xl border p-7 ${p.dark ? 'band-navy border-transparent' : 'orec-card border-border bg-card'}`}>
                <span className="gold-ring flex h-12 w-12 items-center justify-center rounded-full" aria-hidden>
                  <p.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-xl font-extrabold text-gold-2">{p.title}</h2>
                <p className="mt-3 text-sm leading-loose text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Standards grid */}
      <section className="band-sky border-y border-border py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
            <span className="text-gold-grad">{a.specialty.title}</span>
          </h2>
          <Ornament />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.specialty.items.map((it, i) => (
              <li key={i} className="lift flex flex-col rounded-2xl border border-border bg-card p-6">
                <BadgeCheck className="h-6 w-6 text-gold" aria-hidden />
                <span className="mt-4 block text-base font-bold text-foreground">{it.title}</span>
                <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{it.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Founder */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <figure className="relative grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-gold/12 via-card to-card p-7 sm:p-10 md:grid-cols-[auto_1fr]">
            <Quote className="absolute end-6 top-6 h-12 w-12 text-gold/20" aria-hidden />
            <img src="/founder-dr-alzuhaili.jpg" alt={a.founder.name} className="mx-auto h-44 w-44 rounded-3xl border border-gold/40 object-cover sm:h-52 sm:w-52" loading="lazy" />
            <div>
              <figcaption className="text-sm font-bold tracking-wide text-gold" dir="auto">{a.founder.title}</figcaption>
              <blockquote className="mt-4 text-sm leading-loose text-foreground/90 sm:text-base">{a.founder.quote}</blockquote>
              <p className="mt-5 text-lg font-extrabold text-gold-grad" dir="auto">{a.founder.name}</p>
              <p className="text-xs text-muted-foreground" dir="ltr">{a.founder.nameEn}</p>
              <p className="mt-1 text-sm font-semibold text-foreground/85">{a.founder.role}</p>
            </div>
          </figure>
        </div>
      </section>

      {/* 5. License + CTA band */}
      <section className="band-navy vars-navy py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <ShieldBadge />
          <p className="mt-4 text-base font-semibold leading-relaxed text-foreground/90">{a.license}</p>
          <a href={lp('/contact')} className="btn-gold mt-7 inline-flex h-12 items-center rounded-full px-9 text-sm font-bold">
            {a.cta}
          </a>
        </div>
      </section>
    </>
  )
}

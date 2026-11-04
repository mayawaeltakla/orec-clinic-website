'use client'

import type { ReactNode } from 'react'
import { useLanguage } from './language-context'
import { SiteShell } from './site-shell'
import { useServicesContent, useDynamicTitle } from './use-services-content'
import { getDepartment, getService } from '@/lib/services-content'
import type { ServicesUI, ServiceSection } from '@/lib/services-content/types'
import {
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Sparkle,
  ArrowLeft,
  ArrowRight,
  Home,
  SearchX,
  HeartHandshake,
} from 'lucide-react'

/** Client-side shell so server routes can pass a localized title callback safely */
export function ServicesShell({ children }: { children: ReactNode }) {
  return (
    <SiteShell title={(d) => `${d.services.title} | Orec Clinic`}>
      {children}
    </SiteShell>
  )
}

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

function PageSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-busy="true">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <div className="mx-auto h-4 w-44 animate-pulse rounded-full bg-gold/20" />
        <div className="mx-auto h-10 w-2/3 animate-pulse rounded-2xl bg-gold/15" />
        <div className="mx-auto h-4 w-full animate-pulse rounded-full bg-gold/10" />
        <div className="mx-auto h-4 w-5/6 animate-pulse rounded-full bg-gold/10" />
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-48 animate-pulse rounded-3xl border border-gold/10 bg-card/50" />
        ))}
      </div>
    </div>
  )
}

function Breadcrumb({ items, ui }: { items: { label: string; href?: string }[]; ui: ServicesUI }) {
  const { dir } = useLanguage()
  const Chevron = dir === 'rtl' ? ChevronLeft : ChevronRight
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-foreground/70">
      <a href="/" className="inline-flex items-center gap-1 transition-colors hover:text-gold-2">
        <Home className="h-3.5 w-3.5" aria-hidden />
        {ui.breadcrumbHome}
      </a>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          <Chevron className="h-3 w-3 text-gold/60" aria-hidden />
          {item.href ? (
            <a href={item.href} className="transition-colors hover:text-gold-2">
              {item.label}
            </a>
          ) : (
            <span className="font-semibold text-gold-2">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

function CtaBand({ ui }: { ui: ServicesUI }) {
  const { dir } = useLanguage()
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight
  return (
    <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl border border-gold/30 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent p-6 text-center sm:flex-row sm:p-8 sm:text-start">
      <div className="flex items-center gap-4">
        <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/40 bg-navy text-gold sm:flex" aria-hidden>
          <HeartHandshake className="h-7 w-7" />
        </span>
        <div>
          <h3 className="text-lg font-extrabold text-gold-2 sm:text-xl">{ui.ctaTitle}</h3>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">{ui.ctaText}</p>
        </div>
      </div>
      <a
        href="/contact"
        className="btn-gold inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-6 text-sm font-bold"
      >
        {ui.ctaButton}
        <Arrow className="h-4 w-4" aria-hidden />
      </a>
    </div>
  )
}

function NotFoundView({ ui, backHref, backLabel }: { ui: ServicesUI; backHref: string; backLabel: string }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-gold/30 bg-navy-2 text-gold" aria-hidden>
        <SearchX className="h-8 w-8" />
      </span>
      <h1 className="mt-6 text-2xl font-extrabold text-gold-2 sm:text-3xl">{ui.notFoundTitle}</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{ui.notFoundText}</p>
      <a href={backHref} className="btn-gold mt-8 inline-flex h-11 items-center rounded-full px-6 text-sm font-bold">
        {backLabel}
      </a>
    </div>
  )
}

/** Full-bleed hero with the department photo — shared by both page kinds */
function Hero({
  image,
  eyebrow,
  title,
  en,
  tagline,
  breadcrumb,
  ui,
}: {
  image: string
  eyebrow: string
  title: string
  en: string
  tagline: string
  breadcrumb: { label: string; href?: string }[]
  ui: ServicesUI
}) {
  return (
    <section className="relative overflow-hidden border-b border-gold/15 bg-gradient-to-b from-secondary to-background">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.14),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <Breadcrumb items={breadcrumb} ui={ui} />
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              <span className="text-gold-grad">{title}</span>
            </h1>
            <p className="mt-2 text-xs font-semibold tracking-widest text-foreground/60" dir="ltr">
              {en}
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-foreground/85 sm:text-base">
              {tagline}
            </p>
          </div>
          {/* Full, clear photo — no overlay, no blur, never cropped (16:9 source) */}
          <div className="overflow-hidden rounded-3xl border border-gold/25 shadow-xl">
            <img src={image} alt={`${title} — Orec Clinic`} className="aspect-video h-auto w-full object-contain bg-navy-2" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  )
}

/** One medical section: icon + heading + paragraphs / titled blocks / bullet list */
function SectionBlock({ section }: { section: ServiceSection }) {
  return (
    <section className="rounded-3xl border border-gold/15 bg-card/60 p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-navy-2 text-lg"
          aria-hidden
        >
          {section.icon}
        </span>
        <h2 className="text-lg font-extrabold text-gold-2 sm:text-2xl">{section.heading}</h2>
      </div>

      {section.paragraphs?.map((p, pi) => (
        <p key={pi} className="mt-4 text-sm leading-loose text-foreground/90 sm:text-base">
          {p}
        </p>
      ))}

      {section.blocks && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {section.blocks.map((b, bi) => (
            <div key={bi} className="lift rounded-2xl border border-gold/15 bg-navy-2/50 p-5">
              <h3 className="flex items-start gap-2 text-sm font-bold text-gold-2 sm:text-base">
                <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      )}

      {section.list && (
        <ul className="mt-5 space-y-2.5">
          {section.list.map((li, lix) => (
            <li key={lix} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85 sm:text-base">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
              {li}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Department page — /services/<dept>                                  */
/* ------------------------------------------------------------------ */

export function DepartmentPage({ deptSlug }: { deptSlug: string }) {
  const sc = useServicesContent()
  const dept = getDepartment(deptSlug)
  const content = sc && dept ? sc.departments[dept.slug] : undefined

  useDynamicTitle(content ? `${content.title} | Orec Clinic` : null)

  if (!dept) {
    return sc ? (
      <NotFoundView ui={sc.ui} backHref="/services" backLabel={sc.ui.backToServices} />
    ) : (
      <PageSkeleton />
    )
  }
  if (!sc || !content) return <PageSkeleton />

  const ui = sc.ui

  const serviceCard = (slug: string) => {
    const def = dept.services.find((s) => s.slug === slug)!
    const sub = content.services[slug]
    if (!sub) return null
    return (
      <article
        key={slug}
        className="lift group relative flex flex-col overflow-hidden rounded-3xl border border-gold/20 bg-card/80 p-6"
      >
        {def.image && (
          <img
            src={def.image}
            alt={sub.title}
            className="-mx-6 -mt-6 mb-6 aspect-video w-[calc(100%+3rem)] object-cover"
            loading="lazy"
          />
        )}
        <div
          aria-hidden
          className="absolute -top-16 end-[-15%] h-36 w-36 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="relative flex items-start justify-between gap-3">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-navy-2 text-xl"
            aria-hidden
          >
            {def.icon}
          </span>
          <span className="pt-1 text-end text-[11px] font-semibold leading-snug text-muted-foreground" dir="ltr">
            {def.en}
          </span>
        </div>
        <h3 className="relative mt-4 text-lg font-extrabold text-gold-2">{sub.title}</h3>
        <p className="relative mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {sub.tagline}
        </p>
        <a
          href={`/services/${dept.slug}/${def.slug}`}
          className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gold-2 transition-colors hover:text-gold"
        >
          {ui.exploreService}
          <ChevronR className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
        </a>
      </article>
    )
  }

  return (
    <div>
      <Hero
        image={dept.image}
        eyebrow={`${dept.num} · ${dept.code}`}
        title={content.title}
        en={dept.en}
        tagline={content.tagline}
        ui={ui}
        breadcrumb={[
          { label: ui.breadcrumbServices, href: '/services' },
          { label: content.title },
        ]}
      />

      {/* Intro */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="gold-line mb-12" aria-hidden />
          <div className="mx-auto max-w-3xl space-y-4">
            {content.intro.map((p, i) => (
              <p key={i} className="text-sm leading-loose text-foreground/90 sm:text-base">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="relative pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">
              {dept.code}
            </p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              <span className="text-gold-grad">{ui.subServicesTitle}</span>
            </h2>
          </div>

          {dept.groups ? (
            <div className="mt-12 space-y-14">
              {dept.groups.map((g) => {
                const group = content.groups?.[g.slug]
                const items = dept.services.filter((s) => s.group === g.slug).map((s) => s.slug)
                return (
                  <div key={g.slug}>
                    <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-gold/20 bg-navy-2/60 p-5 sm:p-6">
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-navy text-xl" aria-hidden>
                          {g.icon}
                        </span>
                        <div>
                          <h3 className="text-lg font-extrabold text-gold-2 sm:text-xl">
                            {group?.title ?? g.en}
                          </h3>
                          {group?.description && (
                            <p className="mt-1 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                              {group.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-gold/60" dir="ltr">
                        {g.en}
                      </span>
                    </div>
                    <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {items.map(serviceCard)}
                    </div>
                    {group?.sections?.map((section, si) => (
                      <SectionBlock key={si} section={section} />
                    ))}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {dept.services.map((s) => serviceCard(s.slug))}
            </div>
          )}

          <CtaBand ui={ui} />
        </div>
      </section>
    </div>
  )
}

/** Direction-aware chevron used inside cards/links */
function ChevronR({ className }: { className?: string }) {
  const { dir } = useLanguage()
  const Icon = dir === 'rtl' ? ChevronLeft : ChevronRight
  return <Icon className={className} aria-hidden />
}

/* ------------------------------------------------------------------ */
/* Sub-service page — /services/<dept>/<service>                       */
/* ------------------------------------------------------------------ */

export function SubServicePage({ deptSlug, serviceSlug }: { deptSlug: string; serviceSlug: string }) {
  const sc = useServicesContent()
  const lookup = getService(deptSlug, serviceSlug)
  const content = sc && lookup ? sc.departments[lookup.department.slug]?.services[lookup.service.slug] : undefined

  useDynamicTitle(content ? `${content.title} | Orec Clinic` : null)

  if (!lookup) {
    return sc ? (
      <NotFoundView ui={sc.ui} backHref="/services" backLabel={sc.ui.backToServices} />
    ) : (
      <PageSkeleton />
    )
  }
  const { department: dept, service: def } = lookup
  if (!sc || !content) return <PageSkeleton />
  const ui = sc.ui
  const deptContent = sc.departments[dept.slug]

  return (
    <div>
      <Hero
        image={def.image ?? dept.image}
        eyebrow={`${dept.num} · ${dept.code}`}
        title={content.title}
        en={def.en}
        tagline={content.tagline}
        ui={ui}
        breadcrumb={[
          { label: ui.breadcrumbServices, href: '/services' },
          { label: deptContent.title, href: `/services/${dept.slug}` },
          { label: content.title },
        ]}
      />

      {/* Body */}
      <section className="relative py-14 sm:py-18">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="gold-line mb-10" aria-hidden />

          <p className="text-base leading-loose text-foreground/90 sm:text-lg">{content.intro}</p>

          <div className="mt-12 space-y-12">
            {content.sections.map((section, si) => (
              <SectionBlock key={si} section={section} />
            ))}
          </div>

          <CtaBand ui={ui} />
        </div>
      </section>

      {/* Related services in the same department */}
      {dept.services.length > 1 && (
        <section className="relative border-t border-gold/15 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-gold-2 sm:text-2xl">
                <Sparkle className="h-5 w-5 text-gold" aria-hidden />
                {ui.relatedTitle}
              </h2>
              <a
                href={`/services/${dept.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-2 transition-colors hover:text-gold"
              >
                {ui.backToDepartment}
                <ChevronR className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dept.services
                .filter((s) => s.slug !== def.slug)
                .map((s) => {
                  const sub = deptContent.services[s.slug]
                  return (
                    <a
                      key={s.slug}
                      href={`/services/${dept.slug}/${s.slug}`}
                      className="lift group flex items-center gap-4 rounded-2xl border border-gold/15 bg-card/70 p-4 transition-colors hover:border-gold/40"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-navy-2 text-lg" aria-hidden>
                        {s.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-bold text-foreground group-hover:text-gold-2">
                          {sub?.title ?? s.en}
                        </span>
                        <span className="block truncate text-xs text-muted-foreground" dir="ltr">
                          {s.en}
                        </span>
                      </span>
                    </a>
                  )
                })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

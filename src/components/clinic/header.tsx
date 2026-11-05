'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from './language-context'
import { LanguageSwitcher } from './language-switcher'
import { ThemeToggle } from './theme-toggle'
import { whatsappLink, CLINIC } from '@/lib/i18n'
import { DEPT_SLUG_BY_ID } from '@/lib/services-content/config'
import { WhatsAppGlyph } from './social-icons'
import { PAGE_LABELS } from '@/lib/i18n/page-labels'
import { SECTION_LABELS } from '@/lib/i18n/section-labels'
import { Menu, X, ChevronDown, MessageCircle, Phone, Mail } from 'lucide-react'

export function Header() {
  const { dict, lp, lang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const SL = SECTION_LABELS[lang.code]
  const links = [
    { href: '/', label: dict.nav.home },
    { href: '/services', label: dict.nav.services },
    { href: '/about', label: dict.nav.about },
    { href: '/why', label: dict.nav.why },
    { href: '/team', label: PAGE_LABELS[lang.code].nav },
    { href: '/experiences', label: SL.experiences },
    { href: '/blog', label: SL.blog },
    { href: '/contact', label: dict.nav.contact },
  ]
  const mobileLinks = links

  const cosmeticGroups = dict.services.categories.find((c) => c.id === 'cosmetic')?.groups ?? []

  return (
    <header
      className={`vars-navy header-navy fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Brand — official Orec Clinic logo */}
        <a href={lp('/')} className="flex items-center" aria-label="Orec Clinic">
          <img
            src="/orec-logo.png"
            alt="Orec Clinic — عيادة أوريك"
            className="h-11 w-auto lg:h-12"
            width={95}
            height={48}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0 lg:flex" aria-label="Main">
          {links.map((l) =>
            l.href === '/services' ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onKeyDown={(e) => e.key === 'Escape' && setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className="inline-flex h-10 items-center gap-1 whitespace-nowrap rounded-full px-2 text-[13px] font-medium xl:px-2.5 text-foreground/85 transition-colors hover:bg-accent hover:text-gold-2"
                >
                  {l.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                {/* Services mega dropdown */}
                <div
                  className={`absolute start-0 top-full z-50 w-[560px] transition-all duration-200 ${
                    servicesOpen
                      ? 'visible translate-y-0 opacity-100'
                      : 'invisible translate-y-2 opacity-0'
                  }`}
                >
                  <div className="mt-2 grid grid-cols-2 gap-1 rounded-2xl border border-gold/25 bg-popover/95 p-3 shadow-2xl backdrop-blur">
                    {dict.services.categories.map((c) => (
                      <a
                        key={c.id}
                        href={lp(`/services/${DEPT_SLUG_BY_ID[c.id] ?? ''}`)}
                        className="rounded-xl p-3 transition-colors hover:bg-accent"
                      >
                        <span className="flex items-center gap-2 text-sm font-bold text-gold-2">
                          <span className="text-[10px] font-semibold text-gold/60">{c.num}</span>
                          {c.title}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                          {c.id === 'cosmetic'
                            ? cosmeticGroups.map((g) => g.name).join(' · ')
                            : c.items.map((i) => i.name).slice(0, 4).join(' · ')}
                        </span>
                      </a>
                    ))}
                    <div className="col-span-2 mt-1 border-t border-gold/15 pt-2">
                      <a
                        href={lp('/services#dental')}
                        className="block rounded-xl bg-secondary/60 p-3 text-center text-sm font-semibold text-gold-2 transition-colors hover:bg-accent"
                      >
                        {dict.nav.servicesIndex} →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={l.href}
                href={lp(l.href)}
                className="inline-flex h-10 items-center whitespace-nowrap rounded-full px-2 text-[13px] font-medium xl:px-2.5 text-foreground/85 transition-colors hover:bg-accent hover:text-gold-2"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        {/* Actions — live contacts: tap to call, chat or book */}
        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(dict.whatsapp.prefill)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.contact.whatsapp}
            title={dict.contact.whatsapp}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-wa text-white shadow-md transition hover:scale-105 hover:brightness-110"
          >
            <WhatsAppGlyph className="h-5 w-5" />
          </a>
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href={lp('/contact')}
            className="btn-gold hidden h-10 items-center whitespace-nowrap rounded-full px-5 text-sm font-bold xl:inline-flex"
          >
            {dict.nav.book}
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? dict.nav.menuClose : dict.nav.menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-secondary/60 text-foreground transition-colors hover:bg-accent lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gold/15 bg-background/95 shadow-2xl backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            {mobileLinks.map((l) => (
              <a
                key={l.href}
                href={lp(l.href)}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-accent hover:text-gold-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink(dict.whatsapp.prefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-wa px-4 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {dict.contact.whatsappCta}
            </a>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl border border-gold/30 px-4 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent"
              dir="ltr"
            >
              <Phone className="h-4 w-4 text-gold" aria-hidden />
              {CLINIC.phoneDisplay}
            </a>
            <a
              href={`mailto:${CLINIC.email}`}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl border border-gold/25 px-4 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:bg-accent"
              dir="ltr"
            >
              <Mail className="h-4 w-4 text-gold" aria-hidden />
              {CLINIC.email}
            </a>
            <a
              href={lp('/contact')}
              onClick={() => setMobileOpen(false)}
              className="btn-gold mt-1 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-bold"
            >
              {dict.nav.book}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

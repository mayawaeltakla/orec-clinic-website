'use client'

import { useLanguage } from './language-context'
import { CLINIC } from '@/lib/i18n'
import { Mail, Phone, MapPin } from 'lucide-react'
import { SOCIALS } from './social-icons'

export function Footer() {
  const { dict } = useLanguage()
  const f = dict.footer

  const quickLinks = [
    { href: '/', label: dict.nav.home },
    { href: '/services', label: dict.nav.services },
    { href: '/about', label: dict.nav.about },
    { href: '/why', label: dict.nav.why },
    { href: '/contact', label: dict.nav.contact },
  ]

  const socials = SOCIALS

  return (
    <footer className="relative mt-auto border-t border-gold/20 bg-deep">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand — official Orec Clinic logo */}
          <div>
            <a href="/" className="inline-flex items-center" aria-label="Orec Clinic">
                  <img
                src="/orec-logo.png"
                alt="Orec Clinic — عيادة أوريك"
                className="h-16 w-auto"
                width={126}
                height={64}
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.tagline}</p>
            <p className="mt-3 text-[11px] font-bold tracking-[0.25em] text-gold/70" dir="ltr">
              {f.care}
            </p>
            <div className="mt-5">
              <span className="text-sm font-semibold text-foreground/85">{f.follow}</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-card text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-gold-2">{f.quickLinks}</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold/60" aria-hidden />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-gold-2">{f.servicesTitle}</h3>
            <ul className="mt-4 space-y-2.5">
              {dict.services.categories.map((c) => (
                <li key={c.id}>
                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold/60" aria-hidden />
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-gold-2">{f.contactTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-2 transition-colors hover:text-gold-2">
                  <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <span dir="ltr">{CLINIC.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${CLINIC.phoneRaw}`} className="flex items-center gap-2 transition-colors hover:text-gold-2">
                  <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <span dir="ltr">{CLINIC.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CLINIC.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-wa"
                >
                  <span className="shrink-0 text-wa">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  <span dir="ltr">{CLINIC.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition-colors hover:text-gold-2"
                  title={CLINIC.address}
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <span dir="ltr">{CLINIC.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold/15 pt-6 text-center sm:flex-row sm:text-start">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Orec Clinic — عيادة أوريك. {f.rights}
          </p>
          <p className="flex items-center gap-1.5 text-xs font-medium text-gold-2/90">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {f.location}
          </p>
        </div>
      </div>
    </footer>
  )
}

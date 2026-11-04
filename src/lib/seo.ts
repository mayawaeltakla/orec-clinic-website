import type { Metadata } from 'next'
import { CLINIC, LANGUAGES, localePath, localeSlug, getLanguage, type LanguageCode } from '@/lib/i18n'

/** Set NEXT_PUBLIC_SITE_URL (e.g. https://www.orecclinic.com) once the real domain is connected. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://orec-clinic-website.vercel.app').replace(/\/$/, '')

const OG_LOCALE: Record<string, string> = {
  ar: 'ar_AR', en: 'en_US', es: 'es_ES', tr: 'tr_TR', fr: 'fr_FR',
  de: 'de_DE', it: 'it_IT', ru: 'ru_RU', pl: 'pl_PL', deCH: 'de_CH',
}

/** hreflang map for one page: every language + x-default (Arabic) */
export function languageAlternates(path: string): Record<string, string> {
  const map: Record<string, string> = {}
  for (const l of LANGUAGES) map[l.htmlLang] = localePath(l.code, path)
  map['x-default'] = localePath('ar', path)
  return map
}

function shorten(text: string, max = 160): string {
  const t = text.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max - 1)
  return cut.slice(0, cut.lastIndexOf(' ') > 80 ? cut.lastIndexOf(' ') : max - 1).replace(/[,;:\-–—،.]+$/, '') + '…'
}

export function buildMetadata({
  lang,
  path,
  title,
  description,
  image = '/orec-exterior.jpg',
}: {
  lang: LanguageCode
  path: string
  title: string
  description: string
  image?: string
}): Metadata {
  const canonical = localePath(lang, path)
  description = shorten(description)
  return {
    title,
    description,
    alternates: { canonical, languages: languageAlternates(path) },
    openGraph: {
      type: 'website',
      siteName: 'Orec Clinic — عيادة أوريك',
      title,
      description,
      url: canonical,
      locale: OG_LOCALE[lang] ?? 'en_US',
      images: [{ url: image, alt: 'Orec Clinic' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}

/** Structured data for the clinic (only facts that already appear on the site) */
export function clinicJsonLd(lang: LanguageCode) {
  const meta = getLanguage(lang)
  const sameAs = [CLINIC.instagram, CLINIC.facebook, CLINIC.youtube, CLINIC.tiktok, CLINIC.x, CLINIC.linkedin].filter(Boolean)
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'Dentist'],
    name: 'Orec Clinic — عيادة أوريك',
    url: `${SITE_URL}${localePath(lang)}`,
    logo: `${SITE_URL}/orec-logo.png`,
    image: `${SITE_URL}/orec-exterior.jpg`,
    description: meta.dict.meta.description,
    telephone: CLINIC.phoneRaw,
    email: CLINIC.email,
    foundingDate: '2015',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bağcılar Merkez, 675. Sk.',
      addressLocality: 'İstanbul',
      addressCountry: 'TR',
    },
    medicalSpecialty: ['Dentistry', 'PlasticSurgery'],
    availableLanguage: ['ar', 'en', 'tr', 'de', 'fr', 'es', 'it', 'ru', 'pl'],
    sameAs,
  }
}

export { localeSlug }

import type { Dictionary, LanguageCode } from './types'

export type { Dictionary, LanguageCode } from './types'

export interface LanguageMeta {
  code: LanguageCode
  label: string
  native: string
  flag: string
  dir: 'rtl' | 'ltr'
  htmlLang: string
}

export const LANGUAGES: LanguageMeta[] = [
  { code: 'ar', label: 'العربية', native: 'العربية', flag: '🇸🇦', dir: 'rtl', htmlLang: 'ar' },
  { code: 'en', label: 'English', native: 'English', flag: '🇬🇧', dir: 'ltr', htmlLang: 'en' },
  { code: 'es', label: 'Español', native: 'Español', flag: '🇪🇸', dir: 'ltr', htmlLang: 'es' },
  { code: 'tr', label: 'Türkçe', native: 'Türkçe', flag: '🇹🇷', dir: 'ltr', htmlLang: 'tr' },
  { code: 'fr', label: 'Français', native: 'Français', flag: '🇫🇷', dir: 'ltr', htmlLang: 'fr' },
  { code: 'de', label: 'Deutsch', native: 'Deutsch', flag: '🇩🇪', dir: 'ltr', htmlLang: 'de' },
  { code: 'it', label: 'Italiano', native: 'Italiano', flag: '🇮🇹', dir: 'ltr', htmlLang: 'it' },
  { code: 'ru', label: 'Русский', native: 'Русский', flag: '🇷🇺', dir: 'ltr', htmlLang: 'ru' },
  { code: 'pl', label: 'Polski', native: 'Polski', flag: '🇵🇱', dir: 'ltr', htmlLang: 'pl' },
  { code: 'deCH', label: 'Schweizerdeutsch', native: 'Schweizerdeutsch', flag: '🇨🇭', dir: 'ltr', htmlLang: 'de-CH' },
]

export const DEFAULT_LANGUAGE: LanguageCode = 'ar'
export const RTL_LANGUAGES: LanguageCode[] = ['ar']

export function getLanguage(code: LanguageCode | string | null | undefined): LanguageMeta {
  const found = LANGUAGES.find((l) => l.code === code)
  return found ?? LANGUAGES[0]
}

/** URL segment per language (deCH → de-ch) */
export function localeSlug(code: LanguageCode | string): string {
  return code === 'deCH' ? 'de-ch' : String(code)
}

export function getLanguageBySlug(slug: string | null | undefined): LanguageMeta | undefined {
  return LANGUAGES.find((l) => localeSlug(l.code) === slug)
}

/** Locale-prefixed path: localePath('en', '/services') → /en/services · localePath('ar', '/') → /ar */
export function localePath(code: LanguageCode | string, path: string = '/'): string {
  const rest = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`
  return `/${localeSlug(code)}${rest}`
}

export function isRTL(code: LanguageCode | string | null | undefined): boolean {
  return RTL_LANGUAGES.includes(getLanguage(code).code)
}

/** Clinic contact constants — shared across the site */
export const CLINIC = {
  phoneDisplay: '+90 555 262 22 25',
  phoneRaw: '+905552622225',
  whatsappNumber: '905552622225',
  email: 'info@dr-orecclinic.com',
  address: 'Bağcılar Merkez, 675. Sk., İstanbul, Türkiye',
  instagram: 'https://www.instagram.com/orec.clinic',
  facebook: 'https://www.facebook.com/Orec.Clinic',
  youtube: 'https://www.youtube.com/@orec.clinic',
  tiktok: 'https://www.tiktok.com/@orec.clinic',
  x: 'https://x.com/orec_clinic',
  linkedin: 'https://www.linkedin.com/company/orec-clinic',
  /** «Rate us» target: the clinic's Google Maps listing (replace with the direct review link when available) */
  reviewUrl: 'https://www.google.com/maps/search/?api=1&query=Orec+Clinic+Ba%C4%9Fc%C4%B1lar+%C4%B0stanbul' as string,
} as const

export function whatsappLink(prefill: string): string {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(prefill)}`
}

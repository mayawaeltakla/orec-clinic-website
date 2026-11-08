import type { LanguageCode } from './types'

/** «Available 24/7» badge text and «Rate us» button label, per language. */
export const AVAILABLE_247: Record<LanguageCode, string> = {
  ar: 'متاحون 24/7',
  en: 'Available 24/7',
  es: 'Disponibles 24/7',
  tr: '7/24 hizmetinizdeyiz',
  fr: 'Disponibles 24h/24, 7j/7',
  de: 'Rund um die Uhr erreichbar (24/7)',
  it: 'Disponibili 24/7',
  ru: 'На связи 24/7',
  pl: 'Dostępni 24/7',
  deCH: 'Rund um die Uhr erreichbar (24/7)',
}

export const RATE_US: Record<LanguageCode, string> = {
  ar: 'قيّمونا',
  en: 'Rate us',
  es: 'Valóranos',
  tr: 'Bizi değerlendirin',
  fr: 'Évaluez-nous',
  de: 'Bewerten Sie uns',
  it: 'Valutaci',
  ru: 'Оцените нас',
  pl: 'Oceń nas',
  deCH: 'Bewerten Sie uns',
}

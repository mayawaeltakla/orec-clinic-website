/**
 * Loader for the deep services content.
 *
 * Each language is a separate lazy chunk (content/<lang>.ts wrapping
 * content/<lang>/*.json) — only the selected language is downloaded.
 * deCH (Swiss High German) is derived from `de` at runtime via the same
 * swissify transform used by src/lib/i18n/deCH.ts, which guarantees
 * structural parity for free.
 */

import type { LanguageCode } from '@/lib/i18n/types'
import type { ServicesContent } from './types'

const swissify = (s: string) => s.replace(/ß/g, 'ss')

function toSwiss(content: ServicesContent): ServicesContent {
  return JSON.parse(
    JSON.stringify(content, (_key, value) => (typeof value === 'string' ? swissify(value) : value)),
  ) as ServicesContent
}

const LOADERS: Record<LanguageCode, () => Promise<ServicesContent>> = {
  ar: () => import('./content/ar').then((m) => m.default),
  en: () => import('./content/en').then((m) => m.default),
  es: () => import('./content/es').then((m) => m.default),
  tr: () => import('./content/tr').then((m) => m.default),
  fr: () => import('./content/fr').then((m) => m.default),
  de: () => import('./content/de').then((m) => m.default),
  deCH: () => import('./content/de').then((m) => toSwiss(m.default)),
  it: () => import('./content/it').then((m) => m.default),
  ru: () => import('./content/ru').then((m) => m.default),
  pl: () => import('./content/pl').then((m) => m.default),
}

const cache = new Map<LanguageCode, Promise<ServicesContent>>()

export function loadServicesContent(code: LanguageCode): Promise<ServicesContent> {
  let entry = cache.get(code)
  if (!entry) {
    entry = LOADERS[code]()
    cache.set(code, entry)
  }
  return entry
}

export type { ServicesContent } from './types'
export { DEPARTMENTS, getDepartment, getService } from './config'
export type { DepartmentDef, SubServiceDef, GroupDef } from './config'

import type { LanguageCode } from '@/lib/i18n'

/**
 * Doctors shown on /team. The founder is rendered from the dictionary (about.founder).
 * To add a doctor: drop the photo in /public/team/ and append an entry below.
 * `name`, `role`, `bio` are per-language; `en` is the fallback. Do NOT add unverified doctors.
 */
export interface Doctor {
  id: string
  photo: string
  name: Partial<Record<LanguageCode, string>> & { en: string }
  role: Partial<Record<LanguageCode, string>> & { en: string }
  bio?: Partial<Record<LanguageCode, string>>
}

export const DOCTORS: Doctor[] = []

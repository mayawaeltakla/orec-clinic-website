import type { LanguageCode } from '@/lib/i18n'

/**
 * Patient experiences shown on /experiences.
 * Add ONLY real reviews with the patient's written consent. Never invent entries.
 */
export interface Review {
  id: string
  name: string // first name or initials only
  country?: string
  service?: string
  text: Partial<Record<LanguageCode, string>> & { ar: string }
  date?: string // YYYY-MM
}

export const REVIEWS: Review[] = []

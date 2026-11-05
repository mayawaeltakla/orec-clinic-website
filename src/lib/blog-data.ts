import type { LanguageCode } from '@/lib/i18n'

/**
 * Blog posts. Add real, medically-reviewed articles only.
 * `title`/`excerpt` per language, `ar` is the fallback.
 */
export interface BlogPost {
  slug: string
  date: string // YYYY-MM-DD
  image?: string
  title: Partial<Record<LanguageCode, string>> & { ar: string }
  excerpt: Partial<Record<LanguageCode, string>> & { ar: string }
}

export const POSTS: BlogPost[] = []

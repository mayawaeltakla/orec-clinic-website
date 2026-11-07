'use client'

import { createContext, useContext, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { DEFAULT_LANGUAGE, getLanguage, localePath, localeSlug, type LanguageMeta, type LanguageCode, type Dictionary } from '@/lib/i18n'

interface LanguageContextValue {
  lang: LanguageMeta
  dict: Dictionary
  dir: 'rtl' | 'ltr'
  /** Switches to the same page in another language (client-side, no full reload) */
  setLang: (code: LanguageCode) => void
  /** Warms the other language's page so the switch is instant */
  prefetchLang: (code: LanguageCode) => void
  /** Locale-aware internal link: lp('/contact') → /en/contact */
  lp: (path?: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * The language is decided by the URL (/ar, /en, /tr …), which is what lets every language
 * be crawled and indexed. `initialLang` comes from the route segment on the server.
 */
export function LanguageProvider({
  initialLang = DEFAULT_LANGUAGE,
  children,
}: {
  initialLang?: LanguageCode
  children: React.ReactNode
}) {
  const lang = getLanguage(initialLang)

  const router = useRouter()
  const pathname = usePathname()

  const targetUrl = useCallback(
    (c: LanguageCode) => {
      const parts = pathname.split('/')
      parts[1] = localeSlug(c)
      return parts.join('/')
    },
    [pathname],
  )

  // Soft navigation: the page content swaps in place, keeping scroll position and theme
  const setLang = useCallback(
    (c: LanguageCode) => {
      const hash = typeof window !== 'undefined' ? window.location.search + window.location.hash : ''
      router.push(targetUrl(c) + hash, { scroll: false })
    },
    [router, targetUrl],
  )

  const prefetchLang = useCallback((c: LanguageCode) => router.prefetch(targetUrl(c)), [router, targetUrl])

  const lp = useCallback((path: string = '/') => localePath(lang.code, path), [lang.code])

  return (
    <LanguageContext.Provider value={{ lang, dict: lang.dict, dir: lang.dir, setLang, prefetchLang, lp }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

/** Font family per language: Tajawal for Arabic, Manrope otherwise */
export function appFontFamily(dir: 'rtl' | 'ltr'): string {
  return dir === 'rtl'
    ? 'var(--font-tajawal), var(--font-manrope), sans-serif'
    : 'var(--font-manrope), var(--font-tajawal), sans-serif'
}

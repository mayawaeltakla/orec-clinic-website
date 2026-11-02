'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { LANGUAGES, DEFAULT_LANGUAGE, getLanguage, type LanguageMeta, type LanguageCode, type Dictionary } from '@/lib/i18n'

interface LanguageContextValue {
  lang: LanguageMeta
  dict: Dictionary
  dir: 'rtl' | 'ltr'
  setLang: (code: LanguageCode) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'orec-lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [code, setCode] = useState<LanguageCode>(DEFAULT_LANGUAGE)

  // Restore saved language after mount (avoids hydration mismatch)
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && LANGUAGES.some((l) => l.code === saved)) {
      const raf = requestAnimationFrame(() => setCode(saved as LanguageCode))
      return () => cancelAnimationFrame(raf)
    }
  }, [])

  const lang = getLanguage(code)

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang.htmlLang
    root.dir = lang.dir
    window.localStorage.setItem(STORAGE_KEY, lang.code)
  }, [lang])

  const setLang = useCallback((c: LanguageCode) => {
    setCode(c)
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, dict: lang.dict, dir: lang.dir, setLang }}>
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

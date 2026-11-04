'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { useLanguage } from './language-context'
import { loadServicesContent } from '@/lib/services-content'
import type { ServicesContent } from '@/lib/services-content/types'

/**
 * Loads the deep services content for the active language (lazy, cached,
 * one language chunk at a time). Returns null until the chunk has arrived —
 * pages render a skeleton in the meantime.
 */
const InjectedContent = createContext<ServicesContent | null>(null)

/** Server routes pass the already-loaded content so the first (server) render has the real text. */
export function ServicesContentProvider({ value, children }: { value: ServicesContent; children: ReactNode }) {
  return <InjectedContent.Provider value={value}>{children}</InjectedContent.Provider>
}

export function useServicesContent(): ServicesContent | null {
  const { lang } = useLanguage()
  const injected = useContext(InjectedContent)
  const [content, setContent] = useState<ServicesContent | null>(null)

  useEffect(() => {
    if (injected) return
    let alive = true
    setContent(null)
    loadServicesContent(lang.code).then((c) => {
      if (alive) setContent(c)
    })
    return () => {
      alive = false
    }
  }, [lang.code, injected])

  return injected ?? content
}

/** The page title is now produced on the server by Next metadata; kept as a no-op for callers. */
export function useDynamicTitle(_title: string | null) {}

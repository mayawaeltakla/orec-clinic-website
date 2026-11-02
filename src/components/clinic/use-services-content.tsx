'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from './language-context'
import { loadServicesContent } from '@/lib/services-content'
import type { ServicesContent } from '@/lib/services-content/types'

/**
 * Loads the deep services content for the active language (lazy, cached,
 * one language chunk at a time). Returns null until the chunk has arrived —
 * pages render a skeleton in the meantime.
 */
export function useServicesContent(): ServicesContent | null {
  const { lang } = useLanguage()
  const [content, setContent] = useState<ServicesContent | null>(null)

  useEffect(() => {
    let alive = true
    setContent(null)
    loadServicesContent(lang.code).then((c) => {
      if (alive) setContent(c)
    })
    return () => {
      alive = false
    }
  }, [lang.code])

  return content
}

/** Keeps the browser tab title in sync once the localized content arrives. */
export function useDynamicTitle(title: string | null) {
  useEffect(() => {
    if (title) document.title = title
  }, [title])
}

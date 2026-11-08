'use client'

import { createContext, useContext, type ReactNode } from 'react'
import type { Dictionary } from '@/lib/i18n/types'

const DictContext = createContext<Dictionary | null>(null)

/** Hands the active language's dictionary (loaded on the server) to the client tree. */
export function DictProvider({ dict, children }: { dict: Dictionary; children: ReactNode }) {
  return <DictContext.Provider value={dict}>{children}</DictContext.Provider>
}

export function useDict(): Dictionary {
  const d = useContext(DictContext)
  if (!d) throw new Error('useDict must be used within DictProvider')
  return d
}

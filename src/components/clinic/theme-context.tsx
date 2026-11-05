'use client'

import { createContext, useCallback, useContext, useSyncExternalStore } from 'react'

export type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

const STORAGE_KEY = 'orec-theme'

/* ------------------------------------------------------------------ *
 * Tiny external store backed by the `light` class on <html>.
 * The pre-paint inline script in layout.tsx applies the saved theme,
 * so the first client snapshot is already correct — no flash, no
 * setState-in-effect, no hydration mismatch (server snapshot = dark).
 * ------------------------------------------------------------------ */
const listeners = new Set<() => void>()
let cached: Theme | null = null

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function getSnapshot(): Theme {
  if (cached === null) {
    cached = document.documentElement.classList.contains('light') ? 'light' : 'dark'
  }
  return cached
}

function getServerSnapshot(): Theme {
  return 'dark'
}

function applyTheme(next: Theme) {
  cached = next
  document.documentElement.classList.toggle('light', next === 'light')
  try {
    window.localStorage.setItem(STORAGE_KEY, next)
  } catch {
    /* private mode — ignore */
  }
  listeners.forEach((notify) => notify())
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggle = useCallback(() => {
    applyTheme(getSnapshot() === 'light' ? 'dark' : 'light')
  }, [])

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

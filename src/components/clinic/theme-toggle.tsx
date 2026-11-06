'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-context'
import { useLanguage } from './language-context'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { dict } = useLanguage()
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dict.nav.themeToggle}
      title={dict.nav.themeToggle}
      aria-pressed={isLight}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-secondary/60 text-gold transition-colors hover:bg-accent hover:text-gold-2"
    >
      {isLight ? (
        <Moon className="h-[18px] w-[18px]" aria-hidden />
      ) : (
        <Sun className="h-[18px] w-[18px]" aria-hidden />
      )}
    </button>
  )
}

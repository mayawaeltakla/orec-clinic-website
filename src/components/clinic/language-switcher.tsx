'use client'

import { LANGUAGES } from '@/lib/i18n'
import { useLanguage } from './language-context'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe, Check, ChevronDown } from 'lucide-react'

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, dir } = useLanguage()

  return (
    /* dir is required so Radix positions the menu correctly in RTL (otherwise it
       aligns as LTR and part of the menu drifts off-screen toward the edge) */
    <DropdownMenu dir={dir}>
      <DropdownMenuTrigger
        aria-label={`${lang.dict.nav.menuOpen} — ${lang.label}`}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-gold/30 bg-secondary/60 px-3 text-sm font-medium text-foreground/90 transition-colors hover:border-gold/60 hover:bg-accent"
      >
        <Globe className="h-4 w-4 text-gold" aria-hidden />
        <span aria-hidden>{lang.flag}</span>
        {!compact && <span className="hidden sm:inline">{lang.label}</span>}
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        collisionPadding={12}
        className="max-h-96 w-56 overflow-y-auto border-gold/25 bg-popover/95 backdrop-blur"
      >
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`flex cursor-pointer items-center gap-3 ${
              l.code === lang.code ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            <span aria-hidden className="text-lg">{l.flag}</span>
            <span className="flex-1">{l.label}</span>
            {l.code === lang.code && <Check className="h-4 w-4 text-gold" aria-hidden />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

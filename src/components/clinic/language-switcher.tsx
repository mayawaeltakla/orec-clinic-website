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

/* Language names shown in the dropdown, written in the CURRENT interface language. */
const LANGUAGE_NAMES: Record<string, Record<string, string>> = {
  ar: { ar: 'العربية', en: 'الإنجليزية', es: 'الإسبانية', tr: 'التركية', fr: 'الفرنسية', de: 'الألمانية', it: 'الإيطالية', ru: 'الروسية', pl: 'البولندية', deCH: 'الألمانية السويسرية' },
  en: { ar: 'Arabic', en: 'English', es: 'Spanish', tr: 'Turkish', fr: 'French', de: 'German', it: 'Italian', ru: 'Russian', pl: 'Polish', deCH: 'Swiss German' },
  es: { ar: 'Árabe', en: 'Inglés', es: 'Español', tr: 'Turco', fr: 'Francés', de: 'Alemán', it: 'Italiano', ru: 'Ruso', pl: 'Polaco', deCH: 'Alemán suizo' },
  tr: { ar: 'Arapça', en: 'İngilizce', es: 'İspanyolca', tr: 'Türkçe', fr: 'Fransızca', de: 'Almanca', it: 'İtalyanca', ru: 'Rusça', pl: 'Lehçe', deCH: 'İsviçre Almancası' },
  fr: { ar: 'Arabe', en: 'Anglais', es: 'Espagnol', tr: 'Turc', fr: 'Français', de: 'Allemand', it: 'Italien', ru: 'Russe', pl: 'Polonais', deCH: 'Suisse allemand' },
  de: { ar: 'Arabisch', en: 'Englisch', es: 'Spanisch', tr: 'Türkisch', fr: 'Französisch', de: 'Deutsch', it: 'Italienisch', ru: 'Russisch', pl: 'Polnisch', deCH: 'Schweizerdeutsch' },
  it: { ar: 'Arabo', en: 'Inglese', es: 'Spagnolo', tr: 'Turco', fr: 'Francese', de: 'Tedesco', it: 'Italiano', ru: 'Russo', pl: 'Polacco', deCH: 'Svizzero tedesco' },
  ru: { ar: 'Арабский', en: 'Английский', es: 'Испанский', tr: 'Турецкий', fr: 'Французский', de: 'Немецкий', it: 'Итальянский', ru: 'Русский', pl: 'Польский', deCH: 'Швейцарский немецкий' },
  pl: { ar: 'Arabski', en: 'Angielski', es: 'Hiszpański', tr: 'Turecki', fr: 'Francuski', de: 'Niemiecki', it: 'Włoski', ru: 'Rosyjski', pl: 'Polski', deCH: 'Szwajcarski niemiecki' },
  deCH: { ar: 'Arabisch', en: 'Änglisch', es: 'Spanisch', tr: 'Türkisch', fr: 'Französisch', de: 'Hochdütsch', it: 'Italiänisch', ru: 'Russisch', pl: 'Polnisch', deCH: 'Schwiizerdütsch' },
}

function nameIn(current: string, target: string, fallback: string) {
  return LANGUAGE_NAMES[current]?.[target] ?? fallback
}

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
        {!compact && <span className="hidden sm:inline">{nameIn(lang.code, lang.code, lang.label)}</span>}
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
            <span className="flex-1">{nameIn(lang.code, l.code, l.label)}</span>
            {l.code === lang.code && <Check className="h-4 w-4 text-gold" aria-hidden />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

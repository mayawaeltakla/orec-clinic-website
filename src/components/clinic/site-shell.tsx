'use client'

import type { ReactNode } from 'react'
import type { LanguageCode } from '@/lib/i18n'
import { LanguageProvider, useLanguage, appFontFamily } from './language-context'
import { ThemeProvider } from './theme-context'
import { Header } from './header'
import { Footer } from './footer'
import { WhatsAppFloat } from './whatsapp-float'

function ShellInner({ children }: { children: ReactNode }) {
  const { dir } = useLanguage()
  return (
    <div
      dir={dir}
      style={{ fontFamily: appFontFamily(dir) }}
      className="flex min-h-screen flex-col"
    >
      <Header />
      {/* Spacer for the fixed header — homepage handles its own padding via Hero */}
      <main className="flex-1">
        <div aria-hidden className="h-16 lg:h-20" />
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

/** Shared site shell for standalone pages — providers + header/footer/WhatsApp float */
export function SiteShell({ lang, children }: { lang: LanguageCode; children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider initialLang={lang}>
        <ShellInner>{children}</ShellInner>
      </LanguageProvider>
    </ThemeProvider>
  )
}

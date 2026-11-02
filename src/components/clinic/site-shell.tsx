'use client'

import type { ReactNode } from 'react'
import { LanguageProvider, useLanguage, appFontFamily } from './language-context'
import { ThemeProvider } from './theme-context'
import { Header } from './header'
import { Footer } from './footer'
import { WhatsAppFloat } from './whatsapp-float'

type Dict = ReturnType<typeof useLanguage>['dict']

function ShellInner({
  title,
  children,
}: {
  title?: (dict: Dict) => string
  children: ReactNode
}) {
  const { dir, dict } = useLanguage()
  return (
    <div
      dir={dir}
      style={{ fontFamily: appFontFamily(dir) }}
      className="flex min-h-screen flex-col"
    >
      {/* Language-aware document head (per page) */}
      <title>{title ? title(dict) : dict.meta.title}</title>
      <meta name="description" content={dict.meta.description} />

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
export function SiteShell({
  title,
  children,
}: {
  title?: (dict: Dict) => string
  children: ReactNode
}) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ShellInner title={title}>{children}</ShellInner>
      </LanguageProvider>
    </ThemeProvider>
  )
}

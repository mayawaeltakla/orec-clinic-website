'use client'

import type { LanguageCode } from '@/lib/i18n'
import { LanguageProvider, useLanguage, appFontFamily } from '@/components/clinic/language-context'
import { ThemeProvider } from '@/components/clinic/theme-context'
import { Header } from '@/components/clinic/header'
import { Hero } from '@/components/clinic/hero'
import { Services } from '@/components/clinic/services'
import { DentalDetails } from '@/components/clinic/dental-details'
import { About } from '@/components/clinic/about'
import { WhyUs } from '@/components/clinic/why-us'
import { Contact } from '@/components/clinic/contact'
import { Footer } from '@/components/clinic/footer'
import { WhatsAppFloat } from '@/components/clinic/whatsapp-float'
import { PAGE_LABELS } from '@/lib/i18n/page-labels'

function ClinicSite() {
  const { dir, lang } = useLanguage()
  return (
    <div
      dir={dir}
      style={{ fontFamily: appFontFamily(dir) }}
      className="flex min-h-screen flex-col"
    >
      <a href="#main" className="skip-link">{PAGE_LABELS[lang.code].skip}</a>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <Services />
        <DentalDetails />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export function ClinicHome({ lang }: { lang: LanguageCode }) {
  return (
    <ThemeProvider>
      <LanguageProvider initialLang={lang}>
        <ClinicSite />
      </LanguageProvider>
    </ThemeProvider>
  )
}

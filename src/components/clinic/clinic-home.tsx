'use client'

import type { LanguageCode } from '@/lib/i18n'
import { LanguageProvider, useLanguage, appFontFamily } from '@/components/clinic/language-context'
import { ThemeProvider } from '@/components/clinic/theme-context'
import { Header } from '@/components/clinic/header'
import { Hero } from '@/components/clinic/hero'
import { Services } from '@/components/clinic/services'
import { About } from '@/components/clinic/about'
import { WhyUs } from '@/components/clinic/why-us'
import { Contact } from '@/components/clinic/contact'
import { Trust } from '@/components/clinic/trust'
import { BlogList } from '@/components/clinic/blog'
import { Offer } from '@/components/clinic/offer'
import { ResultsGallery } from '@/components/clinic/results-gallery'
import { PrizeWheel } from '@/components/clinic/prize-wheel'
import { Footer } from '@/components/clinic/footer'
import { WhatsAppFloat } from '@/components/clinic/whatsapp-float'
import { PAGE_LABELS } from '@/lib/i18n/page-labels'
import type { BlogPost } from '@/lib/blog-db'

function ClinicSite({ posts }: { posts: BlogPost[] }) {
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
        <ResultsGallery />
        <WhyUs />
        <div className="band-sky"><Trust /></div>
        <Offer />
        <div className="band-sky"><About /></div>
        <BlogList posts={posts} teaser />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <PrizeWheel />
    </div>
  )
}

export function ClinicHome({ lang, posts = [] }: { lang: LanguageCode; posts?: BlogPost[] }) {
  return (
    <ThemeProvider>
      <LanguageProvider initialLang={lang}>
        <ClinicSite posts={posts} />
      </LanguageProvider>
    </ThemeProvider>
  )
}

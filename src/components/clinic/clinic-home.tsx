'use client'

import dynamic from 'next/dynamic'
import type { LanguageCode } from '@/lib/i18n'
import { whenNear } from '@/lib/when-near'
import { LanguageProvider, useLanguage, appFontFamily } from '@/components/clinic/language-context'
import { ThemeProvider } from '@/components/clinic/theme-context'
import { Header } from '@/components/clinic/header'
import { Hero } from '@/components/clinic/hero'
import { Footer } from '@/components/clinic/footer'
import { WhatsAppFloat } from '@/components/clinic/whatsapp-float'
import { PAGE_LABELS } from '@/lib/i18n/page-labels'
import type { BlogPost } from '@/lib/blog-db'

/*
 * Below-the-fold sections: still rendered to HTML on the server (content + SEO unchanged),
 * but their JavaScript is only loaded and hydrated when the visitor scrolls near them
 * (or after an idle delay). The hero, header, footer and WhatsApp button hydrate immediately.
 */
const Services = dynamic(() => whenNear('services').then(() => import('@/components/clinic/services').then((m) => m.Services)))
const About = dynamic(() => whenNear('about').then(() => import('@/components/clinic/about').then((m) => m.About)))
const WhyUs = dynamic(() => whenNear('why').then(() => import('@/components/clinic/why-us').then((m) => m.WhyUs)))
const Trust = dynamic(() => whenNear('trust').then(() => import('@/components/clinic/trust').then((m) => m.Trust)))
const BlogList = dynamic(() => whenNear('blog').then(() => import('@/components/clinic/blog').then((m) => m.BlogList)))
const Contact = dynamic(() => whenNear('contact').then(() => import('@/components/clinic/contact').then((m) => m.Contact)))

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
        <div className="band-sky"><About /></div>
        <WhyUs />
        <div className="band-sky"><Trust /></div>
        <BlogList posts={posts} teaser />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
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

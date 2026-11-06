import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Tajawal, Manrope } from 'next/font/google'
import '../globals.css'
import { LANGUAGES, getLanguageBySlug, localeSlug } from '@/lib/i18n'
import { SITE_URL, clinicJsonLd } from '@/lib/seo'

const tajawal = Tajawal({
  variable: '--font-tajawal',
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800'],
})

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Title, description, canonical and hreflang are produced per page (src/lib/seo.ts)
  keywords: [
    'Orec Clinic',
    'عيادة أوريك',
    'زراعة الأسنان',
    'ابتسامة هوليود',
    'جراحات تجميلية',
    'زراعة الشعر',
    'إسطنبول',
    'Dental implants Istanbul',
  ],
  robots: { index: true, follow: true },
}

// Every language has its own URL — pre-rendered at build time
export const dynamicParams = false
export function generateStaticParams() {
  return LANGUAGES.map((l) => ({ lang: localeSlug(l.code) }))
}

// Applies the saved day/night theme before first paint (light is the default; night when saved)
const themeInitScript = `try{if(localStorage.getItem('orec-theme')!=='dark')document.documentElement.classList.add('light')}catch(e){document.documentElement.classList.add('light')}`

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()

  const jsonLd = JSON.stringify(clinicJsonLd(meta.code)).replace(/</g, '\\u003c')

  return (
    <html lang={meta.htmlLang} dir={meta.dir} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${tajawal.variable} ${manrope.variable} antialiased bg-background text-foreground`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </body>
    </html>
  )
}

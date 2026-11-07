import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/clinic/site-shell'
import { FaqSection } from '@/components/clinic/faq'
import { getLanguageBySlug } from '@/lib/i18n'
import { FAQ } from '@/lib/i18n/faq'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) return {}
  const c = FAQ[meta.code]
  return buildMetadata({
    lang: meta.code,
    path: '/faq',
    title: `${c.title} | Orec Clinic`,
    description: c.intro,
  })
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()
  const c = FAQ[meta.code]
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: meta.htmlLang,
    mainEntity: c.items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }).replace(/</g, '\\u003c')
  return (
    <SiteShell lang={meta.code}>
      <FaqSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </SiteShell>
  )
}

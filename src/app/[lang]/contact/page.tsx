import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/clinic/site-shell'
import { Contact } from '@/components/clinic/contact'
import { getLanguageBySlug } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) return {}
  const d = meta.dict
  return buildMetadata({
    lang: meta.code,
    path: '/contact',
    title: `${d.contact.title} | Orec Clinic`,
    description: d.contact.subtitle,
  })
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()
  return (
    <SiteShell lang={meta.code}>
      <Contact />
    </SiteShell>
  )
}

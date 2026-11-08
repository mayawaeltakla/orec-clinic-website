import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/clinic/site-shell'
import { Services } from '@/components/clinic/services'
import { getLanguageBySlug } from '@/lib/i18n'
import { getDict } from '@/lib/i18n/dicts'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) return {}
  const d = getDict(meta.code)
  return buildMetadata({
    lang: meta.code,
    path: '/services',
    title: `${d.services.title} | Orec Clinic`,
    description: d.services.subtitle,
  })
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()
  return (
    <SiteShell lang={meta.code}>
      <Services standalone />
    </SiteShell>
  )
}

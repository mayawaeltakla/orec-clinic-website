import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/clinic/site-shell'
import { WhyUs } from '@/components/clinic/why-us'
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
    path: '/why',
    title: `${d.why.title} | Orec Clinic`,
    description: d.why.intro,
  })
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()
  return (
    <SiteShell lang={meta.code}>
      <WhyUs standalone />
    </SiteShell>
  )
}

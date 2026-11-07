import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/clinic/site-shell'
import { About } from '@/components/clinic/about'
import { getLanguageBySlug } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) return {}
  const d = meta.dict
  return buildMetadata({
    lang: meta.code,
    path: '/about',
    title: `${d.about.title} | Orec Clinic`,
    description: d.about.intro.text,
  })
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()
  return (
    <SiteShell lang={meta.code}>
      <About standalone />
    </SiteShell>
  )
}

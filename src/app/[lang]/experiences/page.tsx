import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/clinic/site-shell'
import { Experiences } from '@/components/clinic/experiences'
import { getLanguageBySlug } from '@/lib/i18n'
import { SECTION_LABELS } from '@/lib/i18n/section-labels'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) return {}
  const L = SECTION_LABELS[meta.code]
  return buildMetadata({ lang: meta.code, path: '/experiences', title: `${L.expTitle} | Orec Clinic`, description: L.expSubtitle })
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()
  return (
    <SiteShell lang={meta.code}>
      <Experiences />
    </SiteShell>
  )
}

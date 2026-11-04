import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/clinic/site-shell'
import { Team } from '@/components/clinic/team'
import { getLanguageBySlug } from '@/lib/i18n'
import { PAGE_LABELS } from '@/lib/i18n/page-labels'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) return {}
  const L = PAGE_LABELS[meta.code]
  return buildMetadata({ lang: meta.code, path: '/team', title: `${L.teamTitle} | Orec Clinic`, description: L.teamSubtitle })
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()
  return (
    <SiteShell lang={meta.code}>
      <Team />
    </SiteShell>
  )
}

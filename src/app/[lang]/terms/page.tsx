import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/clinic/site-shell'
import { LegalPage } from '@/components/clinic/legal-page'
import { getLanguageBySlug } from '@/lib/i18n'
import { PAGE_LABELS } from '@/lib/i18n/page-labels'
import { getLegalDoc } from '@/lib/legal-content'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) return {}
  const L = PAGE_LABELS[meta.code]
  const title = L.terms
  const { doc } = getLegalDoc('terms', meta.code)
  return {
    ...buildMetadata({ lang: meta.code, path: '/terms', title: `${title} | Orec Clinic`, description: doc.sections[0].p[0] }),
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()
  return (
    <SiteShell lang={meta.code}>
      <LegalPage kind="terms" />
    </SiteShell>
  )
}

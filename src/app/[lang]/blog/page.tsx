import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/clinic/site-shell'
import { BlogList } from '@/components/clinic/blog'
import { getLanguageBySlug } from '@/lib/i18n'
import { SECTION_LABELS } from '@/lib/i18n/section-labels'
import { buildMetadata } from '@/lib/seo'
import { listPublished } from '@/lib/blog-db'

export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) return {}
  const L = SECTION_LABELS[meta.code]
  return buildMetadata({ lang: meta.code, path: '/blog', title: `${L.blogTitle} | Orec Clinic`, description: L.blogSubtitle })
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()
  return (
    <SiteShell lang={meta.code}>
      <BlogList posts={await listPublished()} />
    </SiteShell>
  )
}

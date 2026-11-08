import { notFound } from 'next/navigation'
import { ClinicHome } from '@/components/clinic/clinic-home'
import { getLanguageBySlug } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import { getDict } from '@/lib/i18n/dicts'
import { listPublished } from '@/lib/blog-db'

export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) return {}
  return buildMetadata({ lang: meta.code, path: '/', title: getDict(meta.code).meta.title, description: getDict(meta.code).meta.description })
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()
  return <ClinicHome lang={meta.code} posts={await listPublished(3)} />
}

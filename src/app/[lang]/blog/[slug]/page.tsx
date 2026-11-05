import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/clinic/site-shell'
import { BlogArticle } from '@/components/clinic/blog-article'
import { getLanguageBySlug } from '@/lib/i18n'
import { buildMetadata, SITE_URL } from '@/lib/seo'
import { getPublished } from '@/lib/blog-db'

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  return []
}

type Props = { params: Promise<{ lang: string; slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params
  const meta = getLanguageBySlug(lang)
  const post = await getPublished(slug)
  if (!meta || !post) return {}
  return buildMetadata({
    lang: meta.code,
    path: `/blog/${post.slug}`,
    title: `${post.title} | Orec Clinic`,
    description: post.excerpt || post.title,
    image: post.image && post.image.startsWith('http') ? post.image : undefined,
  })
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()
  const post = await getPublished(slug)
  if (!post) notFound()
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    inLanguage: 'ar',
    image: post.image ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`) : undefined,
    publisher: { '@type': 'Organization', name: 'Orec Clinic' },
  }
  return (
    <SiteShell lang={meta.code}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <BlogArticle post={post} />
    </SiteShell>
  )
}

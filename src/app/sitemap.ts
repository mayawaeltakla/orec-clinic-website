import type { MetadataRoute } from 'next'
import { LANGUAGES, localePath } from '@/lib/i18n'
import { DEPARTMENTS } from '@/lib/services-content/config'
import { SITE_URL, languageAlternates } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: { path: string; priority: number }[] = [
    { path: '/', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/about', priority: 0.7 },
    { path: '/why', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
    { path: '/team', priority: 0.6 },
    { path: '/experiences', priority: 0.6 },
    { path: '/blog', priority: 0.6 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
  ]
  for (const d of DEPARTMENTS) {
    paths.push({ path: `/services/${d.slug}`, priority: 0.8 })
    for (const s of d.services) paths.push({ path: `/services/${d.slug}/${s.slug}`, priority: 0.6 })
  }
  const now = new Date()
  const out: MetadataRoute.Sitemap = []
  for (const { path, priority } of paths) {
    for (const l of LANGUAGES) {
      out.push({
        url: `${SITE_URL}${localePath(l.code, path)}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(languageAlternates(path)).map(([k, v]) => [k, `${SITE_URL}${v}`]),
          ),
        },
      })
    }
  }
  return out
}

import { notFound } from 'next/navigation'
import { ServicesShell, SubServicePage } from '@/components/clinic/service-pages'
import { DEPARTMENTS, getService, loadServicesContent } from '@/lib/services-content'
import { LANGUAGES, getLanguageBySlug, localeSlug } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import type { ServicesContent } from '@/lib/services-content/types'

export const dynamicParams = false

export function generateStaticParams() {
  return LANGUAGES.flatMap((l) =>
    DEPARTMENTS.flatMap((d) =>
      d.services.map((s) => ({ lang: localeSlug(l.code), dept: d.slug, service: s.slug })),
    ),
  )
}

type Params = Promise<{ lang: string; dept: string; service: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { lang, dept, service } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta || !getService(dept, service)) return {}
  const sc = (await loadServicesContent(meta.code)).departments[dept]?.services[service]
  if (!sc) return {}
  return buildMetadata({
    lang: meta.code,
    path: `/services/${dept}/${service}`,
    title: `${sc.title} | Orec Clinic`,
    description: sc.tagline,
  })
}

export default async function SubServiceRoute({ params }: { params: Params }) {
  const { lang, dept, service } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta || !getService(dept, service)) notFound()
  const full = await loadServicesContent(meta.code)
  const content: ServicesContent = { ui: full.ui, departments: { [dept]: full.departments[dept] } }
  return (
    <ServicesShell lang={meta.code} content={content}>
      <SubServicePage deptSlug={dept} serviceSlug={service} />
    </ServicesShell>
  )
}

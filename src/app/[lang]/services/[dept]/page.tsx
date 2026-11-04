import { notFound } from 'next/navigation'
import { ServicesShell, DepartmentPage } from '@/components/clinic/service-pages'
import { DEPARTMENTS, getDepartment, loadServicesContent } from '@/lib/services-content'
import { LANGUAGES, getLanguageBySlug, localeSlug } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import type { ServicesContent } from '@/lib/services-content/types'

export const dynamicParams = false

export function generateStaticParams() {
  return LANGUAGES.flatMap((l) => DEPARTMENTS.map((d) => ({ lang: localeSlug(l.code), dept: d.slug })))
}

type Params = Promise<{ lang: string; dept: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { lang, dept } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta || !getDepartment(dept)) return {}
  const dc = (await loadServicesContent(meta.code)).departments[dept]
  return buildMetadata({
    lang: meta.code,
    path: `/services/${dept}`,
    title: `${dc.title} | Orec Clinic`,
    description: dc.tagline,
  })
}

export default async function DepartmentRoute({ params }: { params: Params }) {
  const { lang, dept } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta || !getDepartment(dept)) notFound()
  const full = await loadServicesContent(meta.code)
  const content: ServicesContent = { ui: full.ui, departments: { [dept]: full.departments[dept] } }
  return (
    <ServicesShell lang={meta.code} content={content}>
      <DepartmentPage deptSlug={dept} />
    </ServicesShell>
  )
}

import { ServicesShell } from '@/components/clinic/service-pages'
import { DepartmentPage } from '@/components/clinic/service-pages'
import { DEPARTMENTS } from '@/lib/services-content/config'

export function generateStaticParams() {
  return DEPARTMENTS.map((d) => ({ dept: d.slug }))
}

export default async function DepartmentRoute({
  params,
}: {
  params: Promise<{ dept: string }>
}) {
  const { dept } = await params
  return (
    <ServicesShell>
      <DepartmentPage deptSlug={dept} />
    </ServicesShell>
  )
}

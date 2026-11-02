import { ServicesShell } from '@/components/clinic/service-pages'
import { SubServicePage } from '@/components/clinic/service-pages'
import { DEPARTMENTS } from '@/lib/services-content/config'

export function generateStaticParams() {
  return DEPARTMENTS.flatMap((d) =>
    d.services.map((s) => ({ dept: d.slug, service: s.slug })),
  )
}

export default async function SubServiceRoute({
  params,
}: {
  params: Promise<{ dept: string; service: string }>
}) {
  const { dept, service } = await params
  return (
    <ServicesShell>
      <SubServicePage deptSlug={dept} serviceSlug={service} />
    </ServicesShell>
  )
}

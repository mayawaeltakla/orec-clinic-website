'use client'

import { useLanguage } from '@/components/clinic/language-context'
import { SiteShell } from '@/components/clinic/site-shell'
import { Services } from '@/components/clinic/services'
import { DentalDetails } from '@/components/clinic/dental-details'

function ServicesPage() {
  return (
    <SiteShell title={(d) => `${d.services.title} | Orec Clinic`}>
      <Services />
      <DentalDetails />
    </SiteShell>
  )
}

export default function Page() {
  return <ServicesPage />
}

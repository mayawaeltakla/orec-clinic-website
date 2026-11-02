'use client'

import { SiteShell } from '@/components/clinic/site-shell'
import { Services } from '@/components/clinic/services'

function ServicesPage() {
  return (
    <SiteShell title={(d) => `${d.services.title} | Orec Clinic`}>
      <Services />
      {/* Deep content lives in the per-department pages: /services/dental, /services/cosmetic,
          /services/hair and /services/bariatric — each card above links to its department. */}
    </SiteShell>
  )
}

export default function Page() {
  return <ServicesPage />
}

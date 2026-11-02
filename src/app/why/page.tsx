'use client'

import { useLanguage } from '@/components/clinic/language-context'
import { SiteShell } from '@/components/clinic/site-shell'
import { WhyUs } from '@/components/clinic/why-us'

function WhyPage() {
  return (
    <SiteShell title={(d) => `${d.why.title} | Orec Clinic`}>
      <WhyUs />
    </SiteShell>
  )
}

export default function Page() {
  return <WhyPage />
}

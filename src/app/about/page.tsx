'use client'

import { useLanguage } from '@/components/clinic/language-context'
import { SiteShell } from '@/components/clinic/site-shell'
import { About } from '@/components/clinic/about'

function AboutPage() {
  return (
    <SiteShell title={(d) => d.about.title}>
      <About />
    </SiteShell>
  )
}

export default function Page() {
  return <AboutPage />
}

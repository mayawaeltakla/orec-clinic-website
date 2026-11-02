'use client'

import { useLanguage } from '@/components/clinic/language-context'
import { SiteShell } from '@/components/clinic/site-shell'
import { Contact } from '@/components/clinic/contact'

function ContactPage() {
  return (
    <SiteShell title={(d) => `${d.contact.title} | Orec Clinic`}>
      <Contact />
    </SiteShell>
  )
}

export default function Page() {
  return <ContactPage />
}

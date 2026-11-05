import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/clinic/site-shell'
import { AdminPanel } from '@/components/clinic/admin-panel'
import { getLanguageBySlug } from '@/lib/i18n'
import { adminEnabled, isAdmin } from '@/lib/admin-auth'
import { dbConfigured } from '@/lib/blog-db'
import { translationConfigured } from '@/lib/translate'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'لوحة التحكم | Orec Clinic', robots: { index: false, follow: false } }

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const meta = getLanguageBySlug(lang)
  if (!meta) notFound()
  return (
    <SiteShell lang={meta.code}>
      <AdminPanel enabled={adminEnabled()} dbOk={dbConfigured()} translateOk={translationConfigured()} authed={await isAdmin()} />
    </SiteShell>
  )
}

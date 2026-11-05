'use client'

import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import { useLanguage } from './language-context'

/** Shown only to a logged-in admin: quick shortcut to the article editor. */
export function AdminAddButton() {
  const { lp } = useLanguage()
  const [ok, setOk] = useState(false)
  useEffect(() => {
    fetch('/api/admin/me', { cache: 'no-store' })
      .then((r) => r.json())
      .then((j) => setOk(Boolean(j?.ok)))
      .catch(() => {})
  }, [])
  if (!ok) return null
  return (
    <a href={lp('/admin?new=1')} className="btn-gold inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-bold">
      <Plus className="h-4 w-4" aria-hidden />
      <span dir="rtl" lang="ar">إضافة مقال</span>
    </a>
  )
}

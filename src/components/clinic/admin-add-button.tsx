'use client'

import { Plus } from 'lucide-react'
import { useLanguage } from './language-context'
import { SECTION_LABELS } from '@/lib/i18n/section-labels'

/** Visible to everyone; the editor behind it is protected by the admin password. */
export function AdminAddButton() {
  const { lp, lang } = useLanguage()
  return (
    <a
      href={lp('/admin?new=1')}
      rel="nofollow"
      className="btn-gold inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-bold"
    >
      <Plus className="h-4 w-4" aria-hidden />
      {SECTION_LABELS[lang.code].addPost}
    </a>
  )
}

'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { BlogPost } from '@/lib/blog-db'

type Draft = { id?: number; title: string; excerpt: string; body: string; image: string; slug: string; published: boolean }
const EMPTY: Draft = { title: '', excerpt: '', body: '', image: '', slug: '', published: true }

const ERRORS: Record<string, string> = {
  unauthorized: 'انتهت الجلسة، سجّل الدخول من جديد.',
  validation: 'تحقق من الحقول: العنوان مطلوب (3 أحرف على الأقل).',
  image: 'رابط الصورة يجب أن يبدأ بـ https://',
  slug_taken: 'هذا الرابط مستخدم لمقال آخر، غيّره.',
  db: 'تعذّر الاتصال بقاعدة البيانات.',
  too_large: 'الصورة كبيرة جداً.',
  bad_type: 'نوع الصورة غير مدعوم (JPG أو PNG أو WebP).',
}

/** Resize in the browser (max 1600px, JPEG) so uploads stay small and fast. */
async function prepareImage(file: File): Promise<{ mime: string; data: string }> {
  const bmp = await createImageBitmap(file)
  const scale = Math.min(1, 1600 / Math.max(bmp.width, bmp.height))
  const w = Math.round(bmp.width * scale)
  const h = Math.round(bmp.height * scale)
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, w, h)
  ctx.drawImage(bmp, 0, 0, w, h)
  const url = canvas.toDataURL('image/jpeg', 0.82)
  return { mime: 'image/jpeg', data: url.split(',')[1] }
}

const input =
  'w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'

export function AdminPanel({ enabled, dbOk, translateOk, authed: initialAuthed }: { enabled: boolean; dbOk: boolean; translateOk: boolean; authed: boolean }) {
  const [authed, setAuthed] = useState(initialAuthed)
  const [password, setPassword] = useState('')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [draft, setDraft] = useState<Draft | null>(null)
  const [msg, setMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)
  const [busy, setBusy] = useState(false)
  const bodyRef = useRef<HTMLTextAreaElement>(null)

  const fail = (j: { error?: string; detail?: string }) =>
    setMsg({ kind: 'err', text: (ERRORS[j.error ?? ''] ?? 'حدث خطأ.') + (j.detail ? ` (${j.detail})` : '') })

  const load = useCallback(async () => {
    const res = await fetch('/api/admin/posts', { cache: 'no-store' })
    const j = await res.json().catch(() => ({}))
    if (res.ok) setPosts(j.posts)
    else {
      if (res.status === 401) setAuthed(false)
      fail(j)
    }
  }, [])

  useEffect(() => {
    if (authed && dbOk) load()
  }, [authed, dbOk, load])

  // /admin?new=1 opens the editor straight away (the "إضافة مقال" shortcut)
  useEffect(() => {
    if (authed && dbOk && new URLSearchParams(window.location.search).get('new') === '1') setDraft({ ...EMPTY })
  }, [authed, dbOk])

  async function upload(file: File): Promise<string | null> {
    setBusy(true)
    setMsg(null)
    try {
      const img = await prepareImage(file)
      const res = await fetch('/api/admin/upload', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(img) })
      const j = await res.json().catch(() => ({}))
      if (res.ok) return j.url as string
      fail(j)
    } catch {
      setMsg({ kind: 'err', text: 'تعذّر قراءة الصورة. جرّب صورة أخرى.' })
    } finally {
      setBusy(false)
    }
    return null
  }

  async function pickCover(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    e.target.value = ''
    if (!f || !draft) return
    const url = await upload(f)
    if (url) setDraft({ ...draft, image: url })
  }

  async function pickInline(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    e.target.value = ''
    if (!f || !draft) return
    const url = await upload(f)
    if (!url) return
    const ta = bodyRef.current
    const pos = ta ? ta.selectionStart : draft.body.length
    const insert = `\n\n![](${url})\n\n`
    setDraft({ ...draft, body: draft.body.slice(0, pos) + insert + draft.body.slice(pos) })
  }

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setMsg(null)
    const res = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) })
    setBusy(false)
    if (res.ok) {
      setPassword('')
      setAuthed(true)
    } else setMsg({ kind: 'err', text: 'كلمة المرور غير صحيحة.' })
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    setAuthed(false)
    setPosts([])
    setDraft(null)
  }

  async function save(e: React.FormEvent) {
    e.preventDefault()
    if (!draft) return
    setBusy(true)
    setMsg(null)
    const res = await fetch('/api/admin/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...draft, image: draft.image || null }),
    })
    const j = await res.json().catch(() => ({}))
    setBusy(false)
    if (res.ok) {
      const base = draft.published ? 'تم الحفظ والنشر.' : 'تم الحفظ كمسودة.'
      let tr = ''
      if (!j.translateConfigured) tr = ' (لم تُفعَّل الترجمة التلقائية بعد.)'
      else if (j.translated >= 8) tr = ' وتُرجم المقال تلقائياً إلى 9 لغات.'
      else if (j.translated === 0) tr = ' لكن تعذّرت الترجمة الآن، فحُفظ المقال بالعربية ولم يضع منه شيء. أعد الحفظ لاحقاً لمحاولة الترجمة.'
      else tr = ` تُرجم إلى ${j.translated} من 9 لغات فقط${j.translateErrors?.length ? ` (${j.translateErrors[0]})` : ''}.`
      setMsg({ kind: j.translateConfigured && j.translated < 8 ? 'err' : 'ok', text: base + tr })
      setDraft(null)
      load()
    } else fail(j)
  }

  async function remove(p: BlogPost) {
    if (!confirm(`حذف المقال «${p.title}» نهائياً؟`)) return
    const res = await fetch(`/api/admin/posts?id=${p.id}`, { method: 'DELETE' })
    if (res.ok) {
      setMsg({ kind: 'ok', text: 'تم الحذف.' })
      load()
    } else fail(await res.json().catch(() => ({})))
  }

  const wrap = 'mx-auto max-w-3xl px-4 py-16 sm:px-6'

  if (!enabled)
    return (
      <div className={wrap} dir="rtl" lang="ar">
        <h1 className="text-2xl font-extrabold text-gold-2">لوحة التحكم غير مفعّلة</h1>
        <p className="mt-3 text-sm leading-loose text-foreground/85">
          أضف المتغيّرين <code dir="ltr">ADMIN_PASSWORD</code> و<code dir="ltr">ADMIN_SECRET</code> في إعدادات Vercel ثم أعد النشر.
        </p>
      </div>
    )

  if (!authed)
    return (
      <div className={wrap} dir="rtl" lang="ar">
        <form onSubmit={login} className="mx-auto max-w-sm rounded-2xl border border-border bg-card p-8">
          <h1 className="text-xl font-extrabold text-gold-2">لوحة التحكم</h1>
          <label htmlFor="ad-pw" className="mt-5 block text-sm font-semibold">كلمة المرور</label>
          <input id="ad-pw" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`${input} mt-1.5`} autoComplete="current-password" required />
          <button disabled={busy} className="btn-gold mt-5 h-11 w-full rounded-full text-sm font-bold disabled:opacity-60">دخول</button>
          {msg && <p role="alert" className="mt-3 text-sm font-semibold text-destructive">{msg.text}</p>}
        </form>
      </div>
    )

  return (
    <div className={wrap} dir="rtl" lang="ar">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-extrabold text-gold-2">إدارة المدونة</h1>
        <button onClick={logout} className="text-sm font-bold text-foreground/70 underline underline-offset-4">خروج</button>
      </div>

      {dbOk && !translateOk && (
        <p className="mt-4 rounded-xl border border-gold/40 bg-card px-4 py-3 text-sm">
          الترجمة التلقائية غير مفعّلة: أضف <code dir="ltr">LIBRETRANSLATE_URL</code> في Vercel وأعد النشر، فتُترجم المقالات إلى 9 لغات عند كل حفظ.
        </p>
      )}
      {!dbOk && (
        <p className="mt-4 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm">
          قاعدة البيانات غير مربوطة بعد: من Vercel افتح Storage ثم أنشئ قاعدة Neon (Postgres) واربطها بالمشروع، ثم أعد النشر.
        </p>
      )}
      {msg && (
        <p role="status" className={`mt-4 rounded-xl border px-4 py-3 text-sm font-semibold ${msg.kind === 'ok' ? 'border-wa/40 bg-wa/10 text-wa' : 'border-destructive/40 bg-destructive/10 text-destructive'}`}>
          {msg.text}
        </p>
      )}

      {draft ? (
        <form onSubmit={save} className="mt-6 space-y-4 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-extrabold text-gold-2">{draft.id ? 'تعديل مقال' : 'مقال جديد'}</h2>
          <div>
            <label className="mb-1 block text-sm font-semibold" htmlFor="f-title">العنوان *</label>
            <input id="f-title" className={input} value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold" htmlFor="f-ex">مقتطف قصير (يظهر في القائمة)</label>
            <textarea id="f-ex" rows={2} className={input} value={draft.excerpt} onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold" htmlFor="f-body">نص المقال</label>
            <textarea id="f-body" ref={bodyRef} rows={14} className={input} value={draft.body} onChange={(e) => setDraft({ ...draft, body: e.target.value })} />
            <label className="mt-2 inline-flex cursor-pointer items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs font-bold text-gold-2 hover:bg-accent">
              + إدراج صورة داخل النص
              <input type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={pickInline} />
            </label>
            <p className="mt-1 text-xs text-muted-foreground">
              فقرة جديدة: اترك سطراً فارغاً. عنوان فرعي: ابدأ السطر بـ <code dir="ltr">## </code>. قائمة: ابدأ كل سطر بـ <code dir="ltr">- </code>. نص عريض: <code dir="ltr">**نص**</code>.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <span className="mb-1 block text-sm font-semibold">صورة الغلاف (اختياري)</span>
              {draft.image && <img src={draft.image} alt="" className="mb-2 aspect-video w-full rounded-xl object-cover" />}
              <div className="flex flex-wrap gap-2">
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs font-bold text-gold-2 hover:bg-accent">
                  {draft.image ? 'تغيير الصورة' : 'رفع صورة من الجهاز'}
                  <input type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={pickCover} />
                </label>
                {draft.image && (
                  <button type="button" onClick={() => setDraft({ ...draft, image: '' })} className="rounded-full px-3 py-2 text-xs font-bold text-destructive">
                    إزالة
                  </button>
                )}
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold" htmlFor="f-slug">رابط المقال بالإنكليزية (اختياري)</label>
              <input id="f-slug" dir="ltr" placeholder="dental-implants-guide" className={input} value={draft.slug} onChange={(e) => setDraft({ ...draft, slug: e.target.value })} />
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm font-semibold">
            <input type="checkbox" checked={draft.published} onChange={(e) => setDraft({ ...draft, published: e.target.checked })} className="h-4 w-4 accent-[var(--gold)]" />
            منشور (أزل العلامة لحفظه كمسودة)
          </label>
          <div className="flex gap-3">
            <button disabled={busy} className="btn-gold h-11 rounded-full px-7 text-sm font-bold disabled:opacity-60">حفظ</button>
            <button type="button" onClick={() => setDraft(null)} className="h-11 rounded-full border border-border px-6 text-sm font-bold">إلغاء</button>
          </div>
        </form>
      ) : (
        <>
          <button onClick={() => { setMsg(null); setDraft({ ...EMPTY }) }} disabled={!dbOk} className="btn-gold mt-6 h-11 rounded-full px-7 text-sm font-bold disabled:opacity-60">
            + مقال جديد
          </button>
          <ul className="mt-6 space-y-3">
            {posts.map((p) => (
              <li key={p.id} className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4">
                <div className="min-w-0">
                  <p className="truncate font-bold text-foreground">{p.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {p.date} · {p.published ? 'منشور' : 'مسودة'}
                  </p>
                </div>
                <div className="flex shrink-0 gap-3 text-sm font-bold">
                  <button onClick={() => { setMsg(null); setDraft({ id: p.id, title: p.title, excerpt: p.excerpt, body: p.body, image: p.image ?? '', slug: p.slug, published: p.published }) }} className="text-gold-2 underline underline-offset-4">تعديل</button>
                  <button onClick={() => remove(p)} className="text-destructive underline underline-offset-4">حذف</button>
                </div>
              </li>
            ))}
            {dbOk && posts.length === 0 && <li className="text-sm text-muted-foreground">لا توجد مقالات بعد.</li>}
          </ul>
        </>
      )}
    </div>
  )
}

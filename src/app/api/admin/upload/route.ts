import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin-auth'
import { saveImage } from '@/lib/blog-db'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
  const b = (await req.json().catch(() => null)) as { mime?: string; data?: string } | null
  if (!b?.mime || !b.data) return NextResponse.json({ ok: false, error: 'validation' }, { status: 400 })
  try {
    const id = await saveImage(b.mime, b.data)
    return NextResponse.json({ ok: true, url: `/api/blog-image/${id}` })
  } catch (e) {
    const m = (e as Error).message
    return NextResponse.json({ ok: false, error: m === 'TOO_LARGE' ? 'too_large' : m === 'BAD_MIME' ? 'bad_type' : 'db', detail: m }, { status: m === 'TOO_LARGE' || m === 'BAD_MIME' ? 400 : 500 })
  }
}

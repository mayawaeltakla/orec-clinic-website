import { NextResponse } from 'next/server'
import { ADMIN_COOKIE, adminEnabled, checkPassword, cookieOptions, makeToken } from '@/lib/admin-auth'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  if (!adminEnabled()) return NextResponse.json({ ok: false, error: 'disabled' }, { status: 503 })
  let password = ''
  try {
    password = String((await req.json()).password ?? '')
  } catch {}
  if (!checkPassword(password)) {
    await new Promise((r) => setTimeout(r, 800)) // slow down guessing
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE, makeToken(), cookieOptions)
  return res
}

import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

export const ADMIN_COOKIE = 'orec_admin'
const MAX_AGE = 60 * 60 * 12 // 12 hours

export function adminEnabled(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD)
}

function secret(): string {
  return process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || ''
}

function sign(payload: string): string {
  return createHmac('sha256', secret()).update(payload).digest('hex')
}

export function checkPassword(input: string): boolean {
  const pw = process.env.ADMIN_PASSWORD
  if (!pw) return false
  const a = Buffer.from(input)
  const b = Buffer.from(pw)
  return a.length === b.length && timingSafeEqual(a, b)
}

export function makeToken(): string {
  const exp = String(Date.now() + MAX_AGE * 1000)
  return `${exp}.${sign(exp)}`
}

export function verifyToken(token: string | undefined): boolean {
  if (!token || !adminEnabled()) return false
  const [exp, sig] = token.split('.')
  if (!exp || !sig || Number(exp) < Date.now()) return false
  const good = sign(exp)
  const a = Buffer.from(sig)
  const b = Buffer.from(good)
  return a.length === b.length && timingSafeEqual(a, b)
}

export async function isAdmin(): Promise<boolean> {
  const jar = await cookies()
  return verifyToken(jar.get(ADMIN_COOKIE)?.value)
}

export const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'strict' as const,
  path: '/',
  maxAge: MAX_AGE,
}

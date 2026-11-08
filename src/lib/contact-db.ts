/**
 * Contact-form storage on the same Neon Postgres database as the blog (plain fetch over HTTP).
 * The old Prisma/SQLite path cannot work on Vercel (read-only file system), so production
 * saves go here. Falls back to "not configured" without breaking the form.
 */
import { neonQuery, dbConfigured } from './blog-db'

export interface ContactRecord {
  name: string
  phone: string
  service?: string | null
  message?: string | null
  lang: string
}

let ready: Promise<void> | null = null
function ensureTable(): Promise<void> {
  if (!ready) {
    ready = neonQuery(
      `CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        service TEXT,
        message TEXT,
        lang TEXT NOT NULL DEFAULT 'ar',
        emailed BOOLEAN NOT NULL DEFAULT false,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )`,
    ).then(() => undefined)
    ready.catch(() => {
      ready = null
    })
  }
  return ready
}

export function contactDbConfigured(): boolean {
  return dbConfigured()
}

export async function saveContactMessage(d: ContactRecord, emailed: boolean): Promise<string> {
  await ensureTable()
  const rows = await neonQuery(
    'INSERT INTO contact_messages (name, phone, service, message, lang, emailed) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id',
    [d.name, d.phone, d.service ?? null, d.message ?? null, d.lang, emailed],
  )
  return String(rows[0]?.id ?? '')
}

export async function getContactMessage(id: string): Promise<Record<string, string | null> | null> {
  const rows = await neonQuery('SELECT id, name, phone, service, message, lang FROM contact_messages WHERE id = $1', [id])
  return rows[0] ?? null
}

export async function deleteContactMessage(id: string): Promise<void> {
  await neonQuery('DELETE FROM contact_messages WHERE id = $1', [id])
}

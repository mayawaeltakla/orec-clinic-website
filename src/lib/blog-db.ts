/**
 * Blog storage on Neon Postgres (Vercel Storage), via Neon's SQL-over-HTTP endpoint —
 * plain fetch, no extra dependency. If no database is configured every read returns
 * an empty list so the site keeps working.
 *
 * Env (set automatically by the Vercel ↔ Neon integration): POSTGRES_URL or DATABASE_URL.
 */

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  body: string
  image: string | null
  published: boolean
  date: string // YYYY-MM-DD
}

function connectionString(): string | null {
  for (const v of [process.env.POSTGRES_URL, process.env.DATABASE_URL, process.env.POSTGRES_PRISMA_URL]) {
    if (v && /^postgres(ql)?:\/\//.test(v)) return v
  }
  return null
}

export function dbConfigured(): boolean {
  return connectionString() !== null
}

async function run(query: string, params: unknown[] = []): Promise<Record<string, string | null>[]> {
  const cs = connectionString()
  if (!cs) throw new Error('DB_NOT_CONFIGURED')
  const host = new URL(cs.replace(/^postgres(ql)?:/, 'http:')).host
  const res = await fetch(`https://${host}/sql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Neon-Connection-String': cs,
      'Neon-Raw-Text-Output': 'true',
      'Neon-Array-Mode': 'false',
    },
    body: JSON.stringify({ query, params }),
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`DB ${res.status}: ${(await res.text()).slice(0, 300)}`)
  const json = (await res.json()) as { rows?: Record<string, string | null>[] }
  return json.rows ?? []
}

let ready: Promise<void> | null = null
function ensureTable(): Promise<void> {
  if (!ready) {
    ready = run(
      `CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        excerpt TEXT NOT NULL DEFAULT '',
        body TEXT NOT NULL DEFAULT '',
        image TEXT,
        published BOOLEAN NOT NULL DEFAULT false,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )`,
    ).then(() => undefined)
    ready.catch(() => {
      ready = null
    })
  }
  return ready
}

const COLS = `id::text AS id, slug, title, excerpt, body, image, published::text AS published, to_char(created_at, 'YYYY-MM-DD') AS date`

function map(r: Record<string, string | null>): BlogPost {
  return {
    id: Number(r.id),
    slug: String(r.slug),
    title: String(r.title),
    excerpt: String(r.excerpt ?? ''),
    body: String(r.body ?? ''),
    image: r.image || null,
    published: r.published === 'true' || r.published === 't',
    date: String(r.date ?? ''),
  }
}

/** Public reads never throw: on any problem they return an empty result. */
export async function listPublished(limit = 100): Promise<BlogPost[]> {
  if (!dbConfigured()) return []
  try {
    await ensureTable()
    const rows = await run(`SELECT ${COLS} FROM blog_posts WHERE published = true ORDER BY created_at DESC LIMIT $1`, [limit])
    return rows.map(map)
  } catch (e) {
    console.warn('[blog] listPublished failed:', (e as Error).message)
    return []
  }
}

export async function getPublished(slug: string): Promise<BlogPost | null> {
  if (!dbConfigured()) return null
  try {
    await ensureTable()
    const rows = await run(`SELECT ${COLS} FROM blog_posts WHERE slug = $1 AND published = true LIMIT 1`, [slug])
    return rows[0] ? map(rows[0]) : null
  } catch (e) {
    console.warn('[blog] getPublished failed:', (e as Error).message)
    return null
  }
}

/** Admin operations — these throw so the panel can show the real error. */
export async function listAll(): Promise<BlogPost[]> {
  await ensureTable()
  return (await run(`SELECT ${COLS} FROM blog_posts ORDER BY created_at DESC`)).map(map)
}

export async function savePost(p: {
  id?: number
  slug: string
  title: string
  excerpt: string
  body: string
  image: string | null
  published: boolean
}): Promise<BlogPost> {
  await ensureTable()
  if (p.id) {
    const rows = await run(
      `UPDATE blog_posts SET slug=$1, title=$2, excerpt=$3, body=$4, image=$5, published=$6, updated_at=now() WHERE id=$7 RETURNING ${COLS}`,
      [p.slug, p.title, p.excerpt, p.body, p.image, p.published, p.id],
    )
    if (!rows[0]) throw new Error('NOT_FOUND')
    return map(rows[0])
  }
  const rows = await run(
    `INSERT INTO blog_posts (slug, title, excerpt, body, image, published) VALUES ($1,$2,$3,$4,$5,$6) RETURNING ${COLS}`,
    [p.slug, p.title, p.excerpt, p.body, p.image, p.published],
  )
  return map(rows[0])
}

export async function deletePost(id: number): Promise<void> {
  await ensureTable()
  await run(`DELETE FROM blog_posts WHERE id = $1`, [id])
}

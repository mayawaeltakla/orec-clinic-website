import { randomInt } from 'node:crypto'
import { neonQuery, dbConfigured } from './blog-db'

/** Prize weights — equal by default. The clinic can lower the weight of the expensive prizes here. */
export const PRIZE_WEIGHTS = [1, 1, 1, 1, 1, 1, 1, 1]

export function drawPrize(): number {
  const total = PRIZE_WEIGHTS.reduce((a, b) => a + b, 0)
  let r = randomInt(0, total)
  for (let i = 0; i < PRIZE_WEIGHTS.length; i++) {
    if (r < PRIZE_WEIGHTS[i]) return i
    r -= PRIZE_WEIGHTS[i]
  }
  return 0
}

let ready: Promise<void> | null = null
function ensureTable(): Promise<void> {
  if (!ready) {
    ready = neonQuery(
      `CREATE TABLE IF NOT EXISTS wheel_spins (
        id SERIAL PRIMARY KEY,
        phone TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        prize_index INT NOT NULL,
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

export const wheelDbConfigured = dbConfigured

export async function findSpin(phone: string): Promise<number | null> {
  await ensureTable()
  const rows = await neonQuery('SELECT prize_index FROM wheel_spins WHERE phone = $1', [phone])
  return rows[0] ? Number(rows[0].prize_index) : null
}

/** Inserts the spin; if the phone raced in meanwhile, returns the stored prize instead (one prize per number). */
export async function saveSpin(phone: string, name: string, prize: number, lang: string): Promise<number> {
  await ensureTable()
  const rows = await neonQuery(
    `INSERT INTO wheel_spins (phone, name, prize_index, lang, emailed) VALUES ($1,$2,$3,$4,false)
     ON CONFLICT (phone) DO UPDATE SET phone = EXCLUDED.phone RETURNING prize_index`,
    [phone, name, prize, lang],
  )
  return Number(rows[0]?.prize_index ?? prize)
}

export async function markEmailed(phone: string): Promise<void> {
  await neonQuery('UPDATE wheel_spins SET emailed = true WHERE phone = $1', [phone])
}

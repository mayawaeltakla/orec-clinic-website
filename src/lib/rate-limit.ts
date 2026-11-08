/**
 * Tiny in-memory sliding-window limiter. On serverless each instance keeps its own counters,
 * so this is a first line of defence (bots hammering one instance, double clicks, scripts);
 * it never blocks a normal visitor.
 */
const hits = new Map<string, number[]>()
let lastSweep = 0

export function rateLimit(key: string, max: number, windowMs: number): { ok: boolean; retryAfter: number } {
  const now = Date.now()
  if (now - lastSweep > 60_000) {
    lastSweep = now
    for (const [k, v] of hits) {
      const fresh = v.filter((t) => now - t < 3_600_000)
      if (fresh.length) hits.set(k, fresh)
      else hits.delete(k)
    }
  }
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs)
  if (recent.length >= max) {
    hits.set(key, recent)
    return { ok: false, retryAfter: Math.max(1, Math.ceil((windowMs - (now - recent[0])) / 1000)) }
  }
  recent.push(now)
  hits.set(key, recent)
  return { ok: true, retryAfter: 0 }
}

export function clientIp(req: Request): string {
  const xf = req.headers.get('x-forwarded-for')
  return (xf?.split(',')[0] || req.headers.get('x-real-ip') || 'unknown').trim()
}

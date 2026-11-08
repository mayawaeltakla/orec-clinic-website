// Load test against a locally running production build (node tools/loadtest.mjs http://localhost:3000)
import autocannon from 'autocannon'

const base = process.argv[2] || 'http://localhost:3000'
const targets = [
  { name: 'home /ar', path: '/ar', method: 'GET' },
  { name: 'services /ar/services', path: '/ar/services', method: 'GET' },
  { name: 'sub-service page', path: '/ar/services/dental/hollywood-smile', method: 'GET' },
  { name: 'blog /ar/blog', path: '/ar/blog', method: 'GET' },
  { name: 'static image', path: '/orec-lobby.jpg', method: 'GET' },
  {
    name: 'POST /api/contact (valid body)',
    path: '/api/contact',
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: 'Load Test', phone: '+905550000000', service: 'x', message: 'load', lang: 'ar', consent: true }),
  },
  {
    name: 'POST /api/contact (invalid body)',
    path: '/api/contact',
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: '' }),
  },
]

const run = (opts) => new Promise((res, rej) => autocannon(opts, (e, r) => (e ? rej(e) : res(r))))

for (const connections of [100, 1000]) {
  console.log(`\n===== ${connections} concurrent connections, 15s each =====`)
  for (const t of targets) {
    const r = await run({ url: base + t.path, connections, duration: 15, timeout: 20, method: t.method, headers: t.headers, body: t.body })
    const ok = r['2xx']
    const non = r.non2xx
    console.log(
      `${t.name.padEnd(34)} req/s ${String(Math.round(r.requests.average)).padStart(6)} | p50 ${String(r.latency.p50).padStart(5)}ms p97.5 ${String(r.latency.p97_5).padStart(6)}ms p99 ${String(r.latency.p99).padStart(6)}ms max ${String(r.latency.max).padStart(6)}ms | 2xx ${ok} non2xx ${non} errors ${r.errors} timeouts ${r.timeouts}`,
    )
  }
}

// End-to-end check of /api/contact against a local server and a mock Resend API.
// Usage: node tools/contact-e2e.mjs <baseUrl> <mockPort>
import http from 'node:http'

const base = process.argv[2] || 'http://localhost:3000'
const port = Number(process.argv[3] || 4010)
const received = []
http
  .createServer((req, res) => {
    let b = ''
    req.on('data', (c) => (b += c))
    req.on('end', () => {
      received.push({ url: req.url, auth: req.headers.authorization, body: JSON.parse(b || '{}') })
      res.setHeader('content-type', 'application/json')
      res.end(JSON.stringify({ id: 'mock_' + received.length }))
    })
  })
  .listen(port)

const post = (body, ip) =>
  fetch(base + '/api/contact', { method: 'POST', headers: { 'content-type': 'application/json', 'x-forwarded-for': ip }, body: JSON.stringify(body) }).then(async (r) => ({ status: r.status, json: await r.json().catch(() => ({})) }))
const valid = { name: 'Test User', phone: '+905550001122', service: 'Dental Implants', message: 'e2e message', lang: 'en', consent: true }
let fail = 0
const check = (name, ok, extra = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name} ${extra}`)
  if (!ok) fail++
}

let r = await post(valid, '10.0.0.1')
check('valid submission → 200 ok', r.status === 200 && r.json.ok === true, JSON.stringify(r))
await new Promise((x) => setTimeout(x, 300))
check('exactly one e-mail sent to Resend', received.length === 1, `(received ${received.length})`)
const m = received[0]?.body
check('mail has recipient, sender, subject, content', Boolean(m?.to?.[0] && m?.from && m?.subject?.includes('Test User') && m?.html?.includes('e2e message') && m?.html?.includes('+905550001122')), JSON.stringify({ to: m?.to, from: m?.from }))
check('Authorization header carries the key (not logged here)', received[0]?.auth === 'Bearer test_key')
r = await post(valid, '10.0.0.1')
check('duplicate within 10 min → ok but no second e-mail', r.status === 200 && received.length === 1, `(received ${received.length})`)
r = await post({ ...valid, website: 'http://spam', phone: '+905550009999' }, '10.0.0.2')
check('honeypot filled → silent ok, no e-mail', r.status === 200 && received.length === 1)
r = await post({ name: '' }, '10.0.0.3')
check('invalid body → 400', r.status === 400)
r = await post({ ...valid, consent: false, phone: '+905550003333' }, '10.0.0.4')
check('no consent → 400', r.status === 400)
let last
for (let i = 0; i < 6; i++) last = await post({ ...valid, phone: `+90555000${4000 + i}`, message: 'rl' + i }, '10.0.0.9')
check('rate limit kicks in (429) for a flooding IP', last.status === 429, `(last status ${last.status})`)
const big = await fetch(base + '/api/contact', { method: 'POST', headers: { 'content-type': 'application/json', 'x-forwarded-for': '10.0.0.8' }, body: JSON.stringify({ ...valid, message: 'x'.repeat(30000) }) })
check('oversized body rejected (413)', big.status === 413, `(${big.status})`)
const unauth = await fetch(base + '/api/admin/contact-check')
check('diagnostics endpoint rejects anonymous callers (401)', unauth.status === 401, `(${unauth.status})`)
console.log(fail ? `\n${fail} check(s) failed` : '\nall checks passed')
process.exit(fail ? 1 : 0)

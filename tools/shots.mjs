import { chromium } from 'playwright'
const base = 'http://localhost:3000'
const jobs = [
  ['home-ar-light', '/ar', 'light', 1280, 800],
  ['home-ar-dark', '/ar', 'dark', 1280, 800],
  ['home-en-light', '/en', 'light', 1366, 900],
  ['home-ar-mobile', '/ar', 'light', 390, 844],
  ['dental-ar', '/ar/services/dental', 'light', 1366, 900],
  ['blog-ar', '/ar/blog', 'light', 1366, 900],
  ['contact-ar', '/ar/contact', 'light', 1366, 900],
  ['team-ar', '/ar/team', 'light', 1366, 900],
]
const b = await chromium.launch()
for (const [name, path, theme, w, h] of jobs) {
  const ctx = await b.newContext({ viewport: { width: w, height: h } })
  await ctx.addInitScript((t) => { try { localStorage.setItem('orec-theme', t) } catch {} }, theme)
  const p = await ctx.newPage()
  const errs = []
  p.on('pageerror', (e) => errs.push(String(e)))
  await p.goto(base + path, { waitUntil: 'networkidle' })
  await p.waitForTimeout(800)
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)
  console.log(name, 'overflowX:', overflow, 'errors:', errs.length)
  const buf = await p.screenshot({ type: 'jpeg', quality: 42, fullPage: true })
  const b64 = buf.toString('base64')
  for (let i = 0, k = 0; i < b64.length; i += 3000, k++) console.log('SHOT ' + name + ' ' + k + ' ' + b64.slice(i, i + 3000))
  await ctx.close()
}
await b.close()

import { chromium } from 'playwright'
const base = 'http://localhost:3000'
const jobs = [
  ['home-ar-light', '/ar', 'light', 1366, 900],
  ['home-ar-dark', '/ar', 'dark', 1366, 900],
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
  await p.screenshot({ path: `shots/${name}.png`, fullPage: true })
  await ctx.close()
}
await b.close()

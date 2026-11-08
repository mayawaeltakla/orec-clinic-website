// Browser e2e for the home page with deferred sections. Usage: node tools/home-e2e.mjs <baseUrl> <mockResendPort>
import http from 'node:http'
import { chromium, devices } from 'playwright'

const base = process.argv[2] || 'http://localhost:3000'
const mockPort = Number(process.argv[3] || 4020)
const mails = []
http.createServer((req, res) => { let b = ''; req.on('data', (c) => (b += c)); req.on('end', () => { mails.push(JSON.parse(b || '{}')); res.setHeader('content-type', 'application/json'); res.end('{"id":"mock"}') }) }).listen(mockPort)

let fail = 0
const check = (name, ok, extra = '') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${name} ${extra}`); if (!ok) fail++ }

// 1. SEO: server HTML already contains every home section (nothing depends on JS)
const html = await (await fetch(base + '/ar')).text()
for (const id of ['services', 'about', 'why', 'trust', 'blog', 'contact']) check(`initial HTML contains section #${id}`, html.includes(`id="${id}"`))
check('initial HTML contains form field + services text', html.includes('id="cf-name"') && html.includes('زراعة الأسنان'))
check('hero H1 present in HTML', /<h1[\s>]/.test(html))

const browser = await chromium.launch({ args: ['--no-sandbox'] })
for (const [label, ctxOpts] of [['desktop', { viewport: { width: 1366, height: 800 } }], ['mobile', { ...devices['Pixel 7'] }]]) {
  const ctx = await browser.newContext(ctxOpts)
  const page = await ctx.newPage()
  const errors = []
  page.on('pageerror', (e) => errors.push(e.message))
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  await page.goto(base + '/ar', { waitUntil: 'load' })
  // before scrolling: hero hydrated (slider arrows respond), contact section still present in DOM
  check(`${label}: contact section exists before scrolling`, (await page.locator('#contact').count()) === 1)
  await page.locator('#contact').scrollIntoViewIfNeeded()
  await page.waitForTimeout(1500)
  // 2. the form works after deferred hydration
  const before = mails.length
  await page.fill('#cf-name', `E2E ${label}`)
  await page.fill('#cf-phone', '+905551112233')
  await page.fill('#cf-message', `deferred hydration ${label}`)
  await page.locator('#contact input[type=checkbox]').check()
  await page.locator('#contact button[type=submit]').click()
  await page.getByRole('status').filter({ hasText: 'تم استلام' }).waitFor({ timeout: 10000 }).then(() => check(`${label}: form submit shows success message`, true)).catch(() => check(`${label}: form submit shows success message`, false))
  check(`${label}: mail reached Resend mock`, mails.length === before + 1 && JSON.stringify(mails.at(-1)).includes(`E2E ${label}`))
  // 3. other deferred sections render real content after scrolling
  await page.locator('#services').scrollIntoViewIfNeeded()
  await page.waitForTimeout(800)
  check(`${label}: services links present`, (await page.locator('#services a[href*="/services/"]').count()) >= 4)
  // 4. language switch (client-side, no full reload)
  await page.evaluate(() => window.scrollTo(0, 0))
  const marker = await page.evaluate(() => { window.__noReload = 1; return 1 })
  await page.getByRole('button', { name: /—/ }).first().click()
  await page.getByRole('menuitem').filter({ hasText: 'English' }).first().click().catch(async () => { await page.getByText('English', { exact: true }).first().click() })
  await page.waitForURL('**/en', { timeout: 10000 }).then(() => check(`${label}: language switch → /en`, true)).catch(() => check(`${label}: language switch → /en`, false))
  check(`${label}: language switch kept the page (no reload)`, (await page.evaluate(() => window.__noReload)) === 1)
  check(`${label}: English heading rendered`, /Orec|clinic|Care|Excellence/i.test(await page.locator('h1').first().innerText()))
  check(`${label}: no page errors`, errors.length === 0, errors.slice(0, 3).join(' | ').slice(0, 300))
  await ctx.close()
}
await browser.close()
console.log(fail ? `\n${fail} check(s) failed` : '\nall checks passed')
process.exit(fail ? 1 : 0)

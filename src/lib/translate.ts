import type { BlogPost } from '@/lib/blog-db'

/**
 * Automatic translation Arabic → site languages.
 *
 * Default (open source, no account, no API key): the public LibreTranslate server
 * https://translate.fedilab.app — override with LIBRETRANSLATE_URL.
 * Languages without a direct ar→xx model are translated through English (ar→en→xx).
 * Optional: set DEEPL_API_KEY (and no LIBRETRANSLATE_URL) to use DeepL instead.
 * Swiss German (de-ch) reuses the German translation.
 * Any failure leaves the article in Arabic; nothing is lost.
 */
const DEFAULT_LIBRE_URL = 'https://translate.fedilab.app'
const REQUEST_TIMEOUT_MS = 20_000

const TARGETS: Record<string, { deepl: string; libre: string }> = {
  en: { deepl: 'EN-US', libre: 'en' },
  es: { deepl: 'ES', libre: 'es' },
  tr: { deepl: 'TR', libre: 'tr' },
  fr: { deepl: 'FR', libre: 'fr' },
  de: { deepl: 'DE', libre: 'de' },
  it: { deepl: 'IT', libre: 'it' },
  ru: { deepl: 'RU', libre: 'ru' },
  pl: { deepl: 'PL', libre: 'pl' },
}

/** Always available: the default public server needs no configuration. */
export function translationConfigured(): boolean {
  return true
}

const useDeepl = () => Boolean(process.env.DEEPL_API_KEY) && !process.env.LIBRETRANSLATE_URL
const libreBase = () => (process.env.LIBRETRANSLATE_URL || DEFAULT_LIBRE_URL).replace(/\/$/, '')
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

/** Targets the server supports directly from Arabic (null = unknown). Cached for an hour. */
let arTargets: { at: number; set: Set<string> | null } | null = null
async function directTargets(): Promise<Set<string> | null> {
  if (arTargets && Date.now() - arTargets.at < 3_600_000) return arTargets.set
  let set: Set<string> | null = null
  try {
    const res = await fetch(`${libreBase()}/languages`, { signal: AbortSignal.timeout(8_000), cache: 'no-store' })
    if (res.ok) {
      const langs = (await res.json()) as { code: string; targets?: string[] }[]
      const ar = langs.find((l) => l.code === 'ar')
      if (ar?.targets) set = new Set(ar.targets)
    }
  } catch {
    /* unknown — we will try direct and fall back to English pivot */
  }
  arTargets = { at: Date.now(), set }
  return set
}

/** One chunked LibreTranslate call, with timeout and a single retry on 429/5xx/timeouts. */
async function libreCall(texts: string[], source: string, target: string): Promise<string[]> {
  const out: string[] = []
  for (let i = 0; i < texts.length; i += 30) {
    const chunk = texts.slice(i, i + 30)
    let lastErr: Error | null = null
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const res = await fetch(`${libreBase()}/translate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            q: chunk,
            source,
            target,
            format: 'text',
            ...(process.env.LIBRETRANSLATE_API_KEY ? { api_key: process.env.LIBRETRANSLATE_API_KEY } : {}),
          }),
          signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
          cache: 'no-store',
        })
        if (!res.ok) {
          const retriable = res.status === 429 || res.status >= 500
          lastErr = new Error(`${source}→${target} HTTP ${res.status}: ${(await res.text()).slice(0, 120)}`)
          if (retriable && attempt === 0) {
            await sleep(1500)
            continue
          }
          throw lastErr
        }
        const j = (await res.json()) as { translatedText?: string | string[] }
        const arr = Array.isArray(j.translatedText) ? j.translatedText : [j.translatedText ?? '']
        if (arr.length !== chunk.length) throw new Error(`${source}→${target}: unexpected response size`)
        out.push(...arr)
        lastErr = null
        break
      } catch (e) {
        lastErr = e as Error
        if (attempt === 0 && /timeout|abort|fetch failed/i.test(lastErr.message)) {
          await sleep(1500)
          continue
        }
        throw lastErr
      }
    }
    if (lastErr) throw lastErr
  }
  return out
}

async function libre(texts: string[], target: string): Promise<string[]> {
  if (target === 'en') return libreCall(texts, 'ar', 'en')
  const direct = await directTargets()
  const pivot = async () => libreCall(await libreCall(texts, 'ar', 'en'), 'en', target)
  if (direct && !direct.has(target)) return pivot() // no direct pair → via English
  try {
    return await libreCall(texts, 'ar', target)
  } catch {
    return pivot() // direct failed or unknown support → via English
  }
}


// Fallback: MyMemory (free, no key, no account). Limit ~500 chars per request, so split on sentences.
function splitForMyMemory(text: string, max = 450): string[] {
  const parts = text.match(/[^.!?؟۔\n]+[.!?؟۔]*\s*/g) || [text]
  const out: string[] = []
  let cur = ''
  for (const p of parts) {
    if ((cur + p).length > max && cur) {
      out.push(cur.trim())
      cur = ''
    }
    if (p.length > max) {
      for (let i = 0; i < p.length; i += max) out.push(p.slice(i, i + max).trim())
    } else cur += p
  }
  if (cur.trim()) out.push(cur.trim())
  return out
}

async function myMemoryOne(text: string, target: string): Promise<string> {
  const pieces = splitForMyMemory(text)
  const out: string[] = []
  for (const piece of pieces) {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(piece)}&langpair=ar|${target}`
    const res = await fetch(url, { signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) })
    if (!res.ok) throw new Error(`MyMemory HTTP ${res.status}`)
    const j = (await res.json()) as { responseData?: { translatedText?: string }; quotaFinished?: boolean; responseStatus?: number | string }
    const t = j.responseData?.translatedText
    if (j.quotaFinished || !t || Number(j.responseStatus) !== 200 || /MYMEMORY WARNING/i.test(t)) throw new Error('MyMemory quota/err')
    out.push(t)
  }
  return out.join(' ')
}

async function myMemory(texts: string[], target: string): Promise<string[]> {
  const res: string[] = []
  for (const t of texts) res.push(await myMemoryOne(t, target))
  return res
}

async function deepl(texts: string[], target: string): Promise<string[]> {
  const key = process.env.DEEPL_API_KEY as string
  const base = key.endsWith(':fx') ? 'https://api-free.deepl.com' : 'https://api.deepl.com'
  const out: string[] = []
  for (let i = 0; i < texts.length; i += 40) {
    const res = await fetch(`${base}/v2/translate`, {
      method: 'POST',
      headers: { Authorization: `DeepL-Auth-Key ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: texts.slice(i, i + 40), source_lang: 'AR', target_lang: target, preserve_formatting: true }),
    })
    if (!res.ok) throw new Error(`DeepL ${res.status}: ${(await res.text()).slice(0, 200)}`)
    const j = (await res.json()) as { translations: { text: string }[] }
    out.push(...j.translations.map((t) => t.text))
  }
  return out
}

type Line = { raw: string; prefix: string; text: string; translate: boolean }

function parseBody(body: string): Line[] {
  return body.replace(/\r/g, '').split('\n').map((raw) => {
    if (!raw.trim() || /^!\[[^\]]*\]\([^)]+\)\s*$/.test(raw.trim())) return { raw, prefix: '', text: raw, translate: false }
    const m = raw.match(/^(## |- )?(.*)$/)!
    return { raw, prefix: m[1] ?? '', text: (m[2] ?? '').replace(/\*\*/g, ''), translate: true }
  })
}

async function translateOne(post: { title: string; excerpt: string; body: string }, target: { deepl: string; libre: string }) {
  const lines = parseBody(post.body)
  const texts = [post.title, post.excerpt || '', ...lines.filter((l) => l.translate).map((l) => l.text)]
  const idx = texts.map((t, i) => (t.trim() ? i : -1)).filter((i) => i >= 0)
  const input = idx.map((i) => texts[i])
  let translated: string[]
  if (useDeepl()) translated = await deepl(input, target.deepl)
  else {
    try {
      translated = await libre(input, target.libre)
    } catch (e) {
      if (process.env.LIBRETRANSLATE_URL) throw e
      translated = await myMemory(input, target.libre)
    }
  }
  const result = texts.map((t) => t)
  idx.forEach((i, k) => (result[i] = translated[k]))
  let n = 2
  const body = lines
    .map((l) => (l.translate ? `${l.prefix}${result[n++]}` : l.raw))
    .join('\n')
  return { title: result[0], excerpt: result[1], body }
}

/** Returns translations for every language that succeeded, plus any errors (3 languages at a time). */
export async function translatePost(post: { title: string; excerpt: string; body: string }) {
  const translations: BlogPost['translations'] = {}
  const errors: string[] = []
  const queue = Object.entries(TARGETS)
  const worker = async () => {
    for (let job = queue.shift(); job; job = queue.shift()) {
      const [code, target] = job
      try {
        const t = await translateOne(post, target)
        if (t.title && t.title !== post.title) translations[code] = t
        else errors.push(`${code}: empty or unchanged result`)
      } catch (e) {
        errors.push(`${code}: ${(e as Error).message}`)
      }
    }
  }
  await Promise.all([worker(), worker(), worker()])
  return { translations, errors }
}

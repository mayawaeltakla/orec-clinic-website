import type { BlogPost } from '@/lib/blog-db'

/**
 * Automatic translation Arabic → site languages with DeepL.
 * Env: DEEPL_API_KEY (a free key ending in ":fx" uses the free endpoint).
 * Swiss German (de-ch) reuses the German translation.
 */
const TARGETS: Record<string, string> = {
  en: 'EN-US',
  es: 'ES',
  tr: 'TR',
  fr: 'FR',
  de: 'DE',
  it: 'IT',
  ru: 'RU',
  pl: 'PL',
}

export function translationConfigured(): boolean {
  return Boolean(process.env.DEEPL_API_KEY)
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

async function translateOne(post: { title: string; excerpt: string; body: string }, target: string) {
  const lines = parseBody(post.body)
  const texts = [post.title, post.excerpt || '', ...lines.filter((l) => l.translate).map((l) => l.text)]
  const idx = texts.map((t, i) => (t.trim() ? i : -1)).filter((i) => i >= 0)
  const translated = await deepl(idx.map((i) => texts[i]), target)
  const result = texts.map((t) => t)
  idx.forEach((i, k) => (result[i] = translated[k]))
  let n = 2
  const body = lines
    .map((l) => (l.translate ? `${l.prefix}${result[n++]}` : l.raw))
    .join('\n')
  return { title: result[0], excerpt: result[1], body }
}

/** Returns translations for every language that succeeded, plus any errors. */
export async function translatePost(post: { title: string; excerpt: string; body: string }) {
  const translations: BlogPost['translations'] = {}
  const errors: string[] = []
  await Promise.all(
    Object.entries(TARGETS).map(async ([code, target]) => {
      try {
        translations[code] = await translateOne(post, target)
      } catch (e) {
        errors.push(`${code}: ${(e as Error).message}`)
      }
    }),
  )
  return { translations, errors }
}

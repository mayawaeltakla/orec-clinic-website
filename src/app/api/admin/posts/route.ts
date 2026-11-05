import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { isAdmin } from '@/lib/admin-auth'
import { deletePost, listAll, savePost, saveTranslations } from '@/lib/blog-db'
import { translatePost, translationConfigured } from '@/lib/translate'

export const runtime = 'nodejs'
export const maxDuration = 60

const PostSchema = z.object({
  id: z.number().int().positive().optional(),
  slug: z.string().trim().max(80).optional().default(''),
  title: z.string().trim().min(3).max(200),
  excerpt: z.string().trim().max(400).default(''),
  body: z.string().max(60000).default(''),
  image: z.string().trim().max(500).optional().nullable(),
  published: z.boolean().default(false),
})

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}

const fail = (error: string, status: number, detail?: string) =>
  NextResponse.json({ ok: false, error, detail }, { status })

export async function GET() {
  if (!(await isAdmin())) return fail('unauthorized', 401)
  try {
    return NextResponse.json({ ok: true, posts: await listAll() })
  } catch (e) {
    return fail('db', 500, (e as Error).message)
  }
}

export async function POST(req: Request) {
  if (!(await isAdmin())) return fail('unauthorized', 401)
  const parsed = PostSchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return fail('validation', 400)
  const d = parsed.data
  let image = d.image || null
  if (image && !/^(https:\/\/|\/)/.test(image)) return fail('image', 400)
  const slug = slugify(d.slug) || `post-${Date.now().toString(36)}`
  try {
    const post = await savePost({ id: d.id, slug, title: d.title, excerpt: d.excerpt, body: d.body, image, published: d.published })
    let translated = 0
    let translateErrors: string[] = []
    if (translationConfigured() && d.published !== undefined) {
      try {
        const { translations, errors } = await translatePost({ title: d.title, excerpt: d.excerpt, body: d.body })
        translated = Object.keys(translations).length
        translateErrors = errors
        if (translated) {
          await saveTranslations(post.id, translations)
          post.translations = translations
        }
      } catch (e) {
        translateErrors = [(e as Error).message]
      }
    }
    revalidatePath('/', 'layout')
    return NextResponse.json({ ok: true, post, translated, translateConfigured: translationConfigured(), translateErrors })
  } catch (e) {
    const msg = (e as Error).message
    if (/duplicate key|unique/i.test(msg)) return fail('slug_taken', 409)
    return fail('db', 500, msg)
  }
}

export async function DELETE(req: Request) {
  if (!(await isAdmin())) return fail('unauthorized', 401)
  const id = Number(new URL(req.url).searchParams.get('id'))
  if (!Number.isInteger(id) || id <= 0) return fail('validation', 400)
  try {
    await deletePost(id)
    revalidatePath('/', 'layout')
    return NextResponse.json({ ok: true })
  } catch (e) {
    return fail('db', 500, (e as Error).message)
  }
}

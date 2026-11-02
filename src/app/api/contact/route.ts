import { NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'
import { LANGUAGES } from '@/lib/i18n'

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(6).max(30),
  service: z.string().trim().max(160).optional().nullable(),
  message: z.string().trim().max(4000).optional().nullable(),
  lang: z.string().max(10).optional(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = ContactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: 'validation' }, { status: 400 })
    }

    const data = parsed.data
    const lang = LANGUAGES.some((l) => l.code === data.lang) ? data.lang : 'ar'

    await db.contactMessage.create({
      data: {
        name: data.name,
        phone: data.phone,
        service: data.service ?? null,
        message: data.message ?? null,
        lang: lang as string,
      },
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] failed to save message:', err)
    return NextResponse.json({ ok: false, error: 'server' }, { status: 500 })
  }
}

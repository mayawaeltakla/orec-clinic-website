'use client'

import type { ReactNode } from 'react'
import { useLanguage } from './language-context'
import { Ornament } from './ornament'
import { SECTION_LABELS } from '@/lib/i18n/section-labels'
import { localizePost, type BlogPost } from '@/lib/blog-db'

/** Tiny markdown subset: ## heading, - list, **bold**, blank-line paragraphs. */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
  )
}

export function renderBody(body: string): ReactNode[] {
  const blocks = body.replace(/\r/g, '').split(/\n{2,}/)
  return blocks.map((block, i) => {
    const lines = block.split('\n').filter(Boolean)
    if (!lines.length) return null
    if (lines[0].startsWith('## ')) {
      return (
        <h2 key={i} className="mt-8 text-xl font-extrabold text-gold-2 sm:text-2xl">
          {inline(lines[0].slice(3))}
        </h2>
      )
    }
    const img = lines.length === 1 ? lines[0].trim().match(/^!\[([^\]]*)\]\(((?:https:\/\/|\/)[^)\s]+)\)$/) : null
    if (img) {
      return <img key={i} src={img[2]} alt={img[1]} loading="lazy" className="mt-6 w-full rounded-2xl" />
    }
    if (lines.every((l) => l.startsWith('- '))) {
      return (
        <ul key={i} className="mt-4 list-disc space-y-1.5 ps-6 text-foreground/90">
          {lines.map((l, j) => (
            <li key={j}>{inline(l.slice(2))}</li>
          ))}
        </ul>
      )
    }
    return (
      <p key={i} className="mt-4 leading-loose text-foreground/90">
        {inline(lines.join(' '))}
      </p>
    )
  })
}

export function BlogArticle({ post }: { post: BlogPost }) {
  const { lang, lp } = useLanguage()
  const L = SECTION_LABELS[lang.code]
  const loc = localizePost(post, lang.code)
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20" dir={loc.lang === 'ar' ? 'rtl' : 'ltr'} lang={loc.lang}>
      <a href={lp('/blog')} className="text-sm font-bold text-gold-2 underline underline-offset-4">
        {L.blogTitle}
      </a>
      <h1 className="mt-4 text-3xl font-extrabold leading-snug sm:text-4xl">
        <span className="text-gold-grad">{loc.title}</span>
      </h1>
      <time className="mt-2 block text-xs text-muted-foreground" dateTime={post.date}>{post.date}</time>
      <Ornament className="!mx-0 !justify-start" />
      {post.image && <img src={post.image} alt="" className="mt-6 aspect-video w-full rounded-2xl object-cover" />}
      <div className="mt-6 text-sm sm:text-base">{renderBody(loc.body)}</div>
    </article>
  )
}

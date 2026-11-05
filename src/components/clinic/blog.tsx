'use client'

import { Newspaper } from 'lucide-react'
import { useLanguage } from './language-context'
import { Ornament } from './ornament'
import { SECTION_LABELS } from '@/lib/i18n/section-labels'
import { POSTS } from '@/lib/blog-data'

export function BlogList({ teaser = false }: { teaser?: boolean }) {
  const { lang, lp } = useLanguage()
  const L = SECTION_LABELS[lang.code]
  const posts = teaser ? POSTS.slice(0, 3) : POSTS
  const Heading = teaser ? 'h2' : 'h1'
  return (
    <section id="blog" className={`relative ${teaser ? 'py-20 sm:py-24' : 'py-16 sm:py-20'}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="text-3xl font-extrabold sm:text-4xl">
            <span className="text-gold-grad">{L.blogTitle}</span>
          </Heading>
          <Ornament />
          <p className="mt-5 text-sm leading-loose text-muted-foreground sm:text-base">{L.blogSubtitle}</p>
        </div>

        {posts.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {posts.map((p) => (
              <article key={p.slug} className="lift overflow-hidden rounded-3xl border border-gold/25 bg-card">
                {p.image && <img src={p.image} alt="" loading="lazy" className="aspect-video w-full object-cover" />}
                <div className="p-6">
                  <time className="text-xs text-muted-foreground" dateTime={p.date}>{p.date}</time>
                  <h3 className="mt-2 text-lg font-extrabold text-gold-2">{p.title[lang.code] ?? p.title.ar}</h3>
                  <p className="mt-2 text-sm leading-loose text-foreground/80">{p.excerpt[lang.code] ?? p.excerpt.ar}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-gold/30 bg-card p-8 text-center">
            <span className="gold-ring mx-auto flex h-14 w-14 items-center justify-center rounded-full" aria-hidden>
              <Newspaper className="h-6 w-6" />
            </span>
            <p className="mt-4 text-sm leading-loose text-foreground/85 sm:text-base">{L.blogEmpty}</p>
          </div>
        )}

        {teaser && (
          <div className="mt-8 text-center">
            <a href={lp('/blog')} className="text-sm font-bold text-gold-2 underline underline-offset-4">
              {L.blogAll}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

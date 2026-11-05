'use client'

import { Newspaper } from 'lucide-react'
import { useLanguage } from './language-context'
import { Ornament } from './ornament'
import { SECTION_LABELS } from '@/lib/i18n/section-labels'
import { localizePost, type BlogPost } from '@/lib/blog-db'
import { AdminAddButton } from './admin-add-button'

/** Posts are written in Arabic and auto-translated; falls back to Arabic when a translation is missing. */
export function BlogList({ posts: all, teaser = false }: { posts: BlogPost[]; teaser?: boolean }) {
  const { lang, lp } = useLanguage()
  const L = SECTION_LABELS[lang.code]
  const posts = teaser ? all.slice(0, 3) : all
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
            {posts.map((p) => {
              const loc = localizePost(p, lang.code)
              return (
                <a key={p.slug} href={lp(`/blog/${p.slug}`)} className="orec-card group block overflow-hidden">
                  {p.image && <img src={p.image} alt="" loading="lazy" className="aspect-video w-full object-cover" />}
                  <article className="p-6" dir={loc.lang === 'ar' ? 'rtl' : 'ltr'} lang={loc.lang}>
                    <time className="text-xs text-muted-foreground" dateTime={p.date}>{p.date}</time>
                    <h3 className="mt-2 text-lg font-extrabold text-gold-2">{loc.title}</h3>
                    {loc.excerpt && <p className="mt-2 text-sm leading-loose text-foreground/80">{loc.excerpt}</p>}
                  </article>
                </a>
              )
            })}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-gold/30 bg-card p-8 text-center">
            <span className="gold-ring mx-auto flex h-14 w-14 items-center justify-center rounded-full" aria-hidden>
              <Newspaper className="h-6 w-6" />
            </span>
            <p className="mt-4 text-sm leading-loose text-foreground/85 sm:text-base">{L.blogEmpty}</p>
          </div>
        )}

        <div className="mt-8 text-center">
          <AdminAddButton />
        </div>

        {teaser && posts.length > 0 && (
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

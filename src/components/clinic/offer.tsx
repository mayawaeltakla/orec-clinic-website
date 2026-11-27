'use client'

import { Plane, Car, Languages, FileText, Pill, Landmark, BadgeCheck, CreditCard } from 'lucide-react'
import { useLanguage } from './language-context'
import { Ornament } from './ornament'
import { clientHome } from '@/lib/i18n/client-home'

const ICONS = [Plane, Car, Languages, FileText, Pill, Landmark, BadgeCheck]

/** «ماذا نقدم للمريض» — the seven services included in every journey. */
export function Offer() {
  const { lang } = useLanguage()
  const T = clientHome(lang.code)
  return (
    <section id="offer" className="relative py-20 sm:py-24">
      <div className="gold-line absolute inset-x-0 top-0" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">{T.offerEyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            <span className="text-gold-grad">{T.offerTitle}</span>
          </h2>
          <Ornament />
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {T.offerItems.map((it, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <li key={it.title} className="orec-card lift flex gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="gold-ring flex h-12 w-12 shrink-0 items-center justify-center rounded-full" aria-hidden>
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-gold-2">{it.title}</h3>
                  {it.text && <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.text}</p>}
                </div>
              </li>
            )
          })}
          <li className="flex items-center gap-4 rounded-2xl border border-gold/40 bg-gold/10 p-5 sm:col-span-2 lg:col-span-1">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold" aria-hidden>
              <CreditCard className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <span className="block text-base font-extrabold text-gold-2">{T.cardPay}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/payment-methods.png" alt="Visa, Mastercard, American Express, Discover, UnionPay, PayPal, Apple Pay, Google Pay, Diners Club" width={640} height={187} className="mt-3 h-auto w-full max-w-xs rounded-lg bg-white" loading="lazy" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

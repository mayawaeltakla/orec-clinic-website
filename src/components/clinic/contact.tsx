'use client'

import { useMemo, useState } from 'react'
import { useLanguage } from './language-context'
import { CLINIC, whatsappLink } from '@/lib/i18n'
import { Mail, Phone, MapPin, Quote, Send, Loader2, ShieldCheck, ChevronDown } from 'lucide-react'
import { SOCIALS } from './social-icons'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function Contact() {
  const { dict, lang } = useLanguage()
  const c = dict.contact
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const serviceOptions = useMemo(() => {
    const opts: string[] = []
    for (const cat of dict.services.categories) {
      for (const it of cat.items) opts.push(it.name)
      for (const g of cat.groups ?? []) opts.push(g.name)
    }
    return opts
  }, [dict])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, service, message, lang: lang.code }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
      setName('')
      setPhone('')
      setService('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  const infoCards = [
    {
      icon: Mail,
      label: c.email,
      value: CLINIC.email,
      href: `mailto:${CLINIC.email}`,
      ltr: true,
    },
    {
      icon: Phone,
      label: c.phone,
      value: CLINIC.phoneDisplay,
      href: `tel:${CLINIC.phoneRaw}`,
      ltr: true,
    },
    {
      icon: MapPin,
      label: c.address,
      value: CLINIC.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(CLINIC.address)}`,
      ltr: true,
    },
  ]

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="gold-line absolute inset-x-0 top-0" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gold" dir="ltr">
            {c.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            <span className="text-gold-grad">{c.title}</span>
          </h2>
        </div>

        {/* Quote */}
        <div className="relative mx-auto mt-8 max-w-4xl rounded-3xl border border-gold/25 bg-card/70 p-6 sm:p-8">
          <Quote className="absolute start-5 top-5 h-8 w-8 text-gold/25" aria-hidden />
          <p className="text-center text-sm leading-loose text-foreground/90 sm:text-base">
            {c.quote}
          </p>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-gold" aria-hidden />
            {c.privacy}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-extrabold text-gold-2">{c.infoTitle}</h3>
            {infoCards.map(({ icon: Icon, label, value, href, ltr }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="lift flex items-center gap-4 rounded-2xl border border-gold/20 bg-card/80 p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-navy-2 text-gold">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium text-muted-foreground">{label}</span>
                  <span className="block truncate text-sm font-bold text-foreground" dir={ltr ? 'ltr' : undefined}>
                    {value}
                  </span>
                </span>
              </a>
            ))}

            {/* WhatsApp card — live chat with the clinic number */}
            <a
              href={whatsappLink(dict.whatsapp.prefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-wa/50 bg-gradient-to-br from-wa/15 via-card to-card p-5 transition-all hover:-translate-y-1 hover:border-wa hover:shadow-[0_18px_40px_-18px_rgba(37,211,102,0.45)]"
            >
              <span
                aria-hidden
                className="absolute -end-8 -top-8 h-28 w-28 rounded-full bg-wa/20 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <span className="relative flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-wa text-white shadow-lg">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium text-muted-foreground">{c.whatsapp}</span>
                  <span className="block truncate text-sm font-bold text-foreground" dir="ltr">
                    {CLINIC.phoneDisplay}
                  </span>
                </span>
              </span>
              <span className="relative inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-wa px-5 text-sm font-bold text-white transition group-hover:brightness-110">
                <WhatsAppIcon className="h-5 w-5" />
                {c.whatsappCta}
              </span>
            </a>

            {/* Social profiles */}
            <div className="rounded-2xl border border-gold/20 bg-card/80 p-4">
              <span className="block text-xs font-medium text-muted-foreground">{dict.footer.follow}</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {SOCIALS.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 bg-background/60 text-foreground/75 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-gold/25 bg-card/80 p-6 sm:p-8"
              noValidate={false}
            >
              <h3 className="text-lg font-extrabold text-gold-2">{c.formTitle}</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className="mb-1.5 block text-sm font-semibold text-foreground/90">
                    {c.form.name} <span className="text-gold">*</span>
                  </label>
                  <input
                    id="cf-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 w-full rounded-xl border border-gold/25 bg-background/60 px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </div>
                <div>
                  <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-semibold text-foreground/90">
                    {c.form.phone} <span className="text-gold">*</span>
                  </label>
                  <input
                    id="cf-phone"
                    required
                    type="tel"
                    dir="ltr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11 w-full rounded-xl border border-gold/25 bg-background/60 px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </div>
                <div className="relative sm:col-span-2">
                  <label htmlFor="cf-service" className="mb-1.5 block text-sm font-semibold text-foreground/90">
                    {c.form.service}
                  </label>
                  <select
                    id="cf-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-gold/25 bg-background/60 px-4 pe-10 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  >
                    <option value="">{c.form.servicePlaceholder}</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o} className="bg-background text-foreground">
                        {o}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute end-3 top-[38px] h-4 w-4 text-muted-foreground" aria-hidden />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cf-message" className="mb-1.5 block text-sm font-semibold text-foreground/90">
                    {c.form.message}
                  </label>
                  <textarea
                    id="cf-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={c.form.messagePlaceholder}
                    className="w-full rounded-xl border border-gold/25 bg-background/60 px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-gold mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-8 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    {c.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
                    {c.form.submit}
                  </>
                )}
              </button>

              {status === 'success' && (
                <p role="status" className="mt-4 rounded-xl border border-wa/40 bg-wa/10 px-4 py-3 text-sm font-semibold text-wa">
                  {c.form.success}
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="mt-4 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">
                  {c.form.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

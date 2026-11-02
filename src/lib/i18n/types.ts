export type LanguageCode = 'ar' | 'en' | 'es' | 'tr' | 'fr' | 'de' | 'it' | 'ru' | 'pl' | 'deCH'

export interface ContactForm {
  name: string
  phone: string
  service: string
  servicePlaceholder: string
  message: string
  messagePlaceholder: string
  submit: string
  sending: string
  success: string
  error: string
  required: string
}

export interface DentalSection {
  num: string
  name: string
  tagline: string
  intro: string
  blocks: { title: string; text: string }[]
  candidatesTitle: string
  candidates: string[]
  tipsTitle?: string
  tips?: string[]
  imageNote: string
}

export interface Dictionary {
  meta: { title: string; description: string }
  brand: { name: string; suffix: string; tagline: string; care: string }
  nav: {
    home: string
    services: string
    about: string
    why: string
    contact: string
    book: string
    servicesIndex: string
    menuOpen: string
    menuClose: string
    themeToggle: string
  }
  hero: {
    eyebrow: string
    title1: string
    title2: string
    badges: string[]
    ctaPrimary: string
    ctaSecondary: string
    location: string
    prevSlide: string
    nextSlide: string
    stats: { value: string; label: string }[]
  }
  services: {
    eyebrow: string
    title: string
    subtitle: string
    viewAll: string
    categories: {
      id: string
      num: string
      code: string
      title: string
      description: string
      items: { name: string; en: string }[]
      groups?: { name: string; items: string[] }[]
    }[]
  }
  dental: {
    eyebrow: string
    title: string
    subtitle: string
    sections: DentalSection[]
    cta: string
  }
  about: {
    eyebrow: string
    title: string
    intro: { title: string; text: string }
    vision: { title: string; text: string }
    specialty: { title: string; text: string; items: { title: string; text: string }[] }
    founder: { title: string; quote: string; closing: string; name: string; nameEn: string; role: string }
    cta: string
    license: string
  }
  why: {
    eyebrow: string
    title: string
    intro: string
    items: { num: string; title: string; text: string }[]
  }
  contact: {
    eyebrow: string
    title: string
    quote: string
    subtitle: string
    privacy: string
    infoTitle: string
    email: string
    phone: string
    whatsapp: string
    whatsappCta: string
    address: string
    formTitle: string
    form: ContactForm
  }
  footer: {
    tagline: string
    care: string
    follow: string
    quickLinks: string
    servicesTitle: string
    contactTitle: string
    rights: string
    location: string
  }
  whatsapp: {
    floatLabel: string
    tooltip: string
    prefill: string
    aria: string
  }
}

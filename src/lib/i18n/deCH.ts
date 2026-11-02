import { de } from './de'
import type { Dictionary } from './types'

/**
 * Schweizer Hochdeutsch (Schweizerdeutsch-Schriftform):
 * basiert auf dem deutschen Wörterbuch, mit typisch schweizerischen
 * Abweichungen (ss statt ß, leicht angepasste Formulierungen).
 */
const swissify = (s: string) => s.replace(/ß/g, 'ss')

const deCH: Dictionary = JSON.parse(
  JSON.stringify(de, (key, value) => (typeof value === 'string' ? swissify(value) : value)),
) as Dictionary

// Swiss-specific wording adjustments
deCH.meta.title =
  'Orec Clinic.. Ihre medizinische Familie auf dem Weg zurück zu Ihrem Lächeln und Ihrer Schönheit'
deCH.brand.care = 'FÜRSORGE • PRÄZISION • EXZELLENZ'
deCH.hero.eyebrow = deCH.brand.care
deCH.hero.badges = [
  'Im Herzen von Istanbul',
  'Seit 2015',
  'Offiziell lizenziert vom Gesundheits- und Tourismusdepartement',
]
deCH.hero.location = 'ISTANBUL · SEIT 2015'
deCH.nav.book = 'Beratung reservieren'
deCH.contact.whatsappCta = 'WhatsApp-Chat starten'
deCH.whatsapp.tooltip =
  'Schreiben Sie uns auf WhatsApp — wir antworten in der Regel innerhalb weniger Minuten'
deCH.whatsapp.prefill = 'Grüezi Orec Clinic, ich möchte gerne eine kostenlose Beratung.'
deCH.footer.care = deCH.brand.care
deCH.footer.location = 'Istanbul — Türkei'
deCH.why.eyebrow = 'WARUM OREC'
deCH.contact.infoTitle = 'Kontaktangaben'
deCH.contact.form.sending = 'Wird gesendet..'
deCH.dental.eyebrow = '01 · DENTAL'

export { deCH }

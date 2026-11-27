/**
 * Real patient results. Add ONLY photos the clinic supplied and has the patient's consent for:
 * put the files under public/results/ and list them here. While the list is empty the section stays hidden.
 */
export interface ResultItem {
  before: string
  after: string
  /** Short caption in Arabic, e.g. «ابتسامة هوليود» */
  label?: string
  /** Department slug (dental / hair / bariatric / cosmetic) — omit to show on the home page only */
  dept?: string
}
export const RESULTS: ResultItem[] = []

/**
 * Partner / accreditation logos (files supplied by the client, under public/logos/).
 * `where`: 'home' = trust strip + footer, 'license' = inside the licences dialog.
 */
export const PARTNER_LOGOS: { name: string; src: string; where: ('home' | 'license')[] }[] = [
  { name: 'Health Türkiye', src: '/logos/health-turkiye.png', where: ['home', 'license'] },
  { name: 'Orec Clinic — Sağlık Hizmetleri', src: '/logos/plaque.png', where: ['home'] },
  { name: 'T.C. Sağlık Bakanlığı', src: '/logos/saglik-bakanligi.png', where: ['license'] },
  { name: 'T.C. Ticaret Bakanlığı', src: '/logos/ticaret-bakanligi.png', where: ['license'] },
  { name: 'TÜRSAB', src: '/logos/tursab.png', where: ['license'] },
  { name: 'Türk Patent ve Marka Kurumu', src: '/logos/turk-patent.png', where: ['license'] },
]

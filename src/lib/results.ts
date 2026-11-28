/**
 * Real patient results. Add ONLY photos the clinic supplied and has the patient's consent for:
 * put the files under public/results/ and list them here. While the list is empty the section stays hidden.
 */
export interface ResultItem {
  before?: string
  after?: string
  /** Optional: a single combined before-over-after photo (with the clinic logos baked in). Used instead of before/after when set. */
  image?: string
  w?: number
  h?: number
  /** Short caption in Arabic, e.g. «ابتسامة هوليود» */
  label?: string
  /** Department slug (dental / hair / bariatric / cosmetic) — omit to show on the home page only */
  dept?: string
}
export const RESULTS: ResultItem[] = [
  { before: '/results/pair-a-before.jpg', after: '/results/pair-a-after.jpg', w: 1200, h: 675, dept: 'dental' },
  { before: '/results/pair-b-before.jpg', after: '/results/pair-b-after.jpg', w: 940, h: 1673, dept: 'dental' },
  { before: '/results/pair-c-before.jpg', after: '/results/pair-c-after.jpg', w: 941, h: 1672, dept: 'dental' },
  { before: '/results/pair-d-before.jpg', after: '/results/pair-d-after.jpg', w: 1200, h: 800, dept: 'dental' },
  { before: '/results/pair-e-before.jpg', after: '/results/pair-e-after.jpg', w: 1200, h: 538, dept: 'dental' },
  { image: '/results/dental-01.jpg', w: 1000, h: 1505, dept: 'dental' },
  { image: '/results/dental-02.jpg', w: 1000, h: 876, dept: 'dental' },
  { image: '/results/dental-03.jpg', w: 1000, h: 1375, dept: 'dental' },
  { image: '/results/dental-04.jpg', w: 1000, h: 1345, dept: 'dental' },
  { image: '/results/dental-05.jpg', w: 1000, h: 900, dept: 'dental' },
  { image: '/results/dental-06.jpg', w: 1000, h: 1375, dept: 'dental' },
  { image: '/results/dental-07.jpg', w: 1000, h: 1225, dept: 'dental' },
  { image: '/results/dental-08.jpg', w: 1000, h: 897, dept: 'dental' },
  { image: '/results/dental-09.jpg', w: 1000, h: 1375, dept: 'dental' },
  { image: '/results/dental-10.jpg', w: 1000, h: 1176, dept: 'dental' },
  { image: '/results/dental-11.jpg', w: 1000, h: 1285, dept: 'dental' },
  { image: '/results/dental-12.jpg', w: 1000, h: 1310, dept: 'dental' },
  { image: '/results/dental-13.jpg', w: 1000, h: 1219, dept: 'dental' },
  { image: '/results/dental-14.jpg', w: 1000, h: 1250, dept: 'dental' },
  { image: '/results/dental-15.jpg', w: 1000, h: 1312, dept: 'dental' },
  { image: '/results/dental-16.jpg', w: 1000, h: 1659, dept: 'dental' },
  { image: '/results/single-1.jpg', w: 788, h: 565, dept: 'dental' },
  { image: '/results/single-2.jpg', w: 1000, h: 1782, dept: 'dental' },
  { image: '/results/single-3.jpg', w: 1000, h: 1782, dept: 'dental' },
  { image: '/results/single-4.jpg', w: 1000, h: 1782, dept: 'dental' },
  { image: '/results/single-5.jpg', w: 1000, h: 1781, dept: 'dental' },
]

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

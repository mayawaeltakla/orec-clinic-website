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

/** Partner / accreditation logos. Only entries with a real file are rendered. */
export const PARTNER_LOGOS: { name: string; src: string | null }[] = [
  { name: 'Orec Clinic', src: '/orec-logo.png' },
  { name: 'Sağlık Turizmi', src: null }, // «هيلث تركيا» — waiting for the client's file
  { name: 'Ministry plaque', src: null }, // «اللوحة» — waiting for the client's file
]

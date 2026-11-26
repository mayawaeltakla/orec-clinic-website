import type { LanguageCode } from '@/lib/i18n'

/**
 * Doctors shown on /team ONLY (not on the home page — client's request).
 * To add a doctor: drop the photo in /public/team/ and append an entry below.
 * `poster: true` means the photo is the clinic's finished portrait card (name + specialty already on it),
 * so it is shown whole with no extra text. Do NOT add unverified doctors.
 */
export interface Doctor {
  id: string
  photo: string
  width: number
  height: number
  poster?: boolean
  name: Partial<Record<LanguageCode, string>> & { en: string }
  role: Partial<Record<LanguageCode, string>> & { en: string }
  bio?: Partial<Record<LanguageCode, string>>
}

export const DOCTORS: Doctor[] = [
  { id: 'seda', photo: '/team/seda.jpg', width: 853, height: 1280, poster: true, name: { en: 'Dt. Seda' }, role: { en: 'Digital Dentistry, Esthetic & Restorative Dentistry Specialist' } },
  { id: 'berkay', photo: '/team/berkay.jpg', width: 853, height: 1280, poster: true, name: { en: 'Dt. Berkay' }, role: { en: 'Restorative & Prosthetic Dentistry' } },
  { id: 'nazli', photo: '/team/nazli.jpg', width: 960, height: 1280, poster: true, name: { en: 'Uzm. Dr. Dt. Nazli' }, role: { en: 'Oral and Maxillofacial Surgery Specialist' } },
  { id: 'hasip', photo: '/team/hasip.jpg', width: 853, height: 1280, poster: true, name: { en: 'Dt. Hasip' }, role: { en: 'General Dentistry' } },
  { id: 'zeynep', photo: '/team/zeynep.jpg', width: 960, height: 1280, poster: true, name: { en: 'Dt. Zeynep' }, role: { en: 'Prosthetic & Aesthetic Dentistry' } },
  { id: 'nur', photo: '/team/nur.jpg', width: 853, height: 1280, poster: true, name: { en: 'Dt. Nur' }, role: { en: 'Prosthetic & Digital Dentistry Specialist' } },
]

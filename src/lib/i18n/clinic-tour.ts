import type { LanguageCode } from './types'

/** Heading of the «clinic tour» photo gallery on the About page. */
export const CLINIC_TOUR: Record<LanguageCode, string> = {
  ar: 'جولة في عيادتنا',
  en: 'A tour of our clinic',
  tr: 'Kliniğimizde bir tur',
  es: 'Un recorrido por nuestra clínica',
  fr: 'Visite de notre clinique',
  de: 'Rundgang durch unsere Klinik',
  deCH: 'Rundgang durch unsere Klinik',
  it: 'Un tour della nostra clinica',
  ru: 'Экскурсия по нашей клинике',
  pl: 'Zwiedź naszą klinikę',
}

/** Photos supplied by the clinic (public/clinic/). */
export const CLINIC_PHOTOS: { src: string; w: number; h: number; alt: string }[] = [
  { src: '/clinic/facade-night.jpg', w: 1400, h: 789, alt: 'Orec Clinic building at dusk — واجهة عيادة أوريك' },
  { src: '/clinic/lounge.jpg', w: 1400, h: 788, alt: 'Orec Clinic lounge — صالة الانتظار' },
  { src: '/clinic/chair.jpg', w: 1121, h: 1403, alt: 'Orec Clinic dental treatment room — غرفة العلاج' },
  { src: '/clinic/exterior.jpg', w: 1400, h: 1050, alt: 'Orec Clinic entrance — مدخل العيادة' },
  { src: '/clinic/stairs-garden.jpg', w: 1400, h: 1050, alt: 'Orec Clinic reception stairs — مدخل الاستقبال والدرج' },
  { src: '/clinic/room.jpg', w: 1122, h: 1402, alt: 'Orec Clinic dental room — غرفة أسنان' },
  { src: '/clinic/klinik.jpg', w: 1400, h: 1050, alt: 'Orec Clinic corridor — ممر العيادات' },
  { src: '/clinic/lobby-glass.jpg', w: 1122, h: 1402, alt: 'Orec Clinic lobby — بهو العيادة' },
]

/** Labels for the clinic video (play button + heading on the About page). */
export const CLINIC_VIDEO: Record<LanguageCode, { title: string; play: string }> = {
  ar: { title: 'شاهد جولة في العيادة بالفيديو', play: 'تشغيل الفيديو' },
  en: { title: 'Watch a video tour of the clinic', play: 'Play video' },
  tr: { title: 'Klinik turunu videoyla izleyin', play: 'Videoyu oynat' },
  es: { title: 'Vea el recorrido por la clínica en vídeo', play: 'Reproducir vídeo' },
  fr: { title: 'Découvrez la clinique en vidéo', play: 'Lire la vidéo' },
  de: { title: 'Sehen Sie den Klinik-Rundgang im Video', play: 'Video abspielen' },
  deCH: { title: 'Sehen Sie den Klinik-Rundgang im Video', play: 'Video abspielen' },
  it: { title: 'Guarda il video tour della clinica', play: 'Riproduci video' },
  ru: { title: 'Видеоэкскурсия по клинике', play: 'Смотреть видео' },
  pl: { title: 'Obejrzyj wideo-spacer po klinice', play: 'Odtwórz wideo' },
}

import type { LanguageCode } from './types'

export interface TrustLabels {
  eyebrow: string
  title: string
  subtitle: string
  licenseTitle: string
  doctorsTitle: string
  doctorsText: string
  reviewsTitle: string
  reviewsText: string
  soon: string
  seeTeam: string
}

export const TRUST_LABELS: Record<LanguageCode, TrustLabels> = {
  ar: { eyebrow: 'TRUST & CARE', title: 'ثقة وأمان', subtitle: 'كل ما يهمك أن تطمئن إليه قبل رحلتك العلاجية.', licenseTitle: 'ترخيص رسمي', doctorsTitle: 'أطباؤنا', doctorsText: 'سنعرّفكم قريباً بنخبة الأطباء والاستشاريين في العيادة وخبراتهم.', reviewsTitle: 'تجارب المرضى', reviewsText: 'سنشارككم قريباً تجارب مرضانا الحقيقية وآراءهم.', soon: 'قريباً', seeTeam: 'الفريق الطبي' },
  en: { eyebrow: 'TRUST & CARE', title: 'Trust & Safety', subtitle: 'Everything you want to feel sure about before your treatment journey.', licenseTitle: 'Officially licensed', doctorsTitle: 'Our doctors', doctorsText: 'We will soon introduce the clinic’s doctors and consultants and their experience.', reviewsTitle: 'Patient experiences', reviewsText: 'Real patient experiences and reviews will be shared here soon.', soon: 'Coming soon', seeTeam: 'Our Team' },
  tr: { eyebrow: 'TRUST & CARE', title: 'Güven ve Emniyet', subtitle: 'Tedavi yolculuğunuzdan önce emin olmak istediğiniz her şey.', licenseTitle: 'Resmi lisanslı', doctorsTitle: 'Doktorlarımız', doctorsText: 'Kliniğimizin doktor ve konsültanlarını ve deneyimlerini yakında tanıtacağız.', reviewsTitle: 'Hasta deneyimleri', reviewsText: 'Gerçek hasta deneyimleri ve yorumları yakında burada olacak.', soon: 'Çok yakında', seeTeam: 'Ekibimiz' },
  es: { eyebrow: 'TRUST & CARE', title: 'Confianza y seguridad', subtitle: 'Todo lo que quiere tener claro antes de su viaje de tratamiento.', licenseTitle: 'Con licencia oficial', doctorsTitle: 'Nuestros médicos', doctorsText: 'Pronto presentaremos a los médicos y consultores de la clínica y su experiencia.', reviewsTitle: 'Experiencias de pacientes', reviewsText: 'Pronto compartiremos aquí experiencias y opiniones reales de pacientes.', soon: 'Próximamente', seeTeam: 'Nuestro equipo' },
  fr: { eyebrow: 'TRUST & CARE', title: 'Confiance et sécurité', subtitle: 'Tout ce dont vous voulez être sûr avant votre parcours de soins.', licenseTitle: 'Officiellement agréée', doctorsTitle: 'Nos médecins', doctorsText: 'Nous présenterons bientôt les médecins et consultants de la clinique et leur expérience.', reviewsTitle: 'Expériences de patients', reviewsText: 'Des témoignages et avis réels de patients seront bientôt partagés ici.', soon: 'Bientôt', seeTeam: 'Notre équipe' },
  de: { eyebrow: 'TRUST & CARE', title: 'Vertrauen & Sicherheit', subtitle: 'Alles, worauf Sie vor Ihrer Behandlungsreise vertrauen möchten.', licenseTitle: 'Offiziell lizenziert', doctorsTitle: 'Unsere Ärzte', doctorsText: 'Wir stellen Ihnen bald die Ärzte und Berater der Klinik und ihre Erfahrung vor.', reviewsTitle: 'Patientenerfahrungen', reviewsText: 'Echte Patientenerfahrungen und Bewertungen teilen wir hier in Kürze.', soon: 'Demnächst', seeTeam: 'Unser Team' },
  it: { eyebrow: 'TRUST & CARE', title: 'Fiducia e sicurezza', subtitle: 'Tutto ciò di cui vuoi essere sicuro prima del tuo percorso di cura.', licenseTitle: 'Ufficialmente autorizzata', doctorsTitle: 'I nostri medici', doctorsText: 'Presenteremo presto i medici e i consulenti della clinica e la loro esperienza.', reviewsTitle: 'Esperienze dei pazienti', reviewsText: 'Presto condivideremo qui esperienze e recensioni reali dei pazienti.', soon: 'Prossimamente', seeTeam: 'Il nostro team' },
  ru: { eyebrow: 'TRUST & CARE', title: 'Доверие и безопасность', subtitle: 'Всё, в чём вы хотите быть уверены перед поездкой на лечение.', licenseTitle: 'Официальная лицензия', doctorsTitle: 'Наши врачи', doctorsText: 'Скоро мы представим врачей и консультантов клиники и их опыт.', reviewsTitle: 'Опыт пациентов', reviewsText: 'Скоро здесь появятся реальные истории и отзывы пациентов.', soon: 'Скоро', seeTeam: 'Наша команда' },
  pl: { eyebrow: 'TRUST & CARE', title: 'Zaufanie i bezpieczeństwo', subtitle: 'Wszystko, czego chcesz być pewien przed podróżą na leczenie.', licenseTitle: 'Oficjalna licencja', doctorsTitle: 'Nasi lekarze', doctorsText: 'Wkrótce przedstawimy lekarzy i konsultantów kliniki oraz ich doświadczenie.', reviewsTitle: 'Doświadczenia pacjentów', reviewsText: 'Wkrótce podzielimy się tu prawdziwymi opiniami pacjentów.', soon: 'Wkrótce', seeTeam: 'Nasz zespół' },
  deCH: { eyebrow: 'TRUST & CARE', title: 'Vertrauen & Sicherheit', subtitle: 'Alles, worauf Sie vor Ihrer Behandlungsreise vertrauen möchten.', licenseTitle: 'Offiziell lizenziert', doctorsTitle: 'Unsere Ärzte', doctorsText: 'Wir stellen Ihnen bald die Ärzte und Berater der Klinik und ihre Erfahrung vor.', reviewsTitle: 'Patientenerfahrungen', reviewsText: 'Echte Patientenerfahrungen und Bewertungen teilen wir hier in Kürze.', soon: 'Demnächst', seeTeam: 'Unser Team' },
}

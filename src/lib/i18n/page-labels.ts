import type { LanguageCode } from './types'

export interface PageLabels {
  nav: string
  teamTitle: string
  teamSubtitle: string
  teamSoon: string
  contactDoctor: string
  privacy: string
  terms: string
  legalNote: string // shown when a page falls back to English
  updated: string
  skip: string
}

export const PAGE_LABELS: Record<LanguageCode, PageLabels> = {
  ar: { nav: 'الفريق الطبي', teamTitle: 'فريقنا الطبي', teamSubtitle: 'نخبة من الأطباء والاستشاريين بخبرة وعناية تليق بك.', teamSoon: 'سيتم إضافة بقية أطباء العيادة قريباً.', contactDoctor: 'احجز استشارة', privacy: 'سياسة الخصوصية', terms: 'الشروط والأحكام', legalNote: '', updated: 'آخر تحديث', skip: 'انتقل إلى المحتوى' },
  en: { nav: 'Our Team', teamTitle: 'Our Medical Team', teamSubtitle: 'Experienced doctors and consultants who care for you with precision and warmth.', teamSoon: 'More of our doctors will be introduced here soon.', contactDoctor: 'Book a consultation', privacy: 'Privacy Policy', terms: 'Terms & Conditions', legalNote: '', updated: 'Last updated', skip: 'Skip to content' },
  tr: { nav: 'Ekibimiz', teamTitle: 'Tıbbi Ekibimiz', teamSubtitle: 'Size titizlik ve sıcaklıkla yaklaşan deneyimli doktor ve konsültanlar.', teamSoon: 'Diğer doktorlarımız yakında burada tanıtılacaktır.', contactDoctor: 'Konsültasyon planlayın', privacy: 'Gizlilik Politikası', terms: 'Kullanım Koşulları', legalNote: '', updated: 'Son güncelleme', skip: 'İçeriğe geç' },
  es: { nav: 'Nuestro equipo', teamTitle: 'Nuestro equipo médico', teamSubtitle: 'Médicos y consultores con experiencia que le atienden con precisión y calidez.', teamSoon: 'Pronto presentaremos aquí a más de nuestros médicos.', contactDoctor: 'Reserve una consulta', privacy: 'Política de privacidad', terms: 'Términos y condiciones', legalNote: 'Este documento legal se muestra en inglés.', updated: 'Última actualización', skip: 'Saltar al contenido' },
  fr: { nav: 'Notre équipe', teamTitle: 'Notre équipe médicale', teamSubtitle: 'Des médecins et consultants expérimentés, à votre écoute avec précision et chaleur.', teamSoon: 'D’autres médecins de la clinique seront présentés ici prochainement.', contactDoctor: 'Réserver une consultation', privacy: 'Politique de confidentialité', terms: 'Conditions générales', legalNote: 'Ce document juridique est affiché en anglais.', updated: 'Dernière mise à jour', skip: 'Aller au contenu' },
  de: { nav: 'Unser Team', teamTitle: 'Unser medizinisches Team', teamSubtitle: 'Erfahrene Ärzte und Berater, die sich mit Präzision und Wärme um Sie kümmern.', teamSoon: 'Weitere Ärzte unserer Klinik stellen wir hier in Kürze vor.', contactDoctor: 'Beratung buchen', privacy: 'Datenschutzerklärung', terms: 'Allgemeine Geschäftsbedingungen', legalNote: 'Dieses rechtliche Dokument wird auf Englisch angezeigt.', updated: 'Zuletzt aktualisiert', skip: 'Zum Inhalt springen' },
  it: { nav: 'Il nostro team', teamTitle: 'Il nostro team medico', teamSubtitle: 'Medici e consulenti esperti che si prendono cura di te con precisione e calore.', teamSoon: 'Presto presenteremo qui altri medici della clinica.', contactDoctor: 'Prenota un consulto', privacy: 'Informativa sulla privacy', terms: 'Termini e condizioni', legalNote: 'Questo documento legale è mostrato in inglese.', updated: 'Ultimo aggiornamento', skip: 'Vai al contenuto' },
  ru: { nav: 'Наша команда', teamTitle: 'Наша медицинская команда', teamSubtitle: 'Опытные врачи и консультанты, которые заботятся о вас с точностью и теплотой.', teamSoon: 'Скоро здесь появятся и другие врачи клиники.', contactDoctor: 'Записаться на консультацию', privacy: 'Политика конфиденциальности', terms: 'Условия использования', legalNote: 'Этот юридический документ отображается на английском языке.', updated: 'Последнее обновление', skip: 'Перейти к содержимому' },
  pl: { nav: 'Nasz zespół', teamTitle: 'Nasz zespół medyczny', teamSubtitle: 'Doświadczeni lekarze i konsultanci, którzy zadbają o Ciebie z precyzją i ciepłem.', teamSoon: 'Wkrótce przedstawimy tu kolejnych lekarzy kliniki.', contactDoctor: 'Umów konsultację', privacy: 'Polityka prywatności', terms: 'Regulamin', legalNote: 'Ten dokument prawny jest wyświetlany po angielsku.', updated: 'Ostatnia aktualizacja', skip: 'Przejdź do treści' },
  deCH: { nav: 'Unser Team', teamTitle: 'Unser medizinisches Team', teamSubtitle: 'Erfahrene Ärzte und Berater, die sich mit Präzision und Wärme um Sie kümmern.', teamSoon: 'Weitere Ärzte unserer Klinik stellen wir hier in Kürze vor.', contactDoctor: 'Beratung buchen', privacy: 'Datenschutzerklärung', terms: 'Allgemeine Geschäftsbedingungen', legalNote: 'Dieses rechtliche Dokument wird auf Englisch angezeigt.', updated: 'Zuletzt aktualisiert', skip: 'Zum Inhalt springen' },
}

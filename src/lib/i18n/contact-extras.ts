import type { LanguageCode } from './types'

/** Extra strings for the contact form (consent, WhatsApp hand-off, booking). */
export interface ContactExtras {
  consent: string // text before the privacy link
  privacyLink: string
  consentError: string
  waSend: string // button: send the same request through WhatsApp
  waAfter: string // note shown after success / error
  bookingFor: string // label: "Consultation request for"
  waIntro: string // WhatsApp message: "Hello Orec Clinic, my name is"
  waService: string // "I am interested in"
  bookCta: string // service page CTA
}

export const CONTACT_EXTRAS: Record<LanguageCode, ContactExtras> = {
  ar: {
    consent: 'أوافق على استخدام بياناتي للتواصل معي بخصوص طلبي، وأطلعت على',
    privacyLink: 'سياسة الخصوصية',
    consentError: 'يرجى الموافقة على سياسة الخصوصية للمتابعة.',
    waSend: 'أرسل الطلب عبر واتساب',
    waAfter: 'يمكنك أيضاً متابعة طلبك مباشرة مع فريقنا عبر واتساب.',
    bookingFor: 'طلب استشارة لخدمة',
    waIntro: 'مرحباً عيادة أوريك، اسمي',
    waService: 'مهتم/ة بخدمة',
    bookCta: 'احجز استشارة لهذه الخدمة',
  },
  en: {
    consent: 'I agree that my details may be used to contact me about my request, and I have read the',
    privacyLink: 'Privacy Policy',
    consentError: 'Please accept the Privacy Policy to continue.',
    waSend: 'Send this request via WhatsApp',
    waAfter: 'You can also continue your request directly with our team on WhatsApp.',
    bookingFor: 'Consultation request for',
    waIntro: 'Hello Orec Clinic, my name is',
    waService: 'I am interested in',
    bookCta: 'Book a consultation for this service',
  },
  tr: {
    consent: 'Bilgilerimin talebim hakkında benimle iletişime geçmek için kullanılmasını kabul ediyorum ve',
    privacyLink: 'Gizlilik Politikası',
    consentError: 'Devam etmek için lütfen Gizlilik Politikası’nı kabul edin.',
    waSend: 'Bu talebi WhatsApp ile gönder',
    waAfter: 'Talebinize ekibimizle doğrudan WhatsApp üzerinden de devam edebilirsiniz.',
    bookingFor: 'Konsültasyon talebi:',
    waIntro: 'Merhaba Orec Clinic, adım',
    waService: 'İlgilendiğim hizmet',
    bookCta: 'Bu hizmet için konsültasyon planlayın',
  },
  es: {
    consent: 'Acepto que mis datos se usen para contactarme sobre mi solicitud y he leído la',
    privacyLink: 'Política de privacidad',
    consentError: 'Acepte la Política de privacidad para continuar.',
    waSend: 'Enviar esta solicitud por WhatsApp',
    waAfter: 'También puede continuar su solicitud directamente con nuestro equipo por WhatsApp.',
    bookingFor: 'Solicitud de consulta para',
    waIntro: 'Hola Orec Clinic, me llamo',
    waService: 'Me interesa',
    bookCta: 'Reserve una consulta para este servicio',
  },
  fr: {
    consent: 'J’accepte que mes données soient utilisées pour me contacter au sujet de ma demande et j’ai lu la',
    privacyLink: 'Politique de confidentialité',
    consentError: 'Veuillez accepter la Politique de confidentialité pour continuer.',
    waSend: 'Envoyer cette demande via WhatsApp',
    waAfter: 'Vous pouvez aussi poursuivre votre demande directement avec notre équipe sur WhatsApp.',
    bookingFor: 'Demande de consultation pour',
    waIntro: 'Bonjour Orec Clinic, je m’appelle',
    waService: 'Je suis intéressé(e) par',
    bookCta: 'Réserver une consultation pour ce service',
  },
  de: {
    consent: 'Ich stimme zu, dass meine Angaben zur Kontaktaufnahme bezüglich meiner Anfrage verwendet werden, und habe die',
    privacyLink: 'Datenschutzerklärung',
    consentError: 'Bitte akzeptieren Sie die Datenschutzerklärung, um fortzufahren.',
    waSend: 'Anfrage über WhatsApp senden',
    waAfter: 'Sie können Ihre Anfrage auch direkt mit unserem Team über WhatsApp fortsetzen.',
    bookingFor: 'Beratungsanfrage für',
    waIntro: 'Guten Tag Orec Clinic, mein Name ist',
    waService: 'Ich interessiere mich für',
    bookCta: 'Beratung für diese Leistung buchen',
  },
  it: {
    consent: 'Accetto che i miei dati siano usati per contattarmi in merito alla mia richiesta e ho letto l’',
    privacyLink: 'Informativa sulla privacy',
    consentError: 'Accetta l’Informativa sulla privacy per continuare.',
    waSend: 'Invia questa richiesta su WhatsApp',
    waAfter: 'Puoi anche proseguire la richiesta direttamente con il nostro team su WhatsApp.',
    bookingFor: 'Richiesta di consulto per',
    waIntro: 'Buongiorno Orec Clinic, mi chiamo',
    waService: 'Sono interessato/a a',
    bookCta: 'Prenota un consulto per questo servizio',
  },
  ru: {
    consent: 'Я согласен(на) на использование моих данных для связи по моему запросу и ознакомлен(а) с',
    privacyLink: 'Политикой конфиденциальности',
    consentError: 'Для продолжения примите Политику конфиденциальности.',
    waSend: 'Отправить запрос через WhatsApp',
    waAfter: 'Вы также можете продолжить обращение напрямую с нашей командой в WhatsApp.',
    bookingFor: 'Запрос консультации по услуге',
    waIntro: 'Здравствуйте, Orec Clinic, меня зовут',
    waService: 'Меня интересует',
    bookCta: 'Записаться на консультацию по этой услуге',
  },
  pl: {
    consent: 'Zgadzam się na wykorzystanie moich danych do kontaktu w sprawie zapytania i zapoznałem/am się z',
    privacyLink: 'Polityką prywatności',
    consentError: 'Aby kontynuować, zaakceptuj Politykę prywatności.',
    waSend: 'Wyślij zapytanie przez WhatsApp',
    waAfter: 'Możesz też kontynuować zapytanie bezpośrednio z naszym zespołem na WhatsApp.',
    bookingFor: 'Zapytanie o konsultację:',
    waIntro: 'Dzień dobry Orec Clinic, nazywam się',
    waService: 'Interesuje mnie',
    bookCta: 'Umów konsultację w tej sprawie',
  },
  deCH: {
    consent: 'Ich stimme zu, dass meine Angaben zur Kontaktaufnahme bezüglich meiner Anfrage verwendet werden, und habe die',
    privacyLink: 'Datenschutzerklärung',
    consentError: 'Bitte akzeptieren Sie die Datenschutzerklärung, um fortzufahren.',
    waSend: 'Anfrage über WhatsApp senden',
    waAfter: 'Sie können Ihre Anfrage auch direkt mit unserem Team über WhatsApp fortsetzen.',
    bookingFor: 'Beratungsanfrage für',
    waIntro: 'Guten Tag Orec Clinic, mein Name ist',
    waService: 'Ich interessiere mich für',
    bookCta: 'Beratung für diese Leistung buchen',
  },
}

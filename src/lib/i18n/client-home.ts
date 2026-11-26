import type { LanguageCode } from './types'

/** Home-page blocks added from the client's edit file. Arabic follows the client's wording; other languages are translations. */
export interface ClientHome {
  offerEyebrow: string
  offerTitle: string
  offerItems: { title: string; text?: string }[]
  cardPay: string
  resultsEyebrow: string
  resultsTitle: string
  resultsNote: string
  licenseButton: string
  licenseDialogTitle: string
  licenseText: string
  partnersTitle: string
  wheelButton: string
  wheelTitle: string
  wheelSub: string
  wheelName: string
  wheelPhone: string
  wheelCountry: string
  wheelSpin: string
  wheelSpinning: string
  wheelCongrats: string
  wheelOnce: string
  wheelSend: string
  wheelError: string
  wheelInvalid: string
  wheelWaMsg: (name: string, phone: string, prize: string) => string
  prizes: string[]
}

const ar: ClientHome = {
  offerEyebrow: 'WHAT WE OFFER',
  offerTitle: 'ماذا نقدم للمريض',
  offerItems: [
    { title: 'الاستقبال من المطار', text: 'بأفضل وأحدث سيارات VITO VIP.' },
    { title: 'المواصلات الداخلية', text: 'بمواعيد دقيقة وفي أي مكان في إسطنبول.' },
    { title: 'الترجمة الفورية', text: 'لأكثر لغات العالم تحدثاً.' },
    { title: 'تقرير طبي كامل', text: 'شامل لكامل العلاج، ومترجم لأكثر اللغات المحكية.' },
    { title: 'الأدوية الأساسية', text: 'كاملة للعملية العلاجية دون أي نقص.' },
    { title: 'التسجيل في نظام وزارة الصحة', text: 'لتثبيت العلاج لدى سفارة المريض.' },
    { title: 'ضمان موثّق', text: 'فعلي وحقيقي.' },
  ],
  cardPay: 'الدفع بالبطاقة متاح',
  resultsEyebrow: 'REAL RESULTS',
  resultsTitle: 'نتائج تتحدث عن نفسها',
  resultsNote: 'النتائج تختلف من مريض لآخر بحسب الحالة والتزامه بتعليمات الطبيب.',
  licenseButton: 'التراخيص والاعتماد الرسمي',
  licenseDialogTitle: 'ترخيص ورقابة رسمية',
  licenseText:
    'في Orec Clinic نضع سلامة مرضانا وجودة الرعاية الصحية في مقدمة أولوياتنا. نلتزم بالعمل وفق أعلى المعايير الطبية والقانونية المعتمدة دولياً وداخل الجمهورية التركية، حيث تخضع جميع منشآتنا وإجراءاتنا العلاجية لإشراف ورقابة الجهات الصحية الرسمية لضمان تجربة طبية آمنة وموثوقة.',
  partnersTitle: 'شركاؤنا واعتماداتنا',
  wheelButton: 'اربح معنا',
  wheelTitle: 'اربح معنا — لمرة واحدة',
  wheelSub: 'أدخل اسمك ورقمك مع رمز الدولة ثم أدر العجلة واربح هديتك.',
  wheelName: 'الاسم',
  wheelPhone: 'رقم الهاتف (واتساب)',
  wheelCountry: 'رمز الدولة',
  wheelSpin: 'أدر العجلة',
  wheelSpinning: 'جارٍ التدوير…',
  wheelCongrats: 'مبروك! ربحت:',
  wheelOnce: 'هذا الرقم شارك سابقاً، وهذه جائزته:',
  wheelSend: 'أرسل جائزتي عبر واتساب',
  wheelError: 'تعذّر إتمام العملية، حاول مرة أخرى بعد قليل.',
  wheelInvalid: 'يرجى إدخال اسم ورقم صحيحين.',
  wheelWaMsg: (n, p, z) => `مرحباً، أنا ${n} (${p}) وقد ربحت في عجلة «اربح معنا»: ${z}`,
  prizes: ['استشارة مجانية', 'خصم 50 يورو', 'زرعة أسنان مجانية', 'فحص أسنان مجاني', 'خصم 20% عمليات السمنة', 'علاج خاص بعد زراعة الشعر', 'خصم 20% عمليات زراعة الشعر', 'خصم 10% ابتسامة هوليود'],
}

const en: ClientHome = {
  offerEyebrow: 'WHAT WE OFFER',
  offerTitle: 'What we offer our patients',
  offerItems: [
    { title: 'Airport pick-up', text: 'In our latest VITO VIP vehicles.' },
    { title: 'Local transport', text: 'On exact schedules, anywhere in Istanbul.' },
    { title: 'Instant interpreting', text: 'In the world’s most spoken languages.' },
    { title: 'Complete medical report', text: 'Covering the whole treatment, translated into the most spoken languages.' },
    { title: 'Essential medication', text: 'Complete for the whole treatment, with nothing missing.' },
    { title: 'Ministry of Health registration', text: 'To record the treatment for the patient’s embassy.' },
    { title: 'Documented guarantee', text: 'Real and binding.' },
  ],
  cardPay: 'Card payment accepted',
  resultsEyebrow: 'REAL RESULTS',
  resultsTitle: 'Results that speak for themselves',
  resultsNote: 'Results vary from patient to patient depending on the case and on following the doctor’s instructions.',
  licenseButton: 'Licences & official accreditation',
  licenseDialogTitle: 'Official licensing & supervision',
  licenseText:
    'At Orec Clinic we put our patients’ safety and the quality of healthcare first. We work to the highest medical and legal standards recognised internationally and in the Republic of Türkiye; all our facilities and treatment procedures are supervised and monitored by the official health authorities, to ensure a safe and trustworthy medical experience.',
  partnersTitle: 'Our partners & accreditations',
  wheelButton: 'Win with us',
  wheelTitle: 'Win with us — one spin only',
  wheelSub: 'Enter your name and number with the country code, then spin the wheel and win your gift.',
  wheelName: 'Name',
  wheelPhone: 'Phone number (WhatsApp)',
  wheelCountry: 'Country code',
  wheelSpin: 'Spin the wheel',
  wheelSpinning: 'Spinning…',
  wheelCongrats: 'Congratulations! You won:',
  wheelOnce: 'This number has already played. Its prize is:',
  wheelSend: 'Send my prize on WhatsApp',
  wheelError: 'Something went wrong, please try again shortly.',
  wheelInvalid: 'Please enter a valid name and number.',
  wheelWaMsg: (n, p, z) => `Hello, I am ${n} (${p}) and I won on the “Win with us” wheel: ${z}`,
  prizes: ['Free consultation', '€50 discount', 'Free dental implant', 'Free dental check-up', '20% off bariatric surgery', 'Special treatment after hair transplant', '20% off hair transplant', '10% off Hollywood Smile'],
}

/** Languages without their own entry fall back to English until their translation is added. */
export const CLIENT_HOME: Partial<Record<LanguageCode, ClientHome>> & { ar: ClientHome; en: ClientHome } = { ar, en }

export function clientHome(code: LanguageCode): ClientHome {
  return CLIENT_HOME[code] ?? en
}

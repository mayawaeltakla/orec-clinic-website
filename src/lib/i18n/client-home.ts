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


// ---- translations of the client's edit-file blocks ----
const tr: ClientHome = {
  offerEyebrow: "SUNDUKLARIMIZ",
  offerTitle: "Hastalarımıza neler sunuyoruz",
  offerItems: [{"title": "Havalimanından karşılama", "text": "En yeni VITO VIP araçlarıyla."}, {"title": "Şehir içi ulaşım", "text": "Tam zamanında, İstanbul'un her yerinde."}, {"title": "Anında tercümanlık", "text": "Dünyada en çok konuşulan dillerde."}, {"title": "Eksiksiz tıbbi rapor", "text": "Tedavinin tamamını kapsar ve en çok konuşulan dillere çevrilir."}, {"title": "Temel ilaçlar", "text": "Tedavi süreci için eksiksiz."}, {"title": "Sağlık Bakanlığı sistemine kayıt", "text": "Tedavinin hastanın büyükelçiliğinde belgelenmesi için."}, {"title": "Belgeli garanti", "text": "Gerçek ve bağlayıcı."}],
  cardPay: "Kartla ödeme mümkündür",
  resultsEyebrow: "GERÇEK SONUÇLAR",
  resultsTitle: "Kendini anlatan sonuçlar",
  resultsNote: "Sonuçlar, vakaya ve hekimin talimatlarına uyuma göre hastadan hastaya değişir.",
  licenseButton: "Ruhsatlar ve resmi akreditasyon",
  licenseDialogTitle: "Resmi ruhsat ve denetim",
  licenseText: "Orec Clinic olarak hastalarımızın güvenliğini ve sağlık hizmetinin kalitesini her şeyin önünde tutuyoruz. Uluslararası alanda ve Türkiye Cumhuriyeti'nde kabul gören en yüksek tıbbi ve yasal standartlara uygun çalışıyoruz; tüm tesislerimiz ve tedavi işlemlerimiz, güvenli ve güvenilir bir tıbbi deneyim sağlamak üzere resmi sağlık makamlarının gözetimi ve denetimine tabidir.",
  partnersTitle: "Ortaklarımız ve akreditasyonlarımız",
  wheelButton: "Bizimle kazanın",
  wheelTitle: "Bizimle kazanın: tek bir çevirme hakkı",
  wheelSub: "Adınızı ve numaranızı ülke koduyla girin, çarkı çevirin ve hediyenizi kazanın.",
  wheelName: "Ad",
  wheelPhone: "Telefon numarası (WhatsApp)",
  wheelCountry: "Ülke kodu",
  wheelSpin: "Çarkı çevir",
  wheelSpinning: "Dönüyor…",
  wheelCongrats: "Tebrikler! Kazandığınız ödül:",
  wheelOnce: "Bu numara daha önce katıldı. Ödülü:",
  wheelSend: "Ödülümü WhatsApp'tan gönder",
  wheelError: "İşlem tamamlanamadı, lütfen kısa bir süre sonra tekrar deneyin.",
  wheelInvalid: "Lütfen geçerli bir ad ve numara girin.",
  prizes: ["Ücretsiz danışmanlık", "50 euro indirim", "Ücretsiz diş implantı", "Ücretsiz diş muayenesi", "Obezite ameliyatlarında %20 indirim", "Saç ekimi sonrası özel tedavi", "Saç ekiminde %20 indirim", "Hollywood gülüşünde %10 indirim"],
  wheelWaMsg: (n, p, z) => "Merhaba, ben {n} ({p}); “Bizimle kazanın” çarkında şunu kazandım: {z}".replace('{n}', n).replace('{p}', p).replace('{z}', z),
}

const es: ClientHome = {
  offerEyebrow: "LO QUE OFRECEMOS",
  offerTitle: "Lo que ofrecemos a nuestros pacientes",
  offerItems: [{"title": "Recogida en el aeropuerto", "text": "En nuestros vehículos VITO VIP más recientes."}, {"title": "Transporte local", "text": "Con horarios puntuales, a cualquier lugar de Estambul."}, {"title": "Interpretación inmediata", "text": "En los idiomas más hablados del mundo."}, {"title": "Informe médico completo", "text": "Abarca todo el tratamiento y está traducido a los idiomas más hablados."}, {"title": "Medicación esencial", "text": "Completa para todo el tratamiento, sin que falte nada."}, {"title": "Registro en el sistema del Ministerio de Sanidad", "text": "Para dejar constancia del tratamiento ante la embajada del paciente."}, {"title": "Garantía documentada", "text": "Real y vinculante."}],
  cardPay: "Se acepta pago con tarjeta",
  resultsEyebrow: "RESULTADOS REALES",
  resultsTitle: "Resultados que hablan por sí solos",
  resultsNote: "Los resultados varían de un paciente a otro según el caso y el cumplimiento de las indicaciones del médico.",
  licenseButton: "Licencias y acreditación oficial",
  licenseDialogTitle: "Licencia y supervisión oficiales",
  licenseText: "En Orec Clinic ponemos la seguridad de nuestros pacientes y la calidad de la atención sanitaria en primer lugar. Trabajamos conforme a los más altos estándares médicos y legales reconocidos internacionalmente y en la República de Turquía; todas nuestras instalaciones y procedimientos de tratamiento están bajo la supervisión y el control de las autoridades sanitarias oficiales, para garantizar una experiencia médica segura y fiable.",
  partnersTitle: "Nuestros socios y acreditaciones",
  wheelButton: "Gana con nosotros",
  wheelTitle: "Gana con nosotros: una sola tirada",
  wheelSub: "Introduce tu nombre y tu número con el prefijo del país, gira la ruleta y gana tu regalo.",
  wheelName: "Nombre",
  wheelPhone: "Número de teléfono (WhatsApp)",
  wheelCountry: "Prefijo del país",
  wheelSpin: "Girar la ruleta",
  wheelSpinning: "Girando…",
  wheelCongrats: "¡Enhorabuena! Has ganado:",
  wheelOnce: "Este número ya ha participado. Su premio es:",
  wheelSend: "Enviar mi premio por WhatsApp",
  wheelError: "No se pudo completar la operación, inténtalo de nuevo en unos instantes.",
  wheelInvalid: "Introduce un nombre y un número válidos.",
  prizes: ["Consulta gratuita", "Descuento de 50 €", "Implante dental gratuito", "Revisión dental gratuita", "20 % de descuento en cirugía bariátrica", "Tratamiento especial tras el trasplante capilar", "20 % de descuento en trasplante capilar", "10 % de descuento en la sonrisa de Hollywood"],
  wheelWaMsg: (n, p, z) => "Hola, soy {n} ({p}) y he ganado en la ruleta «Gana con nosotros»: {z}".replace('{n}', n).replace('{p}', p).replace('{z}', z),
}

const fr: ClientHome = {
  offerEyebrow: "CE QUE NOUS PROPOSONS",
  offerTitle: "Ce que nous offrons à nos patients",
  offerItems: [{"title": "Accueil à l'aéroport", "text": "Dans nos véhicules VITO VIP les plus récents."}, {"title": "Transport local", "text": "À des horaires précis, partout à Istanbul."}, {"title": "Interprétariat immédiat", "text": "Dans les langues les plus parlées au monde."}, {"title": "Rapport médical complet", "text": "Couvrant l'ensemble du traitement, traduit dans les langues les plus parlées."}, {"title": "Médicaments essentiels", "text": "Complets pour l'ensemble du traitement, sans rien manquer."}, {"title": "Enregistrement auprès du ministère de la Santé", "text": "Pour consigner le traitement auprès de l'ambassade du patient."}, {"title": "Garantie documentée", "text": "Réelle et contractuelle."}],
  cardPay: "Paiement par carte accepté",
  resultsEyebrow: "RÉSULTATS RÉELS",
  resultsTitle: "Des résultats qui parlent d'eux-mêmes",
  resultsNote: "Les résultats varient d'un patient à l'autre selon le cas et le respect des consignes du médecin.",
  licenseButton: "Autorisations et accréditations officielles",
  licenseDialogTitle: "Autorisation et contrôle officiels",
  licenseText: "Chez Orec Clinic, nous plaçons la sécurité de nos patients et la qualité des soins en tête de nos priorités. Nous nous engageons à travailler selon les normes médicales et juridiques les plus élevées reconnues à l'échelle internationale et en République de Türkiye ; toutes nos installations et nos procédures de traitement sont placées sous la supervision et le contrôle des autorités sanitaires officielles, afin de garantir une expérience médicale sûre et fiable.",
  partnersTitle: "Nos partenaires et accréditations",
  wheelButton: "Gagnez avec nous",
  wheelTitle: "Gagnez avec nous — un seul tour",
  wheelSub: "Saisissez votre nom et votre numéro avec l'indicatif du pays, puis faites tourner la roue et gagnez votre cadeau.",
  wheelName: "Nom",
  wheelPhone: "Numéro de téléphone (WhatsApp)",
  wheelCountry: "Indicatif du pays",
  wheelSpin: "Faire tourner la roue",
  wheelSpinning: "La roue tourne…",
  wheelCongrats: "Félicitations ! Vous avez gagné :",
  wheelOnce: "Ce numéro a déjà participé. Son lot est :",
  wheelSend: "Envoyer mon lot sur WhatsApp",
  wheelError: "L'opération n'a pas pu aboutir, veuillez réessayer dans un instant.",
  wheelInvalid: "Veuillez saisir un nom et un numéro valides.",
  prizes: ["Consultation gratuite", "Réduction de 50 €", "Implant dentaire gratuit", "Bilan dentaire gratuit", "20 % de réduction sur la chirurgie de l'obésité", "Soin spécial après une greffe de cheveux", "20 % de réduction sur la greffe de cheveux", "10 % de réduction sur le Hollywood Smile"],
  wheelWaMsg: (n, p, z) => "Bonjour, je suis {n} ({p}) et j'ai gagné à la roue « Gagnez avec nous » : {z}".replace('{n}', n).replace('{p}', p).replace('{z}', z),
}

const de: ClientHome = {
  offerEyebrow: "WHAT WE OFFER",
  offerTitle: "Was wir unseren Patienten bieten",
  offerItems: [{"title": "Abholung vom Flughafen", "text": "In unseren neuesten VITO VIP Fahrzeugen."}, {"title": "Transfers vor Ort", "text": "Pünktlich nach Zeitplan und überall in Istanbul."}, {"title": "Sofortiges Dolmetschen", "text": "In den meistgesprochenen Sprachen der Welt."}, {"title": "Vollständiger medizinischer Bericht", "text": "Für die gesamte Behandlung, übersetzt in die meistgesprochenen Sprachen."}, {"title": "Grundlegende Medikamente", "text": "Vollständig für die gesamte Behandlung, ohne dass etwas fehlt."}, {"title": "Registrierung im System des Gesundheitsministeriums", "text": "Um die Behandlung gegenüber der Botschaft des Patienten zu dokumentieren."}, {"title": "Dokumentierte Garantie", "text": "Tatsächlich und verbindlich."}],
  cardPay: "Kartenzahlung möglich",
  resultsEyebrow: "REAL RESULTS",
  resultsTitle: "Ergebnisse, die für sich sprechen",
  resultsNote: "Die Ergebnisse unterscheiden sich von Patient zu Patient, je nach Fall und je nachdem, ob die Anweisungen des Arztes befolgt werden.",
  licenseButton: "Lizenzen und offizielle Akkreditierung",
  licenseDialogTitle: "Offizielle Lizenzierung und Aufsicht",
  licenseText: "In der Orec Clinic stellen wir die Sicherheit unserer Patienten und die Qualität der medizinischen Versorgung an erste Stelle. Wir arbeiten nach den höchsten medizinischen und rechtlichen Standards, die international und in der Republik Türkei anerkannt sind; alle unsere Einrichtungen und Behandlungsverfahren unterliegen der Aufsicht und Kontrolle der offiziellen Gesundheitsbehörden, um eine sichere und vertrauenswürdige medizinische Erfahrung zu gewährleisten.",
  partnersTitle: "Unsere Partner und Akkreditierungen",
  wheelButton: "Gewinnen Sie mit uns",
  wheelTitle: "Gewinnen Sie mit uns – nur einmal",
  wheelSub: "Geben Sie Ihren Namen und Ihre Nummer mit Ländervorwahl ein, drehen Sie dann das Rad und gewinnen Sie Ihr Geschenk.",
  wheelName: "Name",
  wheelPhone: "Telefonnummer (WhatsApp)",
  wheelCountry: "Ländervorwahl",
  wheelSpin: "Rad drehen",
  wheelSpinning: "Das Rad dreht sich…",
  wheelCongrats: "Herzlichen Glückwunsch! Sie haben gewonnen:",
  wheelOnce: "Diese Nummer hat bereits teilgenommen. Ihr Preis ist:",
  wheelSend: "Meinen Preis per WhatsApp senden",
  wheelError: "Der Vorgang konnte nicht abgeschlossen werden. Bitte versuchen Sie es in Kürze erneut.",
  wheelInvalid: "Bitte geben Sie einen gültigen Namen und eine gültige Nummer ein.",
  prizes: ["Kostenlose Beratung", "50 € Rabatt", "Kostenloses Zahnimplantat", "Kostenlose Zahnuntersuchung", "20 % Rabatt auf Adipositas-Operationen", "Spezielle Behandlung nach der Haartransplantation", "20 % Rabatt auf Haartransplantationen", "10 % Rabatt auf das Hollywood-Lächeln"],
  wheelWaMsg: (n, p, z) => "Guten Tag, ich bin {n} ({p}) und habe beim Glücksrad „Gewinnen Sie mit uns“ gewonnen: {z}".replace('{n}', n).replace('{p}', p).replace('{z}', z),
}

const it: ClientHome = {
  offerEyebrow: "COSA OFFRIAMO",
  offerTitle: "Cosa offriamo ai nostri pazienti",
  offerItems: [{"title": "Accoglienza in aeroporto", "text": "Con i nostri veicoli VITO VIP più recenti."}, {"title": "Trasporti locali", "text": "Con orari precisi, in qualsiasi punto di Istanbul."}, {"title": "Interpretariato immediato", "text": "Nelle lingue più parlate al mondo."}, {"title": "Referto medico completo", "text": "Relativo all'intero trattamento, tradotto nelle lingue più parlate."}, {"title": "Farmaci essenziali", "text": "Completi per l'intero trattamento, senza alcuna mancanza."}, {"title": "Registrazione nel sistema del Ministero della Salute", "text": "Per registrare il trattamento presso l'ambasciata del paziente."}, {"title": "Garanzia documentata", "text": "Reale e vincolante."}],
  cardPay: "Pagamento con carta disponibile",
  resultsEyebrow: "RISULTATI REALI",
  resultsTitle: "Risultati che parlano da soli",
  resultsNote: "I risultati variano da paziente a paziente in base al caso e al rispetto delle indicazioni del medico.",
  licenseButton: "Licenze e accreditamenti ufficiali",
  licenseDialogTitle: "Autorizzazione e controllo ufficiali",
  licenseText: "In Orec Clinic mettiamo al primo posto la sicurezza dei nostri pazienti e la qualità dell'assistenza sanitaria. Ci impegniamo a operare secondo i più elevati standard medici e giuridici riconosciuti a livello internazionale e nella Repubblica di Türkiye; tutte le nostre strutture e le nostre procedure di trattamento sono sottoposte alla supervisione e al controllo delle autorità sanitarie ufficiali, per garantire un'esperienza medica sicura e affidabile.",
  partnersTitle: "I nostri partner e accreditamenti",
  wheelButton: "Vinca con noi",
  wheelTitle: "Vinca con noi — un solo giro",
  wheelSub: "Inserisca il Suo nome e il Suo numero con il prefisso internazionale, poi giri la ruota e vinca il Suo regalo.",
  wheelName: "Nome",
  wheelPhone: "Numero di telefono (WhatsApp)",
  wheelCountry: "Prefisso internazionale",
  wheelSpin: "Giri la ruota",
  wheelSpinning: "La ruota gira…",
  wheelCongrats: "Congratulazioni! Ha vinto:",
  wheelOnce: "Questo numero ha già partecipato. Il suo premio è:",
  wheelSend: "Invii il mio premio su WhatsApp",
  wheelError: "Non è stato possibile completare l'operazione, riprovi tra poco.",
  wheelInvalid: "Inserisca un nome e un numero validi.",
  prizes: ["Consulenza gratuita", "Sconto di 50 €", "Impianto dentale gratuito", "Controllo dentale gratuito", "20% di sconto sugli interventi di chirurgia bariatrica", "Trattamento speciale dopo il trapianto di capelli", "20% di sconto sul trapianto di capelli", "10% di sconto sull'Hollywood Smile"],
  wheelWaMsg: (n, p, z) => "Buongiorno, sono {n} ({p}) e ho vinto alla ruota «Vinca con noi»: {z}".replace('{n}', n).replace('{p}', p).replace('{z}', z),
}

const ru: ClientHome = {
  offerEyebrow: "WHAT WE OFFER",
  offerTitle: "Что мы предлагаем пациентам",
  offerItems: [{"title": "Встреча в аэропорту", "text": "На новейших автомобилях VITO VIP."}, {"title": "Трансферы по городу", "text": "Точно по расписанию и в любое место Стамбула."}, {"title": "Устный перевод", "text": "На самых распространённых языках мира."}, {"title": "Полное медицинское заключение", "text": "Охватывает всё лечение и переведено на самые распространённые языки."}, {"title": "Основные лекарства", "text": "В полном объёме для всего курса лечения, без каких-либо нехваток."}, {"title": "Регистрация в системе Министерства здравоохранения", "text": "Для подтверждения лечения в посольстве пациента."}, {"title": "Документально подтверждённая гарантия", "text": "Реальная и действительная."}],
  cardPay: "Доступна оплата картой",
  resultsEyebrow: "REAL RESULTS",
  resultsTitle: "Результаты, которые говорят сами за себя",
  resultsNote: "Результаты отличаются от пациента к пациенту в зависимости от случая и от соблюдения указаний врача.",
  licenseButton: "Лицензии и официальная аккредитация",
  licenseDialogTitle: "Официальное лицензирование и контроль",
  licenseText: "В Orec Clinic мы ставим безопасность наших пациентов и качество медицинской помощи на первое место. Мы работаем в соответствии с самыми высокими медицинскими и правовыми стандартами, признанными на международном уровне и в Турецкой Республике: все наши учреждения и лечебные процедуры подлежат надзору и контролю официальных органов здравоохранения, что обеспечивает безопасный и надёжный медицинский опыт.",
  partnersTitle: "Наши партнёры и аккредитации",
  wheelButton: "Выиграйте вместе с нами",
  wheelTitle: "Выиграйте вместе с нами — один раз",
  wheelSub: "Введите своё имя и номер с кодом страны, затем покрутите колесо и выиграйте свой подарок.",
  wheelName: "Имя",
  wheelPhone: "Номер телефона (WhatsApp)",
  wheelCountry: "Код страны",
  wheelSpin: "Крутить колесо",
  wheelSpinning: "Колесо вращается…",
  wheelCongrats: "Поздравляем! Вы выиграли:",
  wheelOnce: "Этот номер уже участвовал. Его приз:",
  wheelSend: "Отправить мой приз в WhatsApp",
  wheelError: "Не удалось завершить операцию, пожалуйста, повторите попытку чуть позже.",
  wheelInvalid: "Пожалуйста, введите корректные имя и номер.",
  prizes: ["Бесплатная консультация", "Скидка 50 евро", "Бесплатный зубной имплант", "Бесплатный осмотр зубов", "Скидка 20% на операции по снижению веса", "Специальное лечение после пересадки волос", "Скидка 20% на пересадку волос", "Скидка 10% на голливудскую улыбку"],
  wheelWaMsg: (n, p, z) => "Здравствуйте, я {n} ({p}), и я выиграл(а) на колесе «Выиграйте вместе с нами»: {z}".replace('{n}', n).replace('{p}', p).replace('{z}', z),
}

const pl: ClientHome = {
  offerEyebrow: "WHAT WE OFFER",
  offerTitle: "Co oferujemy naszym pacjentom",
  offerItems: [{"title": "Odbiór z lotniska", "text": "Naszymi najnowszymi samochodami VITO VIP."}, {"title": "Transport na miejscu", "text": "Punktualnie, według harmonogramu, w dowolne miejsce w Stambule."}, {"title": "Tłumaczenie na bieżąco", "text": "W najpowszechniej używanych językach świata."}, {"title": "Pełna dokumentacja medyczna", "text": "Obejmująca całe leczenie, przetłumaczona na najpowszechniej używane języki."}, {"title": "Podstawowe leki", "text": "W pełnym zakresie na czas leczenia, bez żadnych braków."}, {"title": "Rejestracja w systemie Ministerstwa Zdrowia", "text": "Aby udokumentować leczenie wobec ambasady pacjenta."}, {"title": "Udokumentowana gwarancja", "text": "Rzeczywista i wiążąca."}],
  cardPay: "Możliwość płatności kartą",
  resultsEyebrow: "REAL RESULTS",
  resultsTitle: "Rezultaty, które mówią same za siebie",
  resultsNote: "Rezultaty różnią się w zależności od pacjenta, jego przypadku i stosowania się do zaleceń lekarza.",
  licenseButton: "Licencje i oficjalne akredytacje",
  licenseDialogTitle: "Oficjalne licencje i nadzór",
  licenseText: "W Orec Clinic bezpieczeństwo naszych pacjentów i jakość opieki zdrowotnej stawiamy na pierwszym miejscu. Pracujemy zgodnie z najwyższymi standardami medycznymi i prawnymi uznawanymi na arenie międzynarodowej oraz w Republice Turcji; wszystkie nasze placówki i procedury lecznicze podlegają nadzorowi i kontroli oficjalnych organów ochrony zdrowia, aby zapewnić bezpieczne i godne zaufania leczenie.",
  partnersTitle: "Nasi partnerzy i akredytacje",
  wheelButton: "Wygraj z nami",
  wheelTitle: "Wygraj z nami – tylko jeden raz",
  wheelSub: "Prosimy wpisać imię i numer telefonu z numerem kierunkowym kraju, a następnie zakręcić kołem i wygrać upominek.",
  wheelName: "Imię",
  wheelPhone: "Numer telefonu (WhatsApp)",
  wheelCountry: "Numer kierunkowy kraju",
  wheelSpin: "Zakręć kołem",
  wheelSpinning: "Koło się kręci…",
  wheelCongrats: "Gratulacje! Wygrywają Państwo:",
  wheelOnce: "Ten numer brał już udział. Nagroda to:",
  wheelSend: "Wyślij moją nagrodę przez WhatsApp",
  wheelError: "Nie udało się zakończyć operacji, prosimy spróbować ponownie za chwilę.",
  wheelInvalid: "Prosimy wpisać prawidłowe imię i numer.",
  prizes: ["Bezpłatna konsultacja", "Rabat 50 €", "Bezpłatny implant zęba", "Bezpłatne badanie stomatologiczne", "20% rabatu na operacje bariatryczne", "Specjalne leczenie po przeszczepie włosów", "20% rabatu na przeszczep włosów", "10% rabatu na Hollywood Smile"],
  wheelWaMsg: (n, p, z) => "Dzień dobry, nazywam się {n} ({p}) i wygrałem/am w kole „Wygraj z nami”: {z}".replace('{n}', n).replace('{p}', p).replace('{z}', z),
}

/** Languages without their own entry fall back to English until their translation is added. */
export const CLIENT_HOME: Record<Exclude<LanguageCode, 'deCH'>, ClientHome> = { ar, en, tr, es, fr, de, it, ru, pl }

const swissify = (s: string) => s.replace(/ß/g, 'ss')
const deCH: ClientHome = {
  ...de,
  ...Object.fromEntries(Object.entries(de).filter(([, v]) => typeof v === 'string').map(([k, v]) => [k, swissify(v as string)])),
  offerItems: de.offerItems.map((i) => ({ title: swissify(i.title), text: i.text && swissify(i.text) })),
  prizes: de.prizes.map(swissify),
  wheelWaMsg: (n, p, z) => swissify(de.wheelWaMsg(n, p, z)),
}

export function clientHome(code: LanguageCode): ClientHome {
  return code === 'deCH' ? deCH : CLIENT_HOME[code]
}

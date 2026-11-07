import type { LanguageCode } from './types'

export interface FaqContent {
  nav: string
  eyebrow: string
  title: string
  intro: string
  items: { q: string; a: string }[]
  ctaTitle: string
  ctaText: string
}

/**
 * FAQ — every answer is grounded in the clinic's own material (durations, recovery stages,
 * how a consultation works). No prices, statistics or guarantees are stated.
 * Order is identical in all languages (the FAQPage JSON-LD relies on it).
 */
const ar: FaqContent = {
  nav: 'الأسئلة الشائعة',
  eyebrow: 'FAQ',
  title: 'الأسئلة الشائعة',
  intro: 'إجابات عامة عن أكثر ما يسألنا عنه مرضانا. يختلف كل علاج من شخص لآخر، ويحدد الطبيب الخطة المناسبة لك بعد تقييم حالتك.',
  items: [
    { q: 'ما هي الأقسام الطبية في عيادة أوريك؟', a: 'تضم عيادة أوريك أربعة أقسام طبية متخصصة تحت سقف واحد: زراعة الأسنان وابتسامة هوليود، والجراحات التجميلية، وزراعة الشعر، وجراحة السمنة. ويمكنك الاطلاع على الخدمات الفرعية لكل قسم من صفحة الخدمات.' },
    { q: 'أين تقع العيادة وبأي لغات تتحدثون؟', a: 'تقع العيادة في قلب إسطنبول وتأسست عام 2015، ونتحدث معك بأكثر من 10 لغات لتتواصل مع فريقنا براحة تامة.' },
    { q: 'كيف أحجز استشارة؟', a: 'يمكنك مراسلتنا عبر واتساب أو الاتصال بنا أو تعبئة نموذج التواصل في الموقع، مع وصف حالتك والخدمة التي تهمك، وسيجيب فريقنا الاستشاري على استفساراتك.' },
    { q: 'هل معلوماتي وحالتي تبقى سرية؟', a: 'نعم، تُناقَش التوقعات والنتائج بخصوصية وسرية تامة.' },
    { q: 'هل كل إجراء مناسب لكل شخص؟', a: 'لا. نبدأ دائماً بتقييم حالتك: هل تحتاج فعلاً إلى هذا الإجراء، أم يكفيك خيار أبسط؟ ثم يوضح لك الطبيب الخيارات المتاحة قبل اتخاذ أي قرار.' },
    { q: 'كم تستغرق زراعة الأسنان حتى التركيب النهائي؟', a: 'بعد غرس الجذر في عظم الفك ننتظر عادةً من 3 إلى 4 أشهر ليلتحم العظم بالزرعة تماماً، وبعد استقرارها يُثبَّت السن النهائي.' },
    { q: 'متى تظهر نتيجة زراعة الشعر؟', a: 'تستغرق جلسة زراعة شعر الرأس من 5 إلى 8 ساعات حسب عدد البصيلات. يمر الشعر المزروع بتساقط مؤقت طبيعي من الشهر الأول إلى الثالث، ثم يبدأ النمو الفعلي من الشهر الرابع، وتظهر النتيجة الكاملة خلال 10 إلى 12 شهراً.' },
    { q: 'هل تُجرى العمليات تحت التخدير العام؟', a: 'يختلف ذلك حسب الإجراء وحالتك. فتجميل الأنف مثلاً يستغرق من ساعتين إلى 3 ساعات تحت التخدير العام، بينما يمكن إجراء تجميل الأذن للبالغين وزراعة الحاجبين تحت التخدير الموضعي. ويحدد الطبيب الأنسب لك.' },
    { q: 'كم يبقى البالون المعدي في المعدة؟', a: 'يُسحب البالون بعد 6 أشهر أو سنة حسب نوعه، بالمنظار الطبي وتحت مهدئ خفيف وبدون ألم.' },
    { q: 'هل يمكن الجمع بين أكثر من إجراء؟', a: 'في بعض الحالات نعم؛ فمثلاً يُدمج شد العنق غالباً مع شد الوجه للحصول على نتيجة شبابية متكاملة. ويقرر الطبيب ذلك بعد تقييم حالتك.' },
  ],
  ctaTitle: 'لم تجد إجابة سؤالك؟',
  ctaText: 'فريقنا الاستشاري متواجد دائماً للاستماع إليك والإجابة على كافة استفساراتك بكل ود.',
}

const en: FaqContent = {
  nav: 'FAQ',
  eyebrow: 'FAQ',
  title: 'Frequently Asked Questions',
  intro: 'General answers to what our patients ask most. Every treatment differs from person to person, and your doctor defines the right plan after assessing your case.',
  items: [
    { q: 'Which medical departments does Orec Clinic have?', a: 'Orec Clinic brings four specialised departments under one roof: dental implants and Hollywood Smile, cosmetic surgery, hair transplantation and bariatric surgery. You can browse each department’s individual services on the Services page.' },
    { q: 'Where is the clinic and which languages do you speak?', a: 'The clinic is in the heart of Istanbul and was founded in 2015. We speak more than 10 languages so you can talk to our team with complete ease.' },
    { q: 'How do I book a consultation?', a: 'Message us on WhatsApp, call us or fill in the contact form on this website, describing your case and the service you are interested in. Our consulting team will answer your questions.' },
    { q: 'Do my details and my case stay confidential?', a: 'Yes. Expectations and outcomes are discussed with complete privacy and confidentiality.' },
    { q: 'Is every procedure right for everyone?', a: 'No. We always start by assessing your case: do you really need this procedure, or is a simpler option enough? Your doctor then explains the available options before you make any decision.' },
    { q: 'How long do dental implants take until the final tooth?', a: 'After the root is placed in the jawbone, we usually wait 3 to 4 months for the bone to fully bond with the implant. Once it has settled, the final tooth is fitted.' },
    { q: 'When do hair transplant results appear?', a: 'A scalp hair transplant session takes 5 to 8 hours depending on the number of follicles. Transplanted hair goes through a natural temporary shedding phase from month 1 to month 3, real growth starts from month 4, and the full result appears within 10 to 12 months.' },
    { q: 'Are operations performed under general anaesthesia?', a: 'It depends on the procedure and your case. A rhinoplasty, for example, takes 2 to 3 hours under general anaesthesia, while ear surgery for adults and eyebrow transplantation can be done under local anaesthesia. Your doctor decides what suits you best.' },
    { q: 'How long does a gastric balloon stay in the stomach?', a: 'The balloon is removed after 6 months or a year depending on its type, using a medical endoscope under light sedation and without pain.' },
    { q: 'Can several procedures be combined?', a: 'In some cases, yes. A neck lift, for instance, is often combined with a facelift for a complete, youthful result. Your doctor decides this after assessing your case.' },
  ],
  ctaTitle: 'Didn’t find your answer?',
  ctaText: 'Our consulting team is always available to listen to you and answer all your questions with kindness.',
}

const tr: FaqContent = {
  nav: 'SSS',
  eyebrow: 'SSS',
  title: 'Sıkça Sorulan Sorular',
  intro: 'Hastalarımızın en çok sorduğu konulara genel yanıtlar. Her tedavi kişiden kişiye değişir; doktorunuz durumunuzu değerlendirdikten sonra size uygun planı belirler.',
  items: [
    { q: 'Orec Clinic’in tıbbi bölümleri nelerdir?', a: 'Orec Clinic, tek çatı altında dört uzman bölüm sunar: diş implantı ve Hollywood Smile, estetik cerrahi, saç ekimi ve obezite cerrahisi. Her bölümün alt hizmetlerine Hizmetler sayfasından ulaşabilirsiniz.' },
    { q: 'Klinik nerede ve hangi dilleri konuşuyorsunuz?', a: 'Klinik İstanbul’un kalbinde yer alır ve 2015 yılında kurulmuştur. Ekibimizle rahatça iletişim kurabilmeniz için 10’dan fazla dil konuşuyoruz.' },
    { q: 'Nasıl konsültasyon planlayabilirim?', a: 'Bize WhatsApp’tan yazabilir, arayabilir veya sitedeki iletişim formunu doldurabilirsiniz; durumunuzu ve ilgilendiğiniz hizmeti belirtmeniz yeterli. Danışman ekibimiz sorularınızı yanıtlayacaktır.' },
    { q: 'Bilgilerim ve durumum gizli kalır mı?', a: 'Evet. Beklentiler ve sonuçlar tam bir gizlilik ve mahremiyet içinde görüşülür.' },
    { q: 'Her işlem herkes için uygun mu?', a: 'Hayır. Her zaman durumunuzu değerlendirerek başlarız: bu işleme gerçekten ihtiyacınız var mı, yoksa daha basit bir seçenek yeterli mi? Karar vermeden önce doktorunuz mevcut seçenekleri size açıklar.' },
    { q: 'Diş implantında nihai dişe kadar ne kadar süre geçer?', a: 'Kök çene kemiğine yerleştirildikten sonra, kemiğin implantla tamamen kaynaşması için genellikle 3 ila 4 ay beklenir. İmplant yerleştikten sonra nihai diş takılır.' },
    { q: 'Saç ekiminin sonuçları ne zaman görülür?', a: 'Saçlı deri saç ekimi seansı, greft sayısına bağlı olarak 5 ila 8 saat sürer. Ekilen saçlar 1. aydan 3. aya kadar doğal bir geçici dökülme evresinden geçer, gerçek büyüme 4. aydan itibaren başlar ve tam sonuç 10 ila 12 ay içinde görülür.' },
    { q: 'Ameliyatlar genel anestezi altında mı yapılır?', a: 'İşleme ve durumunuza göre değişir. Örneğin rinoplasti, genel anestezi altında 2 ila 3 saat sürer; yetişkinlerde kulak estetiği ve kaş ekimi ise lokal anestezi ile yapılabilir. Size en uygun yöntemi doktorunuz belirler.' },
    { q: 'Mide balonu midede ne kadar kalır?', a: 'Balon, türüne bağlı olarak 6 ay veya 1 yıl sonra, hafif sedasyon altında ve ağrısız olarak tıbbi endoskopla çıkarılır.' },
    { q: 'Birden fazla işlem birleştirilebilir mi?', a: 'Bazı durumlarda evet. Örneğin boyun germe, bütünsel ve genç bir sonuç için sıklıkla yüz germe ile birlikte yapılır. Bunu doktorunuz durumunuzu değerlendirdikten sonra belirler.' },
  ],
  ctaTitle: 'Sorunuzun yanıtını bulamadınız mı?',
  ctaText: 'Danışman ekibimiz sizi dinlemek ve tüm sorularınızı içtenlikle yanıtlamak için her zaman hazır.',
}

const es: FaqContent = {
  nav: 'Preguntas frecuentes',
  eyebrow: 'FAQ',
  title: 'Preguntas frecuentes',
  intro: 'Respuestas generales a lo que más nos preguntan nuestros pacientes. Cada tratamiento es distinto en cada persona, y su médico define el plan adecuado tras evaluar su caso.',
  items: [
    { q: '¿Qué departamentos médicos tiene Orec Clinic?', a: 'Orec Clinic reúne cuatro departamentos especializados bajo un mismo techo: implantes dentales y Hollywood Smile, cirugía estética, trasplante capilar y cirugía bariátrica. Puede ver los servicios de cada departamento en la página de Servicios.' },
    { q: '¿Dónde está la clínica y qué idiomas hablan?', a: 'La clínica está en el corazón de Estambul y se fundó en 2015. Hablamos más de 10 idiomas para que se comunique con nuestro equipo con total comodidad.' },
    { q: '¿Cómo reservo una consulta?', a: 'Escríbanos por WhatsApp, llámenos o rellene el formulario de contacto de este sitio, describiendo su caso y el servicio que le interesa. Nuestro equipo de consultores responderá a sus preguntas.' },
    { q: '¿Mis datos y mi caso se mantienen confidenciales?', a: 'Sí. Las expectativas y los resultados se tratan con total privacidad y confidencialidad.' },
    { q: '¿Todos los procedimientos son adecuados para todo el mundo?', a: 'No. Siempre empezamos evaluando su caso: ¿necesita realmente este procedimiento o basta con una opción más sencilla? Después, su médico le explica las opciones disponibles antes de que tome cualquier decisión.' },
    { q: '¿Cuánto tarda un implante dental hasta la pieza definitiva?', a: 'Tras colocar la raíz en el hueso maxilar, solemos esperar de 3 a 4 meses para que el hueso se integre por completo con el implante. Una vez estabilizado, se coloca la pieza definitiva.' },
    { q: '¿Cuándo se ven los resultados de un trasplante capilar?', a: 'Una sesión de trasplante capilar del cuero cabelludo dura de 5 a 8 horas según el número de folículos. El cabello trasplantado pasa por una fase natural de caída temporal entre el mes 1 y el mes 3, el crecimiento real comienza a partir del mes 4 y el resultado completo aparece en un plazo de 10 a 12 meses.' },
    { q: '¿Las operaciones se hacen con anestesia general?', a: 'Depende del procedimiento y de su caso. Una rinoplastia, por ejemplo, dura de 2 a 3 horas con anestesia general, mientras que la cirugía de orejas en adultos y el trasplante de cejas pueden hacerse con anestesia local. Su médico decide qué le conviene más.' },
    { q: '¿Cuánto tiempo permanece el balón gástrico en el estómago?', a: 'El balón se retira a los 6 meses o al año, según su tipo, mediante un endoscopio médico, con sedación ligera y sin dolor.' },
    { q: '¿Se pueden combinar varios procedimientos?', a: 'En algunos casos, sí. Por ejemplo, el lifting de cuello suele combinarse con el lifting facial para lograr un resultado joven y completo. Su médico lo decide tras evaluar su caso.' },
  ],
  ctaTitle: '¿No encontró su respuesta?',
  ctaText: 'Nuestro equipo de consultores está siempre disponible para escucharle y responder a todas sus preguntas con amabilidad.',
}

const fr: FaqContent = {
  nav: 'FAQ',
  eyebrow: 'FAQ',
  title: 'Questions fréquentes',
  intro: 'Des réponses générales aux questions que nos patients posent le plus souvent. Chaque traitement diffère d’une personne à l’autre, et votre médecin définit le plan adapté après avoir évalué votre cas.',
  items: [
    { q: 'Quels départements médicaux compte Orec Clinic ?', a: 'Orec Clinic réunit quatre départements spécialisés sous un même toit : implants dentaires et Hollywood Smile, chirurgie esthétique, greffe de cheveux et chirurgie bariatrique. Vous pouvez consulter les services de chaque département sur la page Services.' },
    { q: 'Où se trouve la clinique et quelles langues parlez-vous ?', a: 'La clinique est située au cœur d’Istanbul et a été fondée en 2015. Nous parlons plus de 10 langues pour que vous échangiez avec notre équipe en toute aisance.' },
    { q: 'Comment réserver une consultation ?', a: 'Écrivez-nous sur WhatsApp, appelez-nous ou remplissez le formulaire de contact du site en décrivant votre cas et le service qui vous intéresse. Notre équipe de conseillers répondra à vos questions.' },
    { q: 'Mes informations et mon dossier restent-ils confidentiels ?', a: 'Oui. Les attentes et les résultats sont abordés dans le respect total de la vie privée et de la confidentialité.' },
    { q: 'Chaque intervention convient-elle à tout le monde ?', a: 'Non. Nous commençons toujours par évaluer votre cas : avez-vous réellement besoin de cette intervention, ou une option plus simple suffit-elle ? Votre médecin vous explique ensuite les options disponibles avant toute décision.' },
    { q: 'Combien de temps faut-il pour un implant dentaire jusqu’à la dent définitive ?', a: 'Une fois la racine placée dans l’os de la mâchoire, on attend généralement de 3 à 4 mois pour que l’os se lie complètement à l’implant. Quand il est stabilisé, la dent définitive est posée.' },
    { q: 'Quand voit-on les résultats d’une greffe de cheveux ?', a: 'Une séance de greffe de cheveux dure de 5 à 8 heures selon le nombre de follicules. Les cheveux greffés traversent une phase naturelle de chute temporaire du 1er au 3e mois, la vraie repousse commence à partir du 4e mois et le résultat complet apparaît en 10 à 12 mois.' },
    { q: 'Les opérations se font-elles sous anesthésie générale ?', a: 'Cela dépend de l’intervention et de votre cas. Une rhinoplastie, par exemple, dure de 2 à 3 heures sous anesthésie générale, tandis que la chirurgie des oreilles chez l’adulte et la greffe de sourcils peuvent se faire sous anesthésie locale. Votre médecin choisit ce qui vous convient le mieux.' },
    { q: 'Combien de temps le ballon gastrique reste-t-il dans l’estomac ?', a: 'Le ballon est retiré après 6 mois ou un an selon son type, à l’aide d’un endoscope médical, sous sédation légère et sans douleur.' },
    { q: 'Peut-on combiner plusieurs interventions ?', a: 'Dans certains cas, oui. Un lifting du cou, par exemple, est souvent associé à un lifting du visage pour un résultat jeune et harmonieux. Votre médecin en décide après avoir évalué votre cas.' },
  ],
  ctaTitle: 'Vous n’avez pas trouvé votre réponse ?',
  ctaText: 'Notre équipe de conseillers est toujours disponible pour vous écouter et répondre à toutes vos questions avec bienveillance.',
}

const de: FaqContent = {
  nav: 'FAQ',
  eyebrow: 'FAQ',
  title: 'Häufig gestellte Fragen',
  intro: 'Allgemeine Antworten auf das, was unsere Patienten am häufigsten fragen. Jede Behandlung ist von Mensch zu Mensch verschieden; Ihr Arzt legt nach der Beurteilung Ihres Falls den passenden Plan fest.',
  items: [
    { q: 'Welche medizinischen Fachbereiche hat die Orec Clinic?', a: 'Die Orec Clinic vereint vier spezialisierte Fachbereiche unter einem Dach: Zahnimplantate und Hollywood Smile, ästhetische Chirurgie, Haartransplantation und Adipositaschirurgie. Die einzelnen Leistungen jedes Fachbereichs finden Sie auf der Seite „Leistungen“.' },
    { q: 'Wo befindet sich die Klinik und welche Sprachen sprechen Sie?', a: 'Die Klinik liegt im Herzen von Istanbul und wurde 2015 gegründet. Wir sprechen mehr als 10 Sprachen, damit Sie sich mit unserem Team völlig unkompliziert verständigen können.' },
    { q: 'Wie buche ich eine Beratung?', a: 'Schreiben Sie uns per WhatsApp, rufen Sie uns an oder füllen Sie das Kontaktformular auf dieser Website aus – mit einer Beschreibung Ihres Falls und der gewünschten Leistung. Unser Beratungsteam beantwortet Ihre Fragen.' },
    { q: 'Bleiben meine Daten und mein Fall vertraulich?', a: 'Ja. Erwartungen und Ergebnisse werden mit vollständiger Privatsphäre und Vertraulichkeit besprochen.' },
    { q: 'Ist jeder Eingriff für jeden geeignet?', a: 'Nein. Wir beginnen immer mit der Beurteilung Ihres Falls: Brauchen Sie diesen Eingriff wirklich, oder genügt eine einfachere Option? Anschliessend erklärt Ihnen Ihr Arzt die möglichen Optionen, bevor Sie eine Entscheidung treffen.' },
    { q: 'Wie lange dauert es bei Zahnimplantaten bis zum endgültigen Zahn?', a: 'Nach dem Einsetzen der Wurzel in den Kieferknochen warten wir in der Regel 3 bis 4 Monate, bis der Knochen vollständig mit dem Implantat verwachsen ist. Sobald es stabil sitzt, wird der endgültige Zahn eingesetzt.' },
    { q: 'Wann zeigen sich die Ergebnisse einer Haartransplantation?', a: 'Eine Haartransplantation am Kopf dauert je nach Anzahl der Follikel 5 bis 8 Stunden. Die verpflanzten Haare durchlaufen vom 1. bis zum 3. Monat eine natürliche Phase des vorübergehenden Haarausfalls, das eigentliche Wachstum beginnt ab dem 4. Monat, und das vollständige Ergebnis zeigt sich innerhalb von 10 bis 12 Monaten.' },
    { q: 'Werden die Operationen unter Vollnarkose durchgeführt?', a: 'Das hängt vom Eingriff und von Ihrem Fall ab. Eine Nasenkorrektur dauert beispielsweise 2 bis 3 Stunden unter Vollnarkose, während Ohrenkorrekturen bei Erwachsenen und die Augenbrauentransplantation in lokaler Betäubung möglich sind. Ihr Arzt entscheidet, was für Sie am besten geeignet ist.' },
    { q: 'Wie lange bleibt ein Magenballon im Magen?', a: 'Der Ballon wird je nach Typ nach 6 Monaten oder einem Jahr mit einem medizinischen Endoskop unter leichter Sedierung und schmerzfrei entfernt.' },
    { q: 'Lassen sich mehrere Eingriffe kombinieren?', a: 'In manchen Fällen ja. Ein Halslifting wird zum Beispiel häufig mit einem Facelifting kombiniert, um ein rundum jugendliches Ergebnis zu erzielen. Das entscheidet Ihr Arzt nach der Beurteilung Ihres Falls.' },
  ],
  ctaTitle: 'Ihre Antwort nicht gefunden?',
  ctaText: 'Unser Beratungsteam ist jederzeit für Sie da, hört Ihnen zu und beantwortet alle Ihre Fragen freundlich.',
}

const it: FaqContent = {
  nav: 'FAQ',
  eyebrow: 'FAQ',
  title: 'Domande frequenti',
  intro: 'Risposte generali a ciò che i nostri pazienti ci chiedono più spesso. Ogni trattamento varia da persona a persona, e il medico definisce il piano adatto dopo aver valutato il suo caso.',
  items: [
    { q: 'Quali reparti medici ha Orec Clinic?', a: 'Orec Clinic riunisce quattro reparti specializzati sotto lo stesso tetto: implantologia dentale e Hollywood Smile, chirurgia estetica, trapianto di capelli e chirurgia bariatrica. I servizi di ogni reparto sono consultabili nella pagina Servizi.' },
    { q: 'Dove si trova la clinica e quali lingue parlate?', a: 'La clinica si trova nel cuore di Istanbul ed è stata fondata nel 2015. Parliamo più di 10 lingue, così può comunicare con il nostro team in totale tranquillità.' },
    { q: 'Come prenoto una consulenza?', a: 'Ci scriva su WhatsApp, ci chiami o compili il modulo di contatto del sito, descrivendo il suo caso e il servizio che le interessa. Il nostro team di consulenti risponderà alle sue domande.' },
    { q: 'I miei dati e il mio caso restano riservati?', a: 'Sì. Aspettative e risultati vengono discussi con la massima privacy e riservatezza.' },
    { q: 'Ogni intervento è adatto a tutti?', a: 'No. Iniziamo sempre valutando il suo caso: ha davvero bisogno di questo intervento, o basta un’opzione più semplice? Poi il medico le spiega le opzioni disponibili prima di qualsiasi decisione.' },
    { q: 'Quanto tempo passa da un impianto dentale al dente definitivo?', a: 'Dopo aver inserito la radice nell’osso mascellare, di solito si attendono da 3 a 4 mesi perché l’osso si integri completamente con l’impianto. Una volta stabilizzato, viene fissato il dente definitivo.' },
    { q: 'Quando si vedono i risultati di un trapianto di capelli?', a: 'Una seduta di trapianto di capelli dura da 5 a 8 ore a seconda del numero di follicoli. I capelli trapiantati attraversano una naturale fase di caduta temporanea dal 1º al 3º mese, la vera crescita inizia dal 4º mese e il risultato completo compare entro 10–12 mesi.' },
    { q: 'Gli interventi si eseguono in anestesia generale?', a: 'Dipende dall’intervento e dal suo caso. Una rinoplastica, ad esempio, dura da 2 a 3 ore in anestesia generale, mentre l’otoplastica negli adulti e il trapianto di sopracciglia possono essere eseguiti in anestesia locale. Il medico decide ciò che è più adatto a lei.' },
    { q: 'Quanto resta il palloncino gastrico nello stomaco?', a: 'Il palloncino viene rimosso dopo 6 mesi o un anno, a seconda del tipo, con un endoscopio medico, in leggera sedazione e senza dolore.' },
    { q: 'Si possono combinare più interventi?', a: 'In alcuni casi sì. Ad esempio, il lifting del collo viene spesso abbinato al lifting del viso per un risultato giovane e completo. Lo decide il medico dopo aver valutato il suo caso.' },
  ],
  ctaTitle: 'Non ha trovato la risposta?',
  ctaText: 'Il nostro team di consulenti è sempre disponibile per ascoltarla e rispondere con cortesia a tutte le sue domande.',
}

const ru: FaqContent = {
  nav: 'Вопросы и ответы',
  eyebrow: 'FAQ',
  title: 'Часто задаваемые вопросы',
  intro: 'Общие ответы на то, о чём пациенты спрашивают чаще всего. Каждое лечение индивидуально, и врач определяет подходящий план после оценки вашего случая.',
  items: [
    { q: 'Какие медицинские отделения есть в Orec Clinic?', a: 'В Orec Clinic под одной крышей работают четыре специализированных отделения: дентальная имплантация и Hollywood Smile, пластическая хирургия, трансплантация волос и бариатрическая хирургия. Услуги каждого отделения можно посмотреть на странице «Услуги».' },
    { q: 'Где находится клиника и на каких языках вы говорите?', a: 'Клиника находится в самом сердце Стамбула и основана в 2015 году. Мы говорим более чем на 10 языках, чтобы вы могли свободно общаться с нашей командой.' },
    { q: 'Как записаться на консультацию?', a: 'Напишите нам в WhatsApp, позвоните или заполните форму связи на сайте, описав свой случай и интересующую услугу. Наша команда консультантов ответит на ваши вопросы.' },
    { q: 'Останутся ли мои данные и мой случай конфиденциальными?', a: 'Да. Ожидания и результаты обсуждаются в условиях полной приватности и конфиденциальности.' },
    { q: 'Подходит ли каждая процедура каждому?', a: 'Нет. Мы всегда начинаем с оценки вашего случая: действительно ли вам нужна эта процедура или достаточно более простого варианта? Затем врач объясняет доступные варианты, прежде чем вы примете решение.' },
    { q: 'Сколько времени проходит от установки импланта до постоянного зуба?', a: 'После установки корня в челюстную кость обычно ждут от 3 до 4 месяцев, пока кость полностью срастётся с имплантом. Когда он приживётся, устанавливают постоянный зуб.' },
    { q: 'Когда виден результат трансплантации волос?', a: 'Сеанс трансплантации волос на голове длится от 5 до 8 часов в зависимости от количества фолликулов. Пересаженные волосы проходят естественную фазу временного выпадения с 1-го по 3-й месяц, реальный рост начинается с 4-го месяца, а полный результат проявляется в течение 10–12 месяцев.' },
    { q: 'Проводятся ли операции под общим наркозом?', a: 'Это зависит от процедуры и вашего случая. Ринопластика, например, длится от 2 до 3 часов под общим наркозом, а пластику ушей у взрослых и пересадку бровей можно выполнять под местной анестезией. Врач решает, что подойдёт вам лучше всего.' },
    { q: 'Как долго внутрижелудочный баллон остаётся в желудке?', a: 'Баллон извлекают через 6 месяцев или через год в зависимости от его типа — с помощью медицинского эндоскопа, под лёгкой седацией и безболезненно.' },
    { q: 'Можно ли совмещать несколько процедур?', a: 'В некоторых случаях да. Например, подтяжку шеи часто совмещают с подтяжкой лица, чтобы получить цельный омолаживающий результат. Это решает врач после оценки вашего случая.' },
  ],
  ctaTitle: 'Не нашли ответ на свой вопрос?',
  ctaText: 'Наша команда консультантов всегда готова выслушать вас и доброжелательно ответить на все вопросы.',
}

const pl: FaqContent = {
  nav: 'FAQ',
  eyebrow: 'FAQ',
  title: 'Najczęściej zadawane pytania',
  intro: 'Ogólne odpowiedzi na to, o co najczęściej pytają nasi pacjenci. Każde leczenie jest inne u każdej osoby, a lekarz ustala odpowiedni plan po ocenie Twojego przypadku.',
  items: [
    { q: 'Jakie oddziały medyczne ma Orec Clinic?', a: 'Orec Clinic łączy pod jednym dachem cztery wyspecjalizowane oddziały: implanty dentystyczne i Hollywood Smile, chirurgię plastyczną, przeszczep włosów oraz chirurgię bariatryczną. Usługi każdego oddziału znajdziesz na stronie Usługi.' },
    { q: 'Gdzie znajduje się klinika i jakimi językami mówicie?', a: 'Klinika mieści się w sercu Stambułu i została założona w 2015 roku. Mówimy w ponad 10 językach, abyś mógł swobodnie porozumiewać się z naszym zespołem.' },
    { q: 'Jak umówić konsultację?', a: 'Napisz do nas na WhatsApp, zadzwoń lub wypełnij formularz kontaktowy na stronie, opisując swój przypadek i interesującą Cię usługę. Nasz zespół konsultantów odpowie na Twoje pytania.' },
    { q: 'Czy moje dane i mój przypadek pozostają poufne?', a: 'Tak. Oczekiwania i rezultaty omawiamy w pełnej prywatności i z zachowaniem poufności.' },
    { q: 'Czy każdy zabieg jest odpowiedni dla każdego?', a: 'Nie. Zawsze zaczynamy od oceny Twojego przypadku: czy naprawdę potrzebujesz tego zabiegu, czy wystarczy prostsza opcja? Następnie lekarz wyjaśnia dostępne możliwości, zanim podejmiesz jakąkolwiek decyzję.' },
    { q: 'Ile trwa implantacja zęba do założenia docelowego zęba?', a: 'Po umieszczeniu korzenia w kości szczęki zwykle czekamy od 3 do 4 miesięcy, aż kość w pełni zrośnie się z implantem. Gdy się ustabilizuje, mocowany jest docelowy ząb.' },
    { q: 'Kiedy widać efekty przeszczepu włosów?', a: 'Zabieg przeszczepu włosów na głowie trwa od 5 do 8 godzin, w zależności od liczby mieszków. Przeszczepione włosy przechodzą naturalną fazę przejściowego wypadania od 1. do 3. miesiąca, właściwy wzrost zaczyna się od 4. miesiąca, a pełny efekt widać w ciągu 10–12 miesięcy.' },
    { q: 'Czy operacje wykonuje się w znieczuleniu ogólnym?', a: 'Zależy to od zabiegu i Twojego przypadku. Rynoplastyka trwa na przykład od 2 do 3 godzin w znieczuleniu ogólnym, natomiast korekcję uszu u dorosłych i przeszczep brwi można wykonać w znieczuleniu miejscowym. Lekarz zdecyduje, co będzie dla Ciebie najlepsze.' },
    { q: 'Jak długo balon żołądkowy pozostaje w żołądku?', a: 'Balon usuwa się po 6 miesiącach lub po roku, w zależności od jego rodzaju, za pomocą endoskopu medycznego, w lekkiej sedacji i bezboleśnie.' },
    { q: 'Czy można łączyć kilka zabiegów?', a: 'W niektórych przypadkach tak. Na przykład lifting szyi często łączy się z liftingiem twarzy, aby uzyskać spójny, odmłodzony efekt. Decyduje o tym lekarz po ocenie Twojego przypadku.' },
  ],
  ctaTitle: 'Nie znalazłeś odpowiedzi?',
  ctaText: 'Nasz zespół konsultantów jest zawsze gotowy Cię wysłuchać i życzliwie odpowiedzieć na wszystkie pytania.',
}

/** Swiss spelling: no ß */
function swiss(c: FaqContent): FaqContent {
  const f = (s: string) => s.replace(/ß/g, 'ss')
  return { ...c, nav: f(c.nav), title: f(c.title), intro: f(c.intro), ctaTitle: f(c.ctaTitle), ctaText: f(c.ctaText), items: c.items.map((i) => ({ q: f(i.q), a: f(i.a) })) }
}

export const FAQ: Record<LanguageCode, FaqContent> = { ar, en, tr, es, fr, de, it, ru, pl, deCH: swiss(de) }

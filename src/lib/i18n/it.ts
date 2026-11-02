import type { Dictionary } from './types'

export const it: Dictionary = {
  meta: {
    title: 'Clinica Orec.. La tua famiglia medica nel percorso per ritrovare fiducia nel tuo sorriso e nella tua bellezza',
    description:
      'Clinica Orec nel cuore di Istanbul — estetica e cura dentale, chirurgia estetica, trapianto di capelli e chirurgia bariatrica, con licenze ufficiali dei Ministeri della Salute e del Turismo turchi.',
  },
  brand: {
    name: 'Clinica Orec',
    suffix: 'Orec Clinic',
    tagline: 'La tua famiglia medica nel percorso per ritrovare fiducia nel tuo sorriso e nella tua bellezza',
    care: 'CURA • PRECISIONE • ECCELLENZA',
  },
  nav: {
    home: 'Home',
    services: 'Servizi',
    about: 'Chi siamo',
    why: 'Perché noi',
    contact: 'Contatti',
    book: 'Prenota una consulenza',
    servicesIndex: 'Dipartimenti',
    menuOpen: 'Apri menu',
    menuClose: 'Chiudi menu',
    themeToggle: 'Passa dalla modalità scura a quella chiara',
  },
  hero: {
    eyebrow: 'CURA • PRECISIONE • ECCELLENZA',
    title1: 'Clinica Orec..',
    title2: 'La tua famiglia medica nel percorso per ritrovare fiducia nel tuo sorriso e nella tua bellezza',
    badges: ['Nel cuore di Istanbul', 'Dal 2015', 'Licenze ufficiali dei Ministeri della Salute e del Turismo'],
    ctaPrimary: 'Contattaci oggi',
    ctaSecondary: 'Scopri i servizi',
    location: 'ISTANBUL · DAL 2015',
    prevSlide: 'Diapositiva precedente',
    nextSlide: 'Diapositiva successiva',
    stats: [
      { value: '2015', label: 'Fondata a Istanbul' },
      { value: '+10', label: 'Lingue parlate' },
      { value: '4', label: 'Dipartimenti specializzati' },
    ],
  },
  services: {
    eyebrow: 'I NOSTRI SERVIZI',
    title: 'Servizi',
    subtitle: 'Quattro dipartimenti medici integrati sotto lo stesso tetto, guidati da consulenti turchi e arabi d’élite, con follow-up completo dalla prima consulenza al rientro a casa.',
    viewAll: 'Vedi tutti i servizi',
    categories: [
      {
        id: 'dental',
        num: '01',
        code: 'DENTALE',
        title: 'Estetica e Cura Dentale',
        description: 'La nostra specialità principale: dagli impianti immediati al sorriso hollywoodiano, con tecnologia digitale precisa e materiali in zirconia ed E-max di classe mondiale.',
        items: [
          { name: 'Impianti dentali', en: 'Dental Implants' },
          { name: 'Sorriso hollywoodiano', en: 'Hollywood Smile' },
          { name: 'Odontoiatria conservativa', en: 'Restorative Dentistry' },
          { name: 'Sbiancamento dentale', en: 'Teeth Whitening' },
        ],
      },
      {
        id: 'cosmetic',
        num: '02',
        code: 'ESTETICA',
        title: 'Chirurgia Estetica',
        description: 'Chirurgia del viso e del corpo eseguita da chirurghi specializzati, con pianificazione 3D e cure pre e post operatorie complete.',
        items: [],
        groups: [
          {
            name: 'Chirurgia del viso',
            items: [
              'Lifting del viso (Facelift)',
              'Lifting delle sopracciglia',
              'Rinoplastica (naso)',
              'Otoplastica (orecchie)',
              'Estetica delle labbra',
              'Lifting del collo',
              'Blefaroplastica (palpebre)',
              'Contornamento della fronte',
              'Genioplastica (mento)',
              'Aumento guance / fossette',
            ],
          },
          {
            name: 'Rimodellamento del corpo',
            items: [
              'Rimodellamento corporeo / Liposuzione',
              'Chirurgia del seno (Mammoplastica)',
              'Ginecomastia',
              'Addominoplastica (lifting addome)',
              'Lifting delle braccia',
              'Lifting delle cosce',
            ],
          },
          {
            name: 'Estetica intima',
            items: [
              'Estetica dei glutei (BBL)',
              'Ringiovanimento vaginale / Labioplastica',
              'Iniezione di grasso e filler vaginale',
              'Vaginoplastica',
              'Estetica e miglioramento del pene',
              'Allungamento del pene',
            ],
          },
        ],
      },
      {
        id: 'hair',
        num: '03',
        code: 'CAPELLI',
        title: 'Trapianto di Capelli',
        description: 'Tecniche Sapphire e DHI all’avanguardia con disegno della linea capillare naturale in armonia con i tratti del viso.',
        items: [
          { name: 'Trapianto di capelli (cuoio capelluto)', en: 'Scalp Hair Transplantation' },
          { name: 'Trapianto di barba e baffi', en: 'Beard & Mustache Transplantation' },
          { name: 'Trapianto di sopracciglia', en: 'Eyebrow Transplantation' },
        ],
      },
      {
        id: 'obesity',
        num: '04',
        code: 'BARIATRICA',
        title: 'Chirurgia Bariatrica',
        description: 'Soluzioni chirurgiche per la perdita di peso seguite da un team di nutrizione e comportamento, con follow-up dietetico fino al peso ideale.',
        items: [
          { name: 'Sleeve gastrica', en: 'Gastric Sleeve' },
          { name: 'Bypass gastrico', en: 'Gastric Bypass' },
          { name: 'Pallone gastrico', en: 'Gastric Balloon' },
          { name: 'Botox gastrico', en: 'Gastric Botox' },
        ],
      },
    ],
  },
  dental: {
    eyebrow: '01 · DENTALE',
    title: 'Estetica e Cura Dentale',
    subtitle: 'Il nostro dipartimento più avanzato: quattro percorsi terapeutici completi, dagli impianti allo sbiancamento, tutti iniziano con una diagnosi digitale precisa e finiscono con un sorriso su misura per te.',
    cta: 'Prenota una consulenza gratuita',
    sections: [
      {
        num: '01',
        name: 'Impianti dentali',
        tagline: 'Impianti dentali in Turchia | La soluzione ideale e definitiva per sostituire i denti mancanti',
        intro:
          'Gli impianti dentali sono la rivoluzione più recente dell’odontoiatria moderna: l’alternativa medica più duratura per sostituire un dente mancante o usurato senza danneggiare i denti adiacenti. Alla Clinica Orec uniamo tecnologia digitale avanzata ai migliori dentisti turchi per garantire percentuali di successo di livello mondiale e un’esperienza terapeutica senza dolore.',
        blocks: [
          {
            title: 'Componenti essenziali dell’impianto',
            text: 'Il dente impiantato è composto da tre parti che si fondono per dare l’aspetto e la sensazione di un dente naturale: il Fixture — una vite in titanio puro che si osteointegra con l’osso senza rigetto né allergie; il Pilastro (Abutment) — il connettore sul fixture; e la Corona — in zirconia o E-max, si fonde naturalmente con i tuoi denti per forza e brillantezza.',
          },
          {
            title: 'Impianti tradizionali',
            text: 'Le radici vengono inserite nel tessuto osseo della mandibola, si attendono 3-4 mesi affinché l’osso si fonda completamente con l’impianto, poi il dente definitivo viene fissato in modo permanente.',
          },
          {
            title: 'Impianti immediati',
            text: 'Tecnica avanzata in cui l’impianto viene inserito direttamente — di solito subito dopo l’estrazione del dente danneggiato — saltando le lunghe attese e concludendosi in una o due sedute. Ideale per viaggi urgenti e pazienti con eccellente densità ossea.',
          },
          {
            title: 'Impianti fissi a arcata completa (All-on-4 e All-on-6)',
            text: 'In caso di perdita totale dei denti con gengive ritirate, inseriamo solo 4 o 6 radici; due di esse inclinate fino a 65 gradi per massimo contatto e stabilità con l’osso evitando i seni paranasali, poi una protesi completa viene fissata in modo permanente su queste radici.',
          },
        ],
        candidatesTitle: 'Chi è candidato agli impianti dentali?',
        candidates: [
          'Persone sopra i 17-18 anni, prima la mandibola è ancora in crescita.',
          'Perdita di denti per incidenti, malattie o sport di contatto.',
          'Chi ha difficoltà a masticare o pronunciare suoni a causa dei denti mancanti.',
        ],
        tipsTitle: 'Le fasi del tuo percorso terapeutico',
        tips: [
          'Informa il dentista di eventuali malattie croniche (emofilia, diabete, pressione); i diabetici devono avere un’emoglobina glicata stabile da tempo.',
          'Una TAC 3D mappa spessore e densità ossea, terminazioni nervose e seni per determinare i punti di trapanazione con estrema precisione.',
          'L’intervento avviene in anestesia locale (o sedazione cosciente su richiesta), senza dolore, secondo il piano digitale prestabilito.',
        ],
        imageNote: 'Mandibola con impianti, pilastri e corone',
      },
      {
        num: '02',
        name: 'Sorriso hollywoodiano',
        tagline: 'Sorriso hollywoodiano in Turchia | Il segreto dell’attrattiva, della fiducia e della luminosità duratura',
        intro:
          'Un bel sorriso significa fiducia in se stessi — e il sorriso hollywoodiano in Turchia è ormai alla tua portata. Alla Clinica Orec offriamo le migliori faccette in porcellana (veneer) per denti armoniosi e uno splendore bianco luminoso: un aspetto sano, uniforme e allineato che dura a lungo senza cambiare colore né macchiarsi.',
        blocks: [
          {
            title: 'Come si svolge la procedura',
            text: 'Prima, trattamento completo di tutti i problemi dentali preesistenti (cavità, infiammazione gengivale); poi una leggerissima riduzione microscopica di un sottile strato di smalto per far spazio alle faccette; infine le faccette in porcellana vengono incollate con estrema precisione usando adesivi medici molto resistenti.',
          },
          {
            title: 'Materiali utilizzati',
            text: 'Le faccette sono realizzate in zirconia tedesca migliorata o E-max puro, applicate solo sull’arcata superiore, solo su quella inferiore o su entrambe per un risultato perfetto. Progetto e lavoro di laboratorio richiedono due-tre settimane (2-3 sedute in clinica).',
          },
          {
            title: 'Onestà medica prima del trattamento',
            text: 'Ci assicuriamo che il tuo caso richieda davvero le faccette; se un semplice sbiancamento bastasse, lo sconsigliamo, perché la riduzione dello smalto è una procedura permanente e irreversibile. Per questo curiamo prima tutti i problemi dentali, sostituiamo i denti molto compromessi con impianti ed eseguiamo devitalizzazioni se necessarie.',
          },
        ],
        candidatesTitle: 'Chi è candidato al sorriso hollywoodiano?',
        candidates: [
          'Persone con colorazioni e macchie dentali gravi e persistenti.',
          'Grandi consumatori di caffè, tè e tabaco che desiderano una soluzione che non si macchi in futuro.',
          'Spazi tra i denti, denti parzialmente rotti o disuguali in lunghezza e dimensione.',
        ],
        tipsTitle: 'Consigli dopo il trattamento',
        tips: [
          'Spazzolino quotidiano con dentifricio e filo interdentale per prevenire il tartaro al bordo gengivale.',
          'Evita di mordere oggetti molto duri (aprire confezioni, mordere penne) per proteggere le faccette.',
          'Visita dal dentista ogni 6 mesi per controllo e pulizia professionale.',
        ],
        imageNote: 'Sorriso luminoso e attrattivo prima e dopo le faccette',
      },
      {
        num: '03',
        name: 'Odontoiatria conservativa',
        tagline: 'La salute dei tuoi denti è l’infrastruttura della bellezza del tuo sorriso',
        intro:
          'Prima di pensare a qualsiasi procedura estetica, i tuoi denti devono godere di salute e forza. Il dipartimento di odontoiatria conservativa della Clinica Orec è la tua destinazione per eliminare dolori, carie e problemi funzionali con le tecniche mini-invasive più recenti e i più alti standard di comfort e sicurezza.',
        blocks: [
          {
            title: 'Otture estetiche (composite)',
            text: 'Rimuoviamo completamente la carie e la sostituiamo con otture composite fotopolimerizzabili di alta qualità che si fondono perfettamente con il colore naturale del dente, restituendogli forza e forma originale senza alcuna traccia antiestetica.',
          },
          {
            title: 'Trattamento canalare (devitalizzazione)',
            text: 'Usiamo i più recenti dispositivi digitali di precisione per pulire a fondo i canali infetti e infiammati ed eliminare il dolore in modo permanente, spesso in una sola seduta rapida e confortevole in anestesia locale efficace.',
          },
          {
            title: 'Corone e ponti',
            text: 'Per proteggere i denti deboli, rotti o devitalizzati usiamo corone avanzate in zirconia e porcellana che danno al dente una durezza simile allo smalto naturale e resistono alle forti forze masticatorie.',
          },
          {
            title: 'Cura delle gengive e innesto',
            text: 'Gengive sane incorniciano un bel sorriso: detartrarsi profondo, trattamento delle tasche gengivali e innesto gengivale al laser per eliminare scurimento, infiammazioni e alito cattivo.',
          },
        ],
        candidatesTitle: 'Casi che richiedono odontoiatria conservativa',
        candidates: [
          'Dolore acuto o pulsante al consumo di cibi e bevande fredde o calde.',
          'Spazi, buchi o fratture nella struttura del dente per carie o pressione eccessiva.',
          'Sanguinamento gengivale durante lo spazzolamento o alito sgradevole persistente.',
        ],
        imageNote: 'Illustrazione di devitalizzazione o ottura estetica di precisione',
      },
      {
        num: '04',
        name: 'Sbiancamento dentale',
        tagline: 'Sbiancamento dentale in Turchia | Soluzione rapida, sicura e non chirurgica per un sorriso pieno di vitalità',
        intro:
          'Se desideri ritrovare la bianchezza naturale dei tuoi denti ed eliminare l’ingiallimento causato dallo stile di vita quotidiano — senza limare i denti né applicare faccette — il dipartimento di sbiancamento della Clinica Orec ti offre le soluzioni mediche più efficaci e sicure per lo smalto.',
        blocks: [
          {
            title: 'Sbiancamento laser in clinica (Zoom)',
            text: 'Una sola seduta rapida di meno di un’ora: si applica un gel sbiancante medico a concentrazione dosata, attivato con laser o con un avanzato dispositivo Zoom — i denti si schiariscono immediatamente da 6 a 8 tonalità, con le gengive completamente protette da un isolante speciale.',
          },
          {
            title: 'Mascherine domestiche personalizzate',
            text: 'Prendiamo un impronta dei tuoi denti e realizziamo mascherine flessibili perfettamente aderenti alla bocca, consegnate con gel a concentrazione domestica sicura. Usate per alcuni giorni, prolungano i risultati della clinica o offrono uno schiarimento graduale e confortevole.',
          },
        ],
        candidatesTitle: 'Chi è candidato allo sbiancamento?',
        candidates: [
          'Ingiallimento causato dal fumo e dal consumo frequente di tè, caffè e bevande gassate.',
          'Declino naturale della bianchezza dei denti con l’età.',
          'Pazienti con denti allineati e uniformi che necessitano solo di luminosità e un tono più chiaro.',
        ],
        tipsTitle: 'Mantenere la bianchezza dopo la seduta',
        tips: [
          'Evita per 48 ore tutti i cibi e bevande colorati (caffè, tè, curry, pomodoro) e il fumo — la “dieta bianca” — perché i denti assorbono più facilmente i pigmenti.',
          'Sciacqua la bocca con acqua subito dopo aver bevuto qualsiasi bevanda scura.',
          'Usa un dentifricio sbiancante una o due volte a settimana come manutenzione, seguendo le indicazioni del tuo dentista Orec.',
        ],
        imageNote: 'Confronto visivo nitido prima/dopo lo sbiancamento laser',
      },
    ],
  },
  about: {
    eyebrow: 'CLINICA OREC',
    title: 'Chi è la Clinica Orec',
    intro: {
      title: 'Introduzione',
      text: 'Benvenuto nella Clinica Orec, dove crediamo che l’estetica e la cura medica non siano procedure passeggere, ma un caldo viaggio umano che inizia ascoltandoti e termina con la vista del tuo sorriso radioso. Da quando abbiamo aperto i battenti nel cuore di Istanbul nel 2015, ci siamo impegnati a essere il sostegno e il consulente fidato di chiunque cerchi un cambiamento positivo, unendo la precisione della medicina moderna al calore della cura familiare, con le nostre licenze ufficiali dei Ministeri della Salute e del Turismo turchi per il turismo medico.',
    },
    vision: {
      title: 'La nostra visione e filosofia',
      text: 'Non crediamo nel cambiamento artificiale che cancella i tratti; vediamo la bellezza nella spontaneità e naturalità del tuo aspetto. Con amore ci concentriamo nel valorizzare la bellezza naturale del tuo viso e nel correggere le imperfezioni con i metodi scientifici più delicati, per offrirti un risultato che ti si addice e la piena serenità durante tutto il percorso con noi.',
    },
    specialty: {
      title: 'La nostra specialità di punta: cura ed estetica dentale',
      text: 'Perché il sorriso è il primo legame con gli altri, alla Clinica Orec abbiamo dedicato un dipartimento dentale completamente integrato e molto avanzato, con un’élite di dentisti e consulenti per offrirti:',
      items: [
        { title: 'Design digitale del sorriso', text: 'Progettazione di un affascinante sorriso hollywoodiano che si adatta con precisione ai tratti naturali del tuo viso.' },
        { title: 'Impianti dentali immediati', text: 'Con le tecniche globali più recenti e il minimo dolore, per tornare alla tua vita normale rapidamente e con fiducia.' },
        { title: 'Trattamenti dentali completi', text: 'Dalle devitalizzazioni e restauri estetici (zirconia ed E-max) e sbiancamenti, alla chirurgia estetica gengivale e al trattamento dei problemi funzionali.' },
      ],
    },
    founder: {
      title: 'Una parola dal cuore.. il fondatore della clinica',
      quote:
        'Sono felice di trasferire questa passione umana, l’impegno per la qualità e l’approccio fondato sulla fiducia e sulla costruzione di partnership a lungo termine con i nostri clienti alla Clinica Orec. Non l’abbiamo voluta una clinica convenzionale e fredda, ma un luogo dove sentirsi al sicuro e a proprio agio — in particolare per chi sogna un sorriso sano e bello che ridia la passione per la vita. Per me il nostro vero successo non si misura col numero di operazioni, ma con i sorrisi sinceri che vediamo sui vostri volti e la serenità che percepite dal primo benvenuto fino al rientro a casa sani e salvi.',
      closing:
        'La nostra vera storia di successo inizia quando tocca con mano il calore della cura medica e del lusso che offriamo. Il nostro team di consulenti è sempre disponibile ad ascoltarti e rispondere a ogni domanda con gentilezza.. Contattaci oggi e fai il primo passo verso un sorriso sano e bello che ti ridà la passione di vivere!',
      name: 'Dr. MHD GHIATH ALZUHAILI',
      nameEn: 'د. محمد غياث الزحيلي',
      role: 'Fondatore e Amministratore Delegato della Clinica Orec',
    },
    cta: 'Contattaci oggi',
    license: 'Con licenza ufficiale dei Ministeri della Salute e del Turismo turchi per il turismo sanitario',
  },
  why: {
    eyebrow: 'PERCHÉ OREC',
    title: 'Perché i pazienti ci scelgono come famiglia?',
    intro: 'Ponti di amore e fiducia ci legano a migliaia di amici e pazienti provenienti da Medio Oriente, Europa, Nord Africa e Nord America, perché eccelliamo in:',
    items: [
      {
        num: '01',
        title: 'Accoglienza umana e cordiale',
        text: 'Ascoltiamo le tue preoccupazioni, comprendiamo le tue aspettative e ti trattiamo come un caro membro della nostra famiglia.',
      },
      {
        num: '02',
        title: 'Ospitalità e logistica VIP',
        text: 'Grazie alla profonda esperienza del nostro fondatore nel settore dei servizi di lusso, ci occupiamo di ogni dettaglio dei tuoi trasferimenti e del tuo soggiorno in hotel di pregio per un viaggio senza pensieri.',
      },
      {
        num: '03',
        title: 'Tecnologie sicure all’avanguardia',
        text: 'La nostra clinica è dotata dei più moderni dispositivi medici che garantiscono un trattamento preciso e confortevole con percentuali di successo mondiali.',
      },
      {
        num: '04',
        title: 'Compagnia continua',
        text: 'La nostra relazione non finisce con la fine del trattamento; il nostro team medico resta in contatto costante per vigilare sulla tua salute e sicurezza anche dopo il rientro in patria.',
      },
    ],
  },
  contact: {
    eyebrow: 'CONTATTACI',
    title: 'Mettiti in contatto',
    quote:
      'La nostra vera storia di successo inizia quando tocca con mano il calore della cura medica e del lusso che offriamo. Il nostro team di consulenti è sempre disponibile ad ascoltarti e rispondere a ogni domanda con gentilezza.. Contattaci oggi e fai il primo passo verso un sorriso sano e bello che ti ridà la passione di vivere!',
    subtitle: 'Il nostro team di consulenti è sempre disponibile ad ascoltarti e rispondere a ogni domanda con gentilezza.',
    privacy: 'Aspettative e risultati vengono discussi con completa riservatezza.',
    infoTitle: 'Informazioni di contatto',
    email: 'E-mail',
    phone: 'Telefono',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Apri una chat WhatsApp',
    address: 'Indirizzo',
    formTitle: 'Invia la tua richiesta',
    form: {
      name: 'Nome completo',
      phone: 'Numero di telefono (WhatsApp)',
      service: 'Servizio di tuo interesse',
      servicePlaceholder: 'Scegli un servizio',
      message: 'Il tuo messaggio',
      messagePlaceholder: 'Descrivi qui il tuo caso o la tua domanda..',
      submit: 'Invia richiesta',
      sending: 'Invio..',
      success: 'La tua richiesta è stata ricevuta! Il nostro team di consulenti ti contatterà a breve.',
      error: 'Si è verificato un errore durante l’invio. Riprova o contattaci via WhatsApp.',
      required: 'Questo campo è obbligatorio',
    },
  },
  footer: {
    tagline: 'Clinica Orec.. La tua famiglia medica nel percorso per ritrovare fiducia nel tuo sorriso e nella tua bellezza',
    care: 'CURA • PRECISIONE • ECCELLENZA',
    follow: 'Seguici',
    quickLinks: 'Link rapidi',
    servicesTitle: 'I nostri servizi',
    contactTitle: 'Contattaci',
    rights: 'Tutti i diritti riservati.',
    location: 'Istanbul — Turchia',
  },
  whatsapp: {
    floatLabel: 'Chat WhatsApp',
    tooltip: 'Scrivici su WhatsApp — di solito rispondiamo in pochi minuti',
    prefill: 'Salve Clinica Orec, vorrei una consulenza gratuita.',
    aria: 'Apri una chat WhatsApp con la Clinica Orec',
  },
}

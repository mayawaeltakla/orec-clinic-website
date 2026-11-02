import type { Dictionary } from './types'

export const de: Dictionary = {
  meta: {
    title: 'Orec Clinic.. Ihre medizinische Familie auf dem Weg zurück zu Ihrem Lächeln und Ihrer Schönheit',
    description:
      'Orec Clinic im Herzen von Istanbul — Zahnästhetik und -behandlung, ästhetische Chirurgie, Haartransplantation und bariatrische Chirurgie, offiziell lizenziert vom türkischen Gesundheits- und Tourismusministerium.',
  },
  brand: {
    name: 'Orec Clinic',
    suffix: 'عيادة أوريك',
    tagline: 'Ihre medizinische Familie auf dem Weg zurück zu Ihrem Lächeln und Ihrer Schönheit',
    care: 'FÜRSORGE • PRÄZISION • EXZELLENZ',
  },
  nav: {
    home: 'Startseite',
    services: 'Leistungen',
    about: 'Über uns',
    why: 'Warum wir',
    contact: 'Kontakt',
    book: 'Beratung buchen',
    servicesIndex: 'Abteilungen',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    themeToggle: 'Zwischen dunklem und hellem Modus wechseln',
  },
  hero: {
    eyebrow: 'FÜRSORGE • PRÄZISION • EXZELLENZ',
    title1: 'Orec Clinic..',
    title2: 'Ihre medizinische Familie auf dem Weg zurück zu Ihrem Lächeln und Ihrer Schönheit',
    badges: ['Im Herzen Istanbuls', 'Seit 2015', 'Offiziell lizenziert von Gesundheits- und Tourismusministerium'],
    ctaPrimary: 'Kontaktieren Sie uns',
    ctaSecondary: 'Leistungen entdecken',
    location: 'ISTANBUL · SEIT 2015',
    prevSlide: 'Vorherige Folie',
    nextSlide: 'Nächste Folie',
    stats: [
      { value: '2015', label: 'Gründung in Istanbul' },
      { value: '+10', label: 'Sprachen, die wir sprechen' },
      { value: '4', label: 'Spezialisierte Abteilungen' },
    ],
  },
  services: {
    eyebrow: 'UNSERE LEISTUNGEN',
    title: 'Leistungen',
    subtitle: 'Vier integrierte medizinische Abteilungen unter einem Dach, geführt von erstklassigen türkischen und arabischen Konsulenten, mit vollständiger Begleitung von der ersten Beratung bis zur Rückkehr.',
    viewAll: 'Alle Leistungen ansehen',
    categories: [
      {
        id: 'dental',
        num: '01',
        code: 'DENTAL',
        title: 'Zahnästhetik & Behandlung',
        description: 'Unsere Kernspezialität: von Sofortimplantaten bis zum Hollywood-Lächeln, mit präziser Digitaltechnik und erstklassigen Zirkon- und E-max-Materialien.',
        items: [
          { name: 'Zahnimplantate', en: 'Dental Implants' },
          { name: 'Hollywood Smile', en: 'Hollywood Smile' },
          { name: 'Zahnerhaltung & Restauration', en: 'Restorative Dentistry' },
          { name: 'Zahnaufhellung', en: 'Teeth Whitening' },
        ],
      },
      {
        id: 'cosmetic',
        num: '02',
        code: 'ÄSTHETIK',
        title: 'Ästhetische Chirurgie',
        description: 'Gesichts- und Körperchirurgie durch spezialisierte Chirurgen, mit 3D-Planung und vollständiger Vor- und Nachsorge.',
        items: [],
        groups: [
          {
            name: 'Gesichtschirurgie',
            items: [
              'Facelift (Gesichtsstraffung)',
              'Brauenlifting (Brow Lift)',
              'Rhinoplastik (Nase)',
              'Otoplastik (Ohren)',
              'Lippenästhetik (Cheiloplastik)',
              'Halsstraffung (Neck Lift)',
              'Blepharoplastik (Lider)',
              'Stirn-Konturierung',
              'Genioplastik (Kinn)',
              'Wangenverjüngung / Grübchen',
            ],
          },
          {
            name: 'Körperkonturierung',
            items: [
              'Body Contouring / Liposuktion',
              'Brustchirurgie (Mammoplastik)',
              'Gynäkomastie',
              'Bauchdeckenstraffung (Abdominoplastik)',
              'Armstraffung (Brachioplastik)',
              'Oberschenkelstraffung',
            ],
          },
          {
            name: 'Intimästhetik',
            items: [
              'Po-Ästhetik (BBL)',
              'Vaginale Verjüngung / Labioplastik',
              'Vaginale Fett- & Filler-Injektion',
              'Vaginoplastik',
              'Penis-Ästhetik',
              'Penisverlängerung',
            ],
          },
        ],
      },
      {
        id: 'hair',
        num: '03',
        code: 'HAAR',
        title: 'Haartransplantation',
        description: 'Modernste Sapphire- und DHI-Techniken mit natürlicher Haarlinien-Gestaltung passend zu Ihren Gesichtszügen.',
        items: [
          { name: 'Kopfhaartransplantation', en: 'Scalp Hair Transplantation' },
          { name: 'Bart- & Schnurrbarttransplantation', en: 'Beard & Mustache Transplantation' },
          { name: 'Augenbrauentransplantation', en: 'Eyebrow Transplantation' },
        ],
      },
      {
        id: 'obesity',
        num: '04',
        code: 'BARIATRIE',
        title: 'Bariatrische Chirurgie',
        description: 'Chirurgische Gewichtsreduktion unter Betreuung eines Ernährungs- und Verhaltensteams, mit Ernährungsbegleitung bis zum Idealgewicht.',
        items: [
          { name: 'Magensleeve', en: 'Gastric Sleeve' },
          { name: 'Magenbypass', en: 'Gastric Bypass' },
          { name: 'Magenballon', en: 'Gastric Balloon' },
          { name: 'Magen-Botox', en: 'Gastric Botox' },
        ],
      },
    ],
  },
  dental: {
    eyebrow: '01 · DENTAL',
    title: 'Zahnästhetik & Behandlung',
    subtitle: 'Unsere modernste Abteilung: vier vollständige Behandlungsreisen von Implantaten bis Bleaching — alle beginnen mit einer präzisen digitalen Diagnose und enden mit einem Lächeln, das zu Ihnen passt.',
    cta: 'Kostenlose Beratung buchen',
    sections: [
      {
        num: '01',
        name: 'Zahnimplantate',
        tagline: 'Zahnimplantate in der Türkei | Die ideale und endgültige Lösung für fehlende Zähne',
        intro:
          'Zahnimplantate sind die jüngste Revolution der modernen Zahnheilkunde — die dauerhafteste medizinische Alternative, um fehlende oder abgenutzte Zähne zu ersetzen, ohne Nachbarzähne zu beschädigen. In der Orec Clinic verbinden wir fortschrittliche Digitaltechnik mit den besten türkischen Zahnärzten für weltweite Erfolgsquoten und ein schmerzfreies Behandlungserlebnis.',
        blocks: [
          {
            title: 'Aufbau eines Zahnimplantats',
            text: 'Der implantierter Zahn besteht aus drei Teilen, die das Aussehen und Gefühl eines natürlichen Zahns verleihen: das Fixture — eine Schraube aus reinem Titan, die knöchern einheilt ohne Abstoßung oder Allergie; das Abutment — das Verbindungsteil auf dem Fixture; und die Krone — aus Zirkon oder E-max, die sich in Kraft und Glanz natürlich einfügt.',
          },
          {
            title: 'Klassische (Standard-)Implantate',
            text: 'Die Wurzeln werden in das Kieferknochgewebe eingesetzt, dann warten wir 3–4 Monate, bis sich der Knochen vollständig mit dem Implantat verbunden hat; danach wird der endgültige Zahn dauerhaft befestigt.',
          },
          {
            title: 'Sofortimplantate (Immediate Implants)',
            text: 'Eine fortgeschrittene Technik, bei der das Implantat direkt — meist unmittelbar nach Entfernung des beschädigten Zahns — eingesetzt wird, lange Wartezeiten entfallen und die Behandlung in ein bis zwei Sitzungen abgeschlossen ist. Ideal bei kurzfristigen Reisen und exzellenter Knochendichte.',
          },
          {
            title: 'Feste Vollbogen-Implantate (All-on-4 & All-on-6)',
            text: 'Bei vollständigem Zahnverlust mit zurückgegangenem Zahnfleisch setzen wir nur 4 oder 6 Wurzeln; zwei davon bis zu 65 Grad angewinkelt für maximalen Kontakt und Stabilität mit dem Knochen unter Umgehung der Kieferhöhlen, danach wird die Vollprothese dauerhaft befestigt.',
          },
        ],
        candidatesTitle: 'Wer kommt für Zahnimplantate infrage?',
        candidates: [
          'Personen ab 17–18 Jahren, da der Kiefer zuvor noch im Wachstum ist.',
          'Zahnverlust durch Unfälle, Krankheiten oder Kontaktsport.',
          'Menschen mit Kau- oder Ausspracheproblemen durch fehlende Zähne.',
        ],
        tipsTitle: 'Die Etappen Ihrer Behandlungsreise',
        tips: [
          'Informieren Sie den Zahnarzt über chronische Erkrankungen (Hämophilie, Diabetes, Bluthochdruck); Diabetiker sollten langfristig stabile HbA1c-Werte haben.',
          'Ein 3D-CT kartiert Knochendicke und -dichte, Nervenenden und Kieferhöhlen, um Bohrstellen äußerst präzise zu bestimmen.',
          'Der Eingriff erfolgt in Lokalanästhesie (oder auf Wunsch in Sedierung), schmerzfrei nach dem vorab erstellten digitalen Plan.',
        ],
        imageNote: 'Kiefer mit Implantaten, Abutments und Kronen',
      },
      {
        num: '02',
        name: 'Hollywood Smile',
        tagline: 'Hollywood Smile in der Türkei | Das Geheimnis von Anziehung, Selbstvertrauen und dauerhaftem Strahlen',
        intro:
          'Ein schönes Lächeln bedeutet Selbstvertrauen — und die Hollywood Smile in der Türkei ist jetzt für Sie erreichbar. In der Orec Clinic bieten wir die feinsten Porzellan-Veneers für harmonische Zähne in leuchtendem Weiß: ein gesunder, gleichmäßiger Look, der sehr lange hält ohne Verfärbungen.',
        blocks: [
          {
            title: 'So läuft das Verfahren ab',
            text: 'Zuerst umfassende Behandlung aller bestehenden Zahnprobleme (Karies, Zahnfleischentzündung); dann minimal-mikroskopisches Beschleifen einer dünnen Schmelzschicht, um Platz für die Veneers zu schaffen; schließlich werden die Porzellan-Veneers mit hochfesten medizinischen Klebstoffen präzise befestigt.',
          },
          {
            title: 'Verwendete Materialien',
            text: 'Veneers aus verbessertem deutschen Zirkon oder reinem E-max, angebracht nur am Oberkiefer, nur am Unterkiefer oder an beiden für ein perfektes Bild. Design und Laborarbeit dauern zwei bis drei Wochen (inklusive 2-3 Sitzungen in der Klinik).',
          },
          {
            title: 'Medizinische Ehrlichkeit vor den Veneers',
            text: 'Wir prüfen, ob Ihr Fall wirklich Veneers erfordert; würde einfaches Bleaching genügen, raten wir davon ab, denn das Beschleifen des Schmelzes ist dauerhaft und irreversibel. Deshalb behandeln wir zuerst alle Zahnprobleme, ersetzen stark geschädigte Zähne durch Implantate und führen bei Bedarf eine Wurzelbehandlung durch.',
          },
        ],
        candidatesTitle: 'Wer kommt für die Hollywood Smile infrage?',
        candidates: [
          'Personen mit starker, hartnäckiger Zahnverfärbung.',
          'Starker Konsum von Kaffee, Tee und Tabak — mit Wunsch nach einer Lösung, die künftig nicht verfärbt.',
          'Zahnzwischenräume, teilabgebrochene oder in Länge und Größe ungleiche Zähne.',
        ],
        tipsTitle: 'Pflegetipps danach',
        tips: [
          'Tägliches Putzen mit Zahnpasta und Zahnseide verhindert Zahnstein am Zahnfleischrand.',
          'Sehr harte Gegenstände nicht zubeißen (Verpackungen öffnen, Stifte beißen), um die Veneers zu schützen.',
          'Alle 6 Monate zum Zahnarzt für Kontrolle und professionelle Reinigung.',
        ],
        imageNote: 'Strahlendes Lächeln vor und nach den Veneers',
      },
      {
        num: '03',
        name: 'Zahnerhaltung & Restauration',
        tagline: 'Die Gesundheit Ihrer Zähne ist das Fundament der Schönheit Ihres Lächelns',
        intro:
          'Bevor Sie an ästhetische Eingriffe denken, müssen Ihre Zähne gesund und stark sein. Die Abteilung für Zahnerhaltung in der Orec Clinic ist Ihr Ziel, um Schmerzen, Karies und funktionelle Probleme mit den neuesten minimalinvasiven Techniken und höchsten Komfort- und Sicherheitsstandards zu beseitigen.',
        blocks: [
          {
            title: 'Ästhetische Füllungen (Composite)',
            text: 'Wir entfernen Karies vollständig und ersetzen sie durch hochwertige lichthärtende Composite-Füllungen, die sich farblich perfekt in den natürlichen Zahn einfügen und ihm Kraft und Originalform ohne sichtbare Spur zurückgeben.',
          },
          {
            title: 'Wurzelkanalbehandlung',
            text: 'Mit modernsten präzisen Digitalgeräten reinigen wir infizierte, entzündete Nervenkanäle tiefgehend und beseitigen Schmerzen dauerhaft — meist in einer schnellen, angenehmen Sitzung unter wirksamer Lokalanästhesie.',
          },
          {
            title: 'Kronen & Brücken',
            text: 'Zum Schutz schwacher, gebrochener oder wurzelbehandelter Zähne verwenden wir fortschrittliche Zirkon- und Porzellankronen mit einer Härte ähnlich natürlichem Schmelz und hoher Kaubelastung.',
          },
          {
            title: 'Zahnfleischbehandlung & Transplantation',
            text: 'Gesundes Zahnfleisch rahmt das schöne Lächeln: Tiefenreinigung, Zahnfleischtaschen-Behandlung und Laser-Transplantation gegen Verfärbung, Entzündung und Mundgeruch.',
          },
        ],
        candidatesTitle: 'Fälle, die Zahnerhaltung brauchen',
        candidates: [
          'Starke Schmerzen oder Pulsieren bei kalten oder heißen Speisen und Getränken.',
          'Lücken, Löcher oder Risse in der Zahnstruktur durch Karies oder Überdruck.',
          'Zahnfleischbluten beim Putzen oder anhaltender Mundgeruch.',
        ],
        imageNote: 'Illustration einer Wurzelkanalbehandlung oder präzisen ästhetischen Füllung',
      },
      {
        num: '04',
        name: 'Zahnaufhellung',
        tagline: 'Zahnaufhellung in der Türkei | Schnelle, sichere, nicht-chirurgische Lösung für ein vitales Lächeln',
        intro:
          'Wenn Sie die natürliche Weißheit Ihrer Zähne wiedererlangen und Alltagsverfärbungen loswerden möchten — ohne Beschleifen oder Veneers —, bietet die Bleaching-Abteilung der Orec Clinic die wirksamsten und schmelzschonendsten medizinischen Lösungen.',
        blocks: [
          {
            title: 'Laser-Bleaching in der Klinik (Zoom)',
            text: 'Eine schnelle Sitzung unter einer Stunde: Auftragen eines medizinischen Bleaching-Gels in dosierter Konzentration, aktiviert durch Laser oder modernes Zoom-Gerät — die Zähne hellen sofort um 6 bis 8 Stufen auf, das Zahnfleisch wird durch einen speziellen Schutz komplett abgeschirmt.',
          },
          {
            title: 'Individuelle Heim-Bleaching-Schienen',
            text: 'Wir nehmen einen Abdruck Ihrer Zähne und fertigen flexible Schienen, die exakt passen, geliefert mit einem sicheren Heim-Gel. Mehrere Tage angewendet, verlängern sie das Klinikergebnis oder erzielen eine sanfte, schrittweise Aufhellung.',
          },
        ],
        candidatesTitle: 'Wer kommt für Zahnaufhellung infrage?',
        candidates: [
          'Verfärbungen durch Rauchen und häufigen Konsum von Tee, Kaffee und Softdrinks.',
          'Natürlicher Rückgang der Zahnweißheit mit dem Alter.',
          'Patienten mit geraden, gleichmäßigen Zähnen, die nur Glanz und eine hellere Stufe wünschen.',
        ],
        tipsTitle: 'So bleibt Ihr Lächeln weiß',
        tips: [
          '48 Stunden lang alle gefärbten Lebensmittel und Getränke (Kaffee, Tee, Curry, Tomate) und Rauchen vermeiden — die „weiße Diät“ —, da Zähne dann Pigmente leichter aufnehmen.',
          'Zukünftig nach jedem dunklen Getränk sofort mit Wasser spülen.',
          'Ein- bis zweimal pro Woche eine Aufhellzahncreme als Pflege, nach Anweisung Ihres Orec-Zahnarztes.',
        ],
        imageNote: 'Klarer Vorher-Nachher-Vergleich des Laser-Bleachings',
      },
    ],
  },
  about: {
    eyebrow: 'OREC CLINIC',
    title: 'Über die Orec Clinic',
    intro: {
      title: 'Einführung',
      text: 'Willkommen in der Orec Clinic — wir glauben, dass Ästhetik und medizinische Betreuung keine vorübergehenden Eingriffe sind, sondern eine herzliche menschliche Reise, die mit dem Zuhören beginnt und mit dem Anblick Ihres strahlenden Lächelns endet. Seit unserer Eröffnung im Herzen Istanbuls 2015 haben wir uns verpflichtet, Stütze und vertrauensvoller Berater aller zu sein, die eine positive Veränderung suchen — und die Präzision der modernen Medizin mit der Wärme familiärer Fürsorge zu verbinden, unter unseren offiziellen Lizenzen des türkischen Gesundheits- und Tourismusministeriums für Medizintourismus.',
    },
    vision: {
      title: 'Unsere Vision & Philosophie',
      text: 'Wir glauben nicht an künstliche Veränderung, die Züge auslöscht; wir sehen Schönheit in der Natürlichkeit Ihres Erscheinens. Mit Liebe konzentrieren wir uns darauf, die natürliche Schönheit Ihres Gesichts hervorzuheben und Unvollkommenheiten mit den sanftesten wissenschaftlichen Methoden zu korrigieren — für ein Ergebnis, das zu Ihnen passt, mit voller Ruhe während der gesamten Reise.',
    },
    specialty: {
      title: 'Unsere Kernspezialität: Zahnbehandlung & -ästhetik',
      text: 'Weil das Lächeln das erste Band zu anderen ist, haben wir in der Orec Clinic eine voll integrierte, hochmoderne Zahnabteilung mit Elite-Zahnärzten und Konsulenten eingerichtet, um Ihnen zu bieten:',
      items: [
        { title: 'Digitales Smile Design', text: 'Entwurf eines bezaubernden Hollywood-Lächelns, das exakt zu Ihren natürlichen Gesichtszügen passt.' },
        { title: 'Sofortimplantate', text: 'Mit den neuesten Welttechniken und minimalen Schmerzen, damit Sie schnell und sicher zu Ihrem Alltag zurückkehren.' },
        { title: 'Umfassende Zahnbehandlungen', text: 'Von Wurzelbehandlungen und ästhetischen Restaurationen (Zirkon und E-max) und Bleaching bis hin zu ästhetischer Zahnfleischchirurgie und Behandlung funktioneller Probleme.' },
      ],
    },
    founder: {
      title: 'Ein Wort von Herzen.. der Gründer der Klinik',
      quote:
        'Ich freue mich, diese menschliche Leidenschaft, das Qualitätsversprechen und den vertrauensbasierten Ansatz langfristiger Partnerschaften mit unseren Kunden in die Orec Clinic zu tragen. Wir wollten keine trockene, konventionelle Klinik, sondern einen Ort, an dem man sich sicher und wohl fühlt — besonders für alle, die von einem gesunden, schönen Lächeln träumen, das die Lebensfreude zurückbringt. Für mich misst sich unser echter Erfolg nicht an der Zahl der Operationen, sondern an den aufrichtigen Lächeln auf Ihren Gesichtern und an der Ruhe, die Sie vom ersten Empfang bis zur sicheren Heimkehr spüren.',
      closing:
        'Unsere wahre Erfolgsgeschichte beginnt, wenn Sie die Wärme der medizinischen Betreuung und des Luxus, den wir bieten, selbst spüren. Unser Beratungsteam ist immer da, um Ihnen zuzuhören und alle Fragen freundlich zu beantworten.. Kontaktieren Sie uns noch heute und machen Sie den ersten Schritt zu einem gesunden, schönen Lächeln!',
      name: 'Dr. MHD GHIATH ALZUHAILI',
      nameEn: 'د. محمد غياث الزحيلي',
      role: 'Gründer & Geschäftsführer der Orec Clinic',
    },
    cta: 'Kontaktieren Sie uns heute',
    license: 'Offiziell lizenziert vom türkischen Gesundheits- und Tourismusministerium für Gesundheitstourismus',
  },
  why: {
    eyebrow: 'WARUM OREC',
    title: 'Warum wählen uns Patienten als ihre Familie?',
    intro: 'Brücken der Liebe und des Vertrauens verbinden uns mit Tausenden Freunden und Patienten aus dem Nahen Osten, Europa, Nordafrika und Nordamerika, denn wir zeichnen uns aus durch:',
    items: [
      {
        num: '01',
        title: 'Menschliche, herzliche Betreuung',
        text: 'Wir hören Ihre Sorgen, verstehen Ihre Wünsche und behandeln Sie als geschätztes Mitglied unserer Familie.',
      },
      {
        num: '02',
        title: 'VIP-Gastfreundschaft & Logistik',
        text: 'Dank der tiefen Erfahrung unseres Gründers im Luxusdienstleistungssektor übernehmen wir jedes Detail Ihrer Transfers und Ihres erstklassigen Hotelaufenthalts — für eine sorgenfreie Reise.',
      },
      {
        num: '03',
        title: 'Neueste sichere Technologien',
        text: 'Unsere Klinik ist mit modernsten Medizingeräten ausgestattet, die präzise, angenehme Behandlung mit weltweiten Erfolgsquoten garantieren.',
      },
      {
        num: '04',
        title: 'Ständige Begleitung',
        text: 'Unsere Beziehung endet nicht mit der Behandlung; unser medizinisches Team bleibt in dauerhaftem Kontakt und wacht über Ihre Gesundheit, auch nach Ihrer Rückkehr in die Heimat.',
      },
    ],
  },
  contact: {
    eyebrow: 'KONTAKT',
    title: 'Nehmen Sie Kontakt auf',
    quote:
      'Unsere wahre Erfolgsgeschichte beginnt, wenn Sie die Wärme der medizinischen Betreuung und des Luxus, den wir bieten, selbst spüren. Unser Beratungsteam ist immer da, um Ihnen zuzuhören und alle Fragen freundlich zu beantworten.. Kontaktieren Sie uns noch heute und machen Sie den ersten Schritt zu einem gesunden, schönen Lächeln, das Ihre Lebensfreude weckt!',
    subtitle: 'Unser Beratungsteam ist immer für Sie da, hört zu und beantwortet alle Fragen mit Herzlichkeit.',
    privacy: 'Erwartungen und Ergebnisse werden mit voller Privatsphäre und Vertraulichkeit besprochen.',
    infoTitle: 'Kontaktinformationen',
    email: 'E-Mail',
    phone: 'Telefon',
    whatsapp: 'WhatsApp',
    whatsappCta: 'WhatsApp-Chat öffnen',
    address: 'Adresse',
    formTitle: 'Senden Sie Ihre Anfrage',
    form: {
      name: 'Vollständiger Name',
      phone: 'Telefonnummer (WhatsApp)',
      service: 'Gewünschte Leistung',
      servicePlaceholder: 'Leistung wählen',
      message: 'Ihre Nachricht',
      messagePlaceholder: 'Beschreiben Sie hier Ihren Fall oder Ihre Frage..',
      submit: 'Anfrage senden',
      sending: 'Wird gesendet..',
      success: 'Ihre Anfrage ist eingegangen! Unser Beratungsteam meldet sich in Kürze bei Ihnen.',
      error: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder erreichen Sie uns via WhatsApp.',
      required: 'Dieses Feld ist erforderlich',
    },
  },
  footer: {
    tagline: 'Orec Clinic.. Ihre medizinische Familie auf dem Weg zurück zu Ihrem Lächeln und Ihrer Schönheit',
    care: 'FÜRSORGE • PRÄZISION • EXZELLENZ',
    follow: 'Folgen Sie uns',
    quickLinks: 'Schnelllinks',
    servicesTitle: 'Unsere Leistungen',
    contactTitle: 'Kontaktieren Sie uns',
    rights: 'Alle Rechte vorbehalten.',
    location: 'Istanbul — Türkei',
  },
  whatsapp: {
    floatLabel: 'WhatsApp-Chat',
    tooltip: 'Schreiben Sie uns auf WhatsApp — wir antworten meist innerhalb weniger Minuten',
    prefill: 'Hallo Orec Clinic, ich möchte eine kostenlose Beratung.',
    aria: 'WhatsApp-Chat mit Orec Clinic öffnen',
  },
}

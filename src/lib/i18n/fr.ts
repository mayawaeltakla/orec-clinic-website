import type { Dictionary } from './types'

export const fr: Dictionary = {
  meta: {
    title: 'Clinique Orec.. Votre famille médicale dans le voyage pour retrouver confiance en votre sourire et beauté',
    description:
      'Clinique Orec au cœur d’Istanbul — esthétique et soins dentaires, chirurgie esthétique, greffe de cheveux et chirurgie bariatrique, sous licences officielles des ministères turcs de la Santé et du Tourisme.',
  },
  brand: {
    name: 'Clinique Orec',
    suffix: 'Orec Clinic',
    tagline: 'Votre famille médicale dans le voyage pour retrouver confiance en votre sourire et beauté',
    care: 'SOIN • PRÉCISION • EXCELLENCE',
  },
  nav: {
    home: 'Accueil',
    services: 'Services',
    about: 'À propos',
    why: 'Pourquoi nous',
    contact: 'Contact',
    book: 'Réserver une consultation',
    servicesIndex: 'Départements',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    themeToggle: 'Basculer entre le mode sombre et clair',
  },
  hero: {
    eyebrow: 'SOIN • PRÉCISION • EXCELLENCE',
    title1: 'Clinique Orec..',
    title2: 'Votre famille médicale dans le voyage pour retrouver confiance en votre sourire et beauté',
    badges: ['Au cœur d’Istanbul', 'Depuis 2015', 'Licences officielles des ministères de la Santé et du Tourisme'],
    ctaPrimary: 'Contactez-nous',
    ctaSecondary: 'Découvrir nos services',
    location: 'ISTANBUL · DEPUIS 2015',
    prevSlide: 'Diapositive précédente',
    nextSlide: 'Diapositive suivante',
    stats: [
      { value: '2015', label: 'Fondée à Istanbul' },
      { value: '+10', label: 'Langues parlées' },
      { value: '4', label: 'Départements spécialisés' },
    ],
  },
  services: {
    eyebrow: 'NOS SERVICES',
    title: 'Services',
    subtitle: 'Quatre départements médicaux intégrés sous un même toit, dirigés par des consultants turcs et arabes d’élite, avec un suivi complet de la première consultation jusqu’à votre retour.',
    viewAll: 'Voir tous les services',
    categories: [
      {
        id: 'dental',
        num: '01',
        code: 'DENTAIRE',
        title: 'Esthétique et Soins Dentaires',
        description: 'Notre spécialité phare : des implants immédiats au sourire hollywoodien, avec technologie numérique précise et matériaux zircone et E-max de classe mondiale.',
        items: [
          { name: 'Implants dentaires', en: 'Dental Implants' },
          { name: 'Sourire hollywoodien', en: 'Hollywood Smile' },
          { name: 'Soins et restauration dentaire', en: 'Restorative Dentistry' },
          { name: 'Blanchiment des dents', en: 'Teeth Whitening' },
        ],
      },
      {
        id: 'cosmetic',
        num: '02',
        code: 'ESTHÉTIQUE',
        title: 'Chirurgie Esthétique',
        description: 'Chirurgies du visage et du corps par des chirurgiens spécialisés, avec planification 3D et suivi pré- et post-opératoire complet.',
        items: [],
        groups: [
          {
            name: 'Chirurgie du visage',
            items: [
              'Lifting facial (Facelift)',
              'Lifting des sourcils (Brow Lift)',
              'Rhinoplastie (nez)',
              'Otoplastie (oreilles)',
              'Esthétique des lèvres (Cheiloplastie)',
              'Lifting du cou (Neck Lift)',
              'Blépharoplastie (paupières)',
              'Contouring du front',
              'Génioplastie (menton)',
              'Augmentation des joues / fossettes',
            ],
          },
          {
            name: 'Remodelage du corps',
            items: [
              'Remodelage corporel / Liposuccion',
              'Chirurgie mammaire (Mammoplastie)',
              'Gynécomastie',
              'Abdominoplastie (lifting du ventre)',
              'Lifting des bras (Brachioplastie)',
              'Lifting des cuisses',
            ],
          },
          {
            name: 'Esthétique intime',
            items: [
              'Esthétique des fesses (BBL)',
              'Rajeunissement vaginal / Labiaplastie',
              'Injection de graisse et filler vaginal',
              'Vaginoplastie',
              'Esthétique et amélioration du pénis',
              'Allongement du pénis',
            ],
          },
        ],
      },
      {
        id: 'hair',
        num: '03',
        code: 'CAPILLAIRE',
        title: 'Greffe de Cheveux',
        description: 'Techniques Safir et DHI de pointe avec un design de ligne capillaire naturelle en harmonie avec vos traits.',
        items: [
          { name: 'Greffe de cheveux (cuir chevelu)', en: 'Scalp Hair Transplantation' },
          { name: 'Greffe de barbe et moustache', en: 'Beard & Mustache Transplantation' },
          { name: 'Greffe de sourcils', en: 'Eyebrow Transplantation' },
        ],
      },
      {
        id: 'obesity',
        num: '04',
        code: 'BARIATRIQUE',
        title: 'Chirurgie Bariatrique',
        description: 'Solutions chirurgicales de perte de poids supervisées par une équipe nutrition et comportement, avec suivi diététique jusqu’au poids idéal.',
        items: [
          { name: 'Sleeve gastrique', en: 'Gastric Sleeve' },
          { name: 'By-pass gastrique', en: 'Gastric Bypass' },
          { name: 'Ballon gastrique', en: 'Gastric Balloon' },
          { name: 'Botox gastrique', en: 'Gastric Botox' },
        ],
      },
    ],
  },
  dental: {
    eyebrow: '01 · DENTAIRE',
    title: 'Esthétique et Soins Dentaires',
    subtitle: 'Notre département le plus avancé : quatre parcours thérapeutiques complets, des implants au blanchiment, tous commençant par un diagnostic numérique précis et finissant par un sourire qui vous ressemble.',
    cta: 'Réserver une consultation gratuite',
    sections: [
      {
        num: '01',
        name: 'Implants dentaires',
        tagline: 'Implants dentaires en Turquie | La solution idéale et définitive pour remplacer les dents manquantes',
        intro:
          'L’implant dentaire est la révolution la plus récente de la dentisterie moderne : l’alternative médicale la plus durable pour remplacer une dent manquante ou usée sans endommager les dents voisines. À la Clinique Orec, nous associons technologie numérique de pointe et dentistes turcs les plus habiles pour garantir des taux de succès mondiaux et une expérience sans douleur.',
        blocks: [
          {
            title: 'Composants essentiels de l’implant',
            text: 'La dent implantée se compose de trois parties fusionnées qui reproduisent l’aspect et la sensation d’une dent naturelle : le Fixture — une vis en titane pur qui s’ostéo-intègre à l’os sans rejet ni allergie ; le Pilier (Abutment) — la pièce de liaison posée sur le fixture ; et la Couronne — en zircone ou E-max, se fondant naturellement avec vos dents par sa force et son éclat.',
          },
          {
            title: 'Implant classique (standard)',
            text: 'Les racines sont insérées dans l’os de la mâchoire, puis on attend 3 à 4 mois que l’os fusionne totalement avec l’implant ; la dent définitive est ensuite fixée de façon permanente.',
          },
          {
            title: 'Implant immédiat (Immediate Implants)',
            text: 'Technique avancée où l’implant est posé directement — généralement juste après l’extraction de la dent abîmée — en évitant les longues attentes ; terminée en une ou deux séances. Idéale pour les voyages urgents et les patients dotés d’une excellente densité osseuse.',
          },
          {
            title: 'Implants fixes de l’arcade complète (All-on-4 et All-on-6)',
            text: 'En cas de perte dentaire totale avec gomme atrophiée, nous posons seulement 4 ou 6 racines ; deux d’entre elles inclinées jusqu’à 65 degrés pour un contact et une stabilité maximaux avec l’os en évitant les sinus, puis un prothèse complète est fixée définitivement sur ces racines.',
          },
        ],
        candidatesTitle: 'Qui est candidat aux implants dentaires ?',
        candidates: [
          'Les personnes de plus de 17-18 ans, la mâchoire étant encore en croissance avant.',
          'Perte de dents suite à des accidents, maladies ou sports de contact.',
          'Ceux qui ont des difficultés à mâcher ou à prononcer des sons à cause de dents manquantes.',
        ],
        tipsTitle: 'Les étapes de votre parcours thérapeutique',
        tips: [
          'Informez le dentiste de toute maladie chronique (hémophilie, diabète, tension) ; les diabétiques doivent avoir une HbA1c stable depuis longtemps.',
          'Un scanner 3D cartographie l’épaisseur et la densité osseuses, les terminaisons nerveuses et les sinus pour déterminer les sites de forage avec une précision extrême.',
          'L’intervention se déroule sous anesthésie locale (ou sédation consciente sur demande), sans douleur, selon le plan numérique préétabli.',
        ],
        imageNote: 'Mâchoire avec implants, piliers et couronnes',
      },
      {
        num: '02',
        name: 'Sourire hollywoodien',
        tagline: 'Sourire hollywoodien en Turquie | Le secret de l’attraction, de la confiance et de l’éclat durable',
        intro:
          'Un beau sourire rime avec confiance en soi — et le sourire hollywoodien en Turquie est désormais à votre portée. À la Clinique Orec, nous offrons les plus fines facettes de porcelaine (veneers) pour des dents harmonieuses à l’éclat blanc lumineux : un aspect sain, égal et aligné qui dure très longtemps sans changer de couleur ni se tacher.',
        blocks: [
          {
            title: 'Comment se déroule la procédure ?',
            text: 'D’abord, traitement complet de tous les problèmes dentaires préexistants (caries, inflammations gingivales) ; puis une réduction microscopique minime d’une fine couche d’émail pour laisser place aux facettes ; enfin, les facettes en porcelaine sont collées avec une précision extrême à l’aide d’adhésifs médicaux très résistants.',
          },
          {
            title: 'Matériaux utilisés',
            text: 'Les facettes sont fabriquées en zircone allemande améliorée ou en E-max pur, posées sur l’arcade supérieure seule, l’inférieure seule ou les deux pour un rendu parfait. La conception et le travail de laboratoire prennent deux à trois semaines (comprenant 2-3 séances à la clinique).',
          },
          {
            title: 'Honnêteté médicale avant la pose',
            text: 'Nous vérifions que votre cas nécessite réellement des facettes ; si un simple blanchiment suffit, nous le déconseillons, car la réduction de l’émail est une procédure permanente et irréversible. C’est pourquoi nous soignons d’abord tous les problèmes dentaires, remplaçons les dents très abîmées par des implants et réalisons un traitement canalaire si nécessaire.',
          },
        ],
        candidatesTitle: 'Qui est candidat au sourire hollywoodien ?',
        candidates: [
          'Personnes souffrant de colorations et taches dentaires sévères et persistantes.',
          'Gros consommateurs de café, thé et tabac souhaitant une solution qui ne se tache plus à l’avenir.',
          'Présence d’espaces entre les dents, dents partiellement cassées ou inégales en longueur et taille.',
        ],
        tipsTitle: 'Conseils après la pose',
        tips: [
          'Brossage quotidien avec dentifrice et fil dentaire pour prévenir le tartre au bord des gencives.',
          'Éviter de mordre des objets très durs (ouvrir des emballages, mordre des stylos) pour protéger les facettes.',
          'Visite chez le dentiste tous les 6 mois pour contrôle et détartrage professionnel.',
        ],
        imageNote: 'Sourire éclatant avant et après la pose des facettes',
      },
      {
        num: '03',
        name: 'Soins et restauration dentaire',
        tagline: 'La santé de vos dents est l’infrastructure de la beauté de votre sourire',
        intro:
          'Avant toute démarche esthétique, vos dents doivent être saines et fortes. Le département de soins et restauration dentaire de la Clinique Orec est votre destination pour éliminer douleurs, caries et problèmes fonctionnels avec les techniques mini-invasives les plus récentes et les plus hauts standards de confort et de sécurité.',
        blocks: [
          {
            title: 'Obturations esthétiques (composite)',
            text: 'Nous éliminons totalement la carie et la remplaçons par des obturations composites photo-polymérisables de haute qualité qui se fondent dans la couleur naturelle de la dent, lui rendant force et forme d’origine sans aucune trace inesthétique.',
          },
          {
            title: 'Traitement canalaire (racine)',
            text: 'Nous utilisons les derniers appareils numériques de précision pour nettoyer en profondeur les canaux infectés et enflammés et éliminer définitivement la douleur, souvent en une seule séance rapide et confortable sous anesthésie locale efficace.',
          },
          {
            title: 'Couronnes et bridges',
            text: 'Pour protéger les dents fragiles, cassées ou dévitalisées, nous utilisons des couronnes avancées en zircone et porcelaine conférant une dureté comparable à l’émail naturel et résistant aux fortes forces de mastication.',
          },
          {
            title: 'Traitement des gencives et greffe',
            text: 'Des gencives saines encadrent un beau sourire : détartrage profond, traitement des poches gingivales et greffe laser pour éliminer assombrissement, inflammations et mauvaise haleine.',
          },
        ],
        candidatesTitle: 'Cas nécessitant des soins restaurateurs',
        candidates: [
          'Douleur vive ou pulsation lors de la consommation d’aliments et boissons froides ou chaudes.',
          'Présence de trous, cavités ou fractures de la structure dentaire dues à la carie ou à une pression excessive.',
          'Saignement des gencives au brossage ou mauvaise haleine persistante.',
        ],
        imageNote: 'Illustration d’un traitement canalaire ou d’une obturation esthétique de précision',
      },
      {
        num: '04',
        name: 'Blanchiment des dents',
        tagline: 'Blanchiment dentaire en Turquie | Solution rapide, sûre et non chirurgicale pour un sourire plein de vitalité',
        intro:
          'Si vous souhaitez retrouver la blancheur naturelle de vos dents et éliminer le jaunissement lié au mode de vie quotidien — sans fraisage ni facettes — le département de blanchiment de la Clinique Orec vous offre les solutions médicales les plus efficaces et sûres pour l’émail.',
        blocks: [
          {
            title: 'Blanchiment laser au cabinet (Zoom)',
            text: 'Une séance rapide de moins d’une heure : application d’un gel blanchissant médical à concentration dosée, activé par laser ou par un appareil Zoom avancé — les dents s’éclaircissent immédiatement de 6 à 8 teintes, les gencives étant totalement protégées par un isolant spécial.',
          },
          {
            title: 'Gouttières de blanchiment à domicile sur mesure',
            text: 'Nous prenons une empreinte de vos dents et fabriquons des gouttières souples épousant parfaitement votre bouche, livrées avec un gel à concentration domestique sûre. À utiliser plusieurs jours pour prolonger les résultats ou obtenir un éclaircissement graduel et confortable.',
          },
        ],
        candidatesTitle: 'Qui est candidat au blanchiment ?',
        candidates: [
          'Jaunissement causé par le tabac et la consommation fréquente de thé, café et sodas.',
          'Déclin naturel de la blancheur des dents avec l’âge.',
          'Patients aux dents alignées et harmonieuses ne nécessitant qu’un éclat et une teinte plus claire.',
        ],
        tipsTitle: 'Préserver la blancheur après la séance',
        tips: [
          'Éviter tous les aliments et boissons colorés (café, thé, curry, tomate) et le tabac pendant 48 heures — la « diète blanche » — les dents absorbant plus facilement les pigments.',
          'Se rincer la bouche à l’eau immédiatement après toute boisson foncée à l’avenir.',
          'Utiliser un dentifrice blanchissant une à deux fois par semaine en entretien, selon les consignes de votre dentiste Orec.',
        ],
        imageNote: 'Comparaison visuelle claire avant/après blanchiment laser',
      },
    ],
  },
  about: {
    eyebrow: 'CLINIQUE OREC',
    title: 'À propos de la Clinique Orec',
    intro: {
      title: 'Introduction',
      text: 'Bienvenue à la Clinique Orec, où nous croyons que l’esthétique et le soin médical ne sont pas des procédures passagères mais un chaleureux voyage humain qui commence par vous écouter et s’achève à la vue de votre sourire radieux. Depuis notre ouverture au cœur d’Istanbul en 2015, nous nous sommes engagés à être le soutien et le conseiller de confiance de quiconque recherche un changement positif, alliant la précision de la médecine moderne à la chaleur du soin familial, sous nos licences officielles des ministères turcs de la Santé et du Tourisme pour le tourisme médical.',
    },
    vision: {
      title: 'Notre vision et philosophie',
      text: 'Nous ne croyons pas au changement artificiel qui efface les traits ; nous voyons la beauté dans la spontanéité et la naturalité de votre apparence. Avec amour, nous nous concentrons sur la mise en valeur de la beauté naturelle de votre visage et la correction des imperfections par les méthodes scientifiques les plus douces, pour vous offrir un résultat qui vous correspond et une sérénité totale tout au long de votre parcours.',
    },
    specialty: {
      title: 'Notre spécialité phare : soins et esthétique dentaires',
      text: 'Parce que le sourire est le premier lien avec les autres, nous avons consacré à la Clinique Orec un département dentaire intégré et très avancé, réunissant une élite de dentistes et consultants pour vous offrir :',
      items: [
        { title: 'Design de sourire numérique', text: 'Conception d’un fascinant sourire hollywoodien épousant précisément les traits naturels de votre visage.' },
        { title: 'Implants dentaires immédiats', text: 'Avec les techniques mondiales les plus récentes et un minimum de douleur, pour retrouver rapidement et sereinement votre vie normale.' },
        { title: 'Soins dentaires complets', text: 'Des traitements canalaires et restaurations esthétiques (zircone et E-max) au blanchiment, en passant par la chirurgie esthétique des gencives et le traitement des problèmes fonctionnels.' },
      ],
    },
    founder: {
      title: 'Un mot du cœur.. le fondateur de la clinique',
      quote:
        'Je suis heureux de transmettre cette passion humaine, cet engagement qualité et cette approche fondée sur la confiance et la construction de partenariats durables avec nos clients à la Clinique Orec. Nous n’avons pas voulu d’une clinique sèche et conventionnelle, mais un lieu où l’on se sent en sécurité et à l’aise — en particulier pour tous ceux qui rêvent d’un sourire sain et beau qui leur redonne le goût de vivre. Pour moi, notre véritable succès ne se mesure pas au nombre d’opérations, mais aux sourires sincères que nous voyons sur vos visages et au confort que vous ressentez du premier accueil jusqu’à votre retour chez vous, sains et saufs.',
      closing:
        'Notre véritable histoire de succès commence lorsque vous touchez du doigt la chaleur du soin médical et du luxe que nous offrons. Notre équipe de consultants est toujours là pour vous écouter et répondre avec bienveillance à toutes vos questions.. Contactez-nous dès aujourd’hui et franchissez le premier pas vers un sourire sain et beau qui vous rendra la passion de vivre !',
      name: 'Dr MHD GHIATH ALZUHAILI',
      nameEn: 'د. محمد غياث الزحيلي',
      role: 'Fondateur et Directeur Général de la Clinique Orec',
    },
    cta: 'Contactez-nous aujourd’hui',
    license: 'Licenciée officiellement par les ministères turcs de la Santé et du Tourisme pour le tourisme de santé',
  },
  why: {
    eyebrow: 'POURQUOI OREC',
    title: 'Pourquoi les patients nous choisissent comme leur famille ?',
    intro: 'Des ponts d’amour et de confiance se sont tissés entre nous et des milliers d’amis et de patients venus du Moyen-Orient, d’Europe, d’Afrique du Nord et d’Amérique du Nord, car nous excellons dans :',
    items: [
      {
        num: '01',
        title: 'Un accompagnement humain et chaleureux',
        text: 'Nous écoutons vos inquiétudes, comprenons vos attentes et vous traitons comme un membre précieux de notre famille.',
      },
      {
        num: '02',
        title: 'Hospitalité et logistique VIP',
        text: 'Grâce à la grande expérience de notre fondateur dans le secteur des services de luxe, nous prenons en charge chaque détail de vos transferts et de votre séjour hôtelier haut de gamme pour un voyage sans souci.',
      },
      {
        num: '03',
        title: 'Technologies sûres de pointe',
        text: 'Notre clinique est équipée des derniers dispositifs médicaux garantissant un traitement précis et confortable avec des taux de succès mondiaux.',
      },
      {
        num: '04',
        title: 'Compagnie continue',
        text: 'Notre relation ne s’arrête pas à la fin du traitement ; notre équipe médicale reste en contact permanent pour veiller sur votre santé et sécurité, même après votre retour au pays.',
      },
    ],
  },
  contact: {
    eyebrow: 'CONTACTEZ-NOUS',
    title: 'Entrer en contact',
    quote:
      'Notre véritable histoire de succès commence lorsque vous touchez du doigt la chaleur du soin médical et du luxe que nous offrons. Notre équipe de consultants est toujours là pour vous écouter et répondre avec bienveillance à toutes vos questions.. Contactez-nous dès aujourd’hui et franchissez le premier pas vers un sourire sain et beau qui vous rendra la passion de vivre !',
    subtitle: 'Notre équipe de consultants est toujours disponible pour vous écouter et répondre à toutes vos questions avec bienveillance.',
    privacy: 'Les attentes et résultats sont discutés en toute confidentialité.',
    infoTitle: 'Coordonnées',
    email: 'E-mail',
    phone: 'Téléphone',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Ouvrir une conversation WhatsApp',
    address: 'Adresse',
    formTitle: 'Envoyez votre demande',
    form: {
      name: 'Nom complet',
      phone: 'Numéro de téléphone (WhatsApp)',
      service: 'Service qui vous intéresse',
      servicePlaceholder: 'Choisir un service',
      message: 'Votre message',
      messagePlaceholder: 'Décrivez votre cas ou question ici..',
      submit: 'Envoyer la demande',
      sending: 'Envoi..',
      success: 'Votre demande a bien été reçue ! Notre équipe de consultants vous contactera très vite.',
      error: 'Une erreur est survenue lors de l’envoi. Veuillez réessayer ou nous joindre via WhatsApp.',
      required: 'Ce champ est obligatoire',
    },
  },
  footer: {
    tagline: 'Clinique Orec.. Votre famille médicale dans le voyage pour retrouver confiance en votre sourire et beauté',
    care: 'SOIN • PRÉCISION • EXCELLENCE',
    follow: 'Suivez-nous',
    quickLinks: 'Liens rapides',
    servicesTitle: 'Nos services',
    contactTitle: 'Contactez-nous',
    rights: 'Tous droits réservés.',
    location: 'Istanbul — Turquie',
  },
  whatsapp: {
    floatLabel: 'Chat WhatsApp',
    tooltip: 'Écrivez-nous sur WhatsApp — nous répondons généralement en quelques minutes',
    prefill: 'Bonjour Clinique Orec, je souhaite une consultation gratuite.',
    aria: 'Ouvrir une conversation WhatsApp avec la Clinique Orec',
  },
}

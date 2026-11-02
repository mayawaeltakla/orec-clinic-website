import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    title: 'Orec Clinic.. Your medical family on a journey to restore your confidence in your smile and beauty',
    description:
      'Orec Clinic in the heart of Istanbul — dental aesthetics and treatment, cosmetic surgery, hair transplantation, and bariatric surgery, officially licensed by the Turkish Ministry of Health and Ministry of Tourism.',
  },
  brand: {
    name: 'Orec Clinic',
    suffix: 'عيادة أوريك',
    tagline: 'Your medical family on a journey to restore your confidence in your smile and beauty',
    care: 'CARE • PRECISION • EXCELLENCE',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About Us',
    why: 'Why Us',
    contact: 'Contact',
    book: 'Book a Consultation',
    servicesIndex: 'Service Departments',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeToggle: 'Switch between dark and light mode',
  },
  hero: {
    eyebrow: 'CARE • PRECISION • EXCELLENCE',
    title1: 'Orec Clinic..',
    title2: 'Your medical family on a journey to restore your confidence in your smile and beauty',
    badges: ['In the heart of Istanbul', 'Since 2015', 'Officially licensed by the Ministry of Health and Ministry of Tourism'],
    ctaPrimary: 'Contact Us Today',
    ctaSecondary: 'Explore Our Services',
    location: 'ISTANBUL · EST. 2015',
    prevSlide: 'Previous slide',
    nextSlide: 'Next slide',
    stats: [
      { value: '2015', label: 'Founded in Istanbul' },
      { value: '+10', label: 'Languages we speak with you' },
      { value: '4', label: 'Specialized medical departments' },
    ],
  },
  services: {
    eyebrow: 'OUR SERVICES',
    title: 'Services',
    subtitle: 'Four integrated medical departments under one roof, led by elite Turkish and Arab consultants, with full follow-up from your first consultation until you return home.',
    viewAll: 'View all services',
    categories: [
      {
        id: 'dental',
        num: '01',
        code: 'DENTAL',
        title: 'Dental Aesthetics & Treatment',
        description: 'Our flagship specialty: from immediate implants to the Hollywood Smile, with precise digital technology and world-class zirconia and E-max materials.',
        items: [
          { name: 'Dental Implants', en: 'زراعة الأسنان' },
          { name: 'Hollywood Smile', en: 'ابتسامة هوليود' },
          { name: 'Restorative Dentistry', en: 'علاج وترميم الأسنان' },
          { name: 'Teeth Whitening', en: 'تبييض الأسنان' },
        ],
      },
      {
        id: 'cosmetic',
        num: '02',
        code: 'AESTHETIC',
        title: 'Cosmetic Surgery',
        description: 'Face and body surgery performed by specialized surgeons, with 3D planning and complete pre- and post-operative care.',
        items: [],
        groups: [
          {
            name: 'Facial Surgery',
            items: [
              'Facelift / Facial Aesthetics',
              'Brow Lift',
              'Rhinoplasty',
              'Otoplasty (Ear Aesthetics)',
              'Lip Aesthetics (Cheiloplasty)',
              'Neck Lift (Platysmaplasty)',
              'Eyelid Surgery (Blepharoplasty)',
              'Forehead Reduction / Contouring',
              'Chin Augmentation (Genioplasty)',
              'Cheek Enhancement / Dimples',
            ],
          },
          {
            name: 'Body Contouring',
            items: [
              'Body Contouring / Liposuction',
              'Breast Surgery (Mammoplasty)',
              'Gynecomastia (Male Breast Reduction)',
              'Tummy Tuck (Abdominoplasty)',
              'Arm Lift (Brachioplasty)',
              'Thigh Lift (Thighplasty)',
            ],
          },
          {
            name: 'Intimate Area Aesthetics',
            items: [
              'Buttock Aesthetics (BBL)',
              'Vaginal Rejuvenation / Labiaplasty',
              'Vaginal Fat & Filler Injection',
              'Vaginoplasty',
              'Penile Aesthetics',
              'Penile Lengthening',
            ],
          },
        ],
      },
      {
        id: 'hair',
        num: '03',
        code: 'HAIR',
        title: 'Hair Transplantation',
        description: 'The latest Sapphire and DHI techniques with a natural hairline design that harmonizes with your facial features.',
        items: [
          { name: 'Scalp Hair Transplantation', en: 'زراعة شعر الرأس' },
          { name: 'Beard & Mustache Transplantation', en: 'زراعة اللحية والشارب' },
          { name: 'Eyebrow Transplantation', en: 'زراعة شعر الحاجب' },
        ],
      },
      {
        id: 'obesity',
        num: '04',
        code: 'BARIATRIC',
        title: 'Bariatric Surgery',
        description: 'Surgical weight-loss solutions supervised by a nutrition and behavioral team, with dietary follow-up until you reach your ideal weight.',
        items: [
          { name: 'Gastric Sleeve', en: 'تكميم المعدة' },
          { name: 'Gastric Bypass', en: 'تحويل مسار المعدة' },
          { name: 'Gastric Balloon', en: 'بالون المعدة' },
          { name: 'Gastric Botox', en: 'بوتوكس المعدة' },
        ],
      },
    ],
  },
  dental: {
    eyebrow: '01 · DENTAL',
    title: 'Dental Aesthetics & Treatment',
    subtitle: 'Our most advanced department: four complete treatment journeys from implants to whitening, all starting with an accurate digital diagnosis and ending with a smile that suits you.',
    cta: 'Book a free consultation',
    sections: [
      {
        num: '01',
        name: 'Dental Implants',
        tagline: 'Dental implants in Turkey | The ideal, permanent solution to replace missing teeth',
        intro:
          'Dental implants are the latest revolution in modern dentistry — the most durable medical alternative to replace a missing or worn tooth without damaging adjacent teeth. At Orec Clinic, we combine advanced digital technology with Turkey’s most skilled dentists to ensure world-class success rates and a pain-free treatment experience.',
        blocks: [
          {
            title: 'Core components of a dental implant',
            text: 'The implanted tooth consists of three parts that fuse together to give the look and feel of a natural tooth: the Fixture — a pure titanium post that osseointegrates with the bone without rejection or allergy; the Abutment — the connector placed over the fixture; and the Crown — made of zirconia or E-max so it blends naturally with your teeth in strength and shine.',
          },
          {
            title: 'Standard (conventional) implants',
            text: 'The roots are placed into the jawbone tissue, then we wait 3–4 months for the bone to fully fuse with the implant, after which the final tooth is permanently secured.',
          },
          {
            title: 'Immediate implants',
            text: 'An advanced technique where the implant is placed directly — usually right after extracting the damaged tooth — skipping long waiting periods and finishing within one or two sessions. Ideal for urgent travel schedules and patients with excellent bone density.',
          },
          {
            title: 'Full-arch fixed implants (All-on-4 & All-on-6)',
            text: 'For complete tooth loss with receded gums, we place only 4 or 6 roots; two of them are angled up to 65 degrees for maximum contact and stability with the bone while avoiding the sinuses, then a full denture is permanently fixed on these roots.',
          },
        ],
        candidatesTitle: 'Who is a candidate for dental implants?',
        candidates: [
          'People over 17–18 years of age, as the jaw is still growing before that.',
          'Cases of tooth loss due to accidents, disease, or contact sports.',
          'Those who have trouble chewing or pronouncing sounds due to missing teeth.',
        ],
        tipsTitle: 'Your treatment journey steps',
        tips: [
          'Inform your dentist of any chronic condition (hemophilia, diabetes, hypertension); diabetic patients must have a stable long-term HbA1c.',
          'A 3D CT scan maps bone thickness and density, nerve endings, and sinus locations to determine drilling sites with extreme precision.',
          'The procedure is performed under local anesthesia (or conscious sedation upon request), pain-free, following the pre-planned digital plan.',
        ],
        imageNote: 'Jaw with implants, abutments and crowns',
      },
      {
        num: '02',
        name: 'Hollywood Smile',
        tagline: 'Hollywood Smile in Turkey | The secret of attraction, confidence, and lasting radiance',
        intro:
          'A beautiful smile means self-confidence — and the Hollywood Smile in Turkey is now within your reach. At Orec Clinic we offer the finest porcelain veneers for harmonious teeth with a bright, glowing white: a healthy, even, well-aligned look that lasts a very long time without discoloration or staining.',
        blocks: [
          {
            title: 'How the procedure works',
            text: 'First, comprehensive treatment of all pre-existing dental problems (cavities, gum inflammation); then minimal microscopic preparation of a thin enamel layer to make room for the veneers; finally, the porcelain veneers are bonded with extreme precision using highly durable medical adhesives.',
          },
          {
            title: 'Materials used',
            text: 'Veneers are crafted from enhanced German zirconia or pure E-max, placed on the upper row only, the lower only, or both for a perfect look. Design and laboratory work take two to three weeks (including 2–3 clinic sessions).',
          },
          {
            title: 'Medical honesty before veneers',
            text: 'We make sure your case truly needs veneers; if simple whitening would suffice, we advise against them, because enamel reduction is a permanent, irreversible procedure. That is why we treat all dental issues first, replace badly damaged teeth with implants, and perform root canal treatment when needed before bonding.',
          },
        ],
        candidatesTitle: 'Who is a candidate for a Hollywood Smile?',
        candidates: [
          'People with severe, stubborn tooth discoloration and staining.',
          'Heavy consumers of staining foods and drinks — coffee, tea, tobacco — who want a solution that will not stain in the future.',
          'Gaps between teeth, partially broken teeth, or teeth uneven in length and size.',
        ],
        tipsTitle: 'Aftercare tips',
        tips: [
          'Daily brushing, toothpaste, and dental floss to prevent tartar buildup at the gum line.',
          'Avoid biting very hard objects (opening packages, biting pens) to protect the veneers from chipping.',
          'Visit your dentist every 6 months for check-up and professional cleaning.',
        ],
        imageNote: 'A bright attractive smile before and after veneers',
      },
      {
        num: '03',
        name: 'Restorative Dentistry',
        tagline: 'Your dental health is the infrastructure of your smile’s beauty',
        intro:
          'Before any cosmetic procedure, your teeth must enjoy health and strength. The Restorative Dentistry department at Orec Clinic is your destination to get rid of pain, cavities, and functional problems with the latest minimally invasive techniques and the highest standards of comfort and safety.',
        blocks: [
          {
            title: 'Composite (cosmetic) fillings',
            text: 'We remove decay completely and replace it with high-quality light-cured composite fillings that blend perfectly with the natural color and look of your tooth, restoring its strength and original shape without any disfiguring trace.',
          },
          {
            title: 'Root canal treatment',
            text: 'We use the latest precise digital devices to deeply clean infected, inflamed nerve canals and eliminate pain permanently — usually in one quick, comfortable session under effective local anesthesia.',
          },
          {
            title: 'Crowns & bridges',
            text: 'To protect weak, broken, or root-canaled teeth, we use advanced zirconia and porcelain crowns that give the tooth hardness similar to natural enamel and withstand high chewing forces.',
          },
          {
            title: 'Gum disease treatment & grafting',
            text: 'Healthy gums frame a beautiful smile: deep scaling, gum pocket treatment, and laser gum grafting to eliminate darkening, inflammation, and bad breath.',
          },
        ],
        candidatesTitle: 'Cases that need restorative dentistry',
        candidates: [
          'Sharp pain or pulsing when consuming cold or hot food and drinks.',
          'Gaps, pits, or fractures in tooth structure due to decay or excessive pressure.',
          'Bleeding gums while brushing or an unpleasant mouth odor.',
        ],
        imageNote: 'Illustration of root canal treatment or precise cosmetic filling',
      },
      {
        num: '04',
        name: 'Teeth Whitening',
        tagline: 'Teeth whitening in Turkey | A fast, safe, non-surgical solution for a vibrant smile',
        intro:
          'If you want to restore the natural whiteness of your teeth and get rid of the yellowing caused by daily lifestyle — without drilling or veneers — the Teeth Whitening department at Orec Clinic offers the most effective and enamel-safe medical solutions.',
        blocks: [
          {
            title: 'In-office laser whitening (Zoom)',
            text: 'One quick session of less than an hour: a medical whitening gel of measured concentration is applied, then activated by laser or an advanced Zoom device — teeth brighten instantly by 6 to 8 shades, with complete gum protection using a special barrier.',
          },
          {
            title: 'Custom home whitening kits',
            text: 'We take an impression of your teeth and craft flexible trays that perfectly match your mouth, delivered with a safe home-concentration gel. Use them for several days to prolong clinic results or achieve gradual, comfortable brightening.',
          },
        ],
        candidatesTitle: 'Who is a candidate for teeth whitening?',
        candidates: [
          'Yellowing caused by smoking and heavy consumption of tea, coffee, and soft drinks.',
          'Natural decline of tooth whiteness with age.',
          'Patients with even, well-aligned teeth who only need brightness and a lighter shade.',
        ],
        tipsTitle: 'Keeping your teeth white after the session',
        tips: [
          'Avoid all colored foods and drinks (coffee, tea, curry, tomato) and smoking for 48 hours — the “white diet” period — as teeth absorb pigments more easily.',
          'Rinse with water immediately after consuming any dark drink in the future.',
          'Use a whitening toothpaste once or twice a week as periodic maintenance, following your Orec dentist’s guidance.',
        ],
        imageNote: 'Clear visual before-and-after comparison of laser whitening',
      },
    ],
  },
  about: {
    eyebrow: 'OREC CLINIC',
    title: 'About Orec Clinic',
    intro: {
      title: 'Introduction',
      text: 'Welcome to Orec Clinic, where we believe that aesthetics and medical care are not passing procedures but a warm human journey that starts by listening to you and ends with the sight of your bright smile. Since opening our doors in the heart of Istanbul in 2015, we have pledged to be the support and trusted advisor of everyone seeking positive change, combining the precision of modern medicine with the warmth of family care, under our official licenses from the Turkish Ministry of Health and Ministry of Tourism for medical tourism.',
    },
    vision: {
      title: 'Our vision & philosophy',
      text: 'We do not believe in artificial change that erases features; we see beauty in the spontaneity and naturalness of your look. With love, we focus on highlighting the natural beauty of your face and correcting imperfections with the gentlest scientific methods, giving you a result that suits you, with complete peace of mind throughout your journey with us.',
    },
    specialty: {
      title: 'Our flagship specialty: dental treatment & aesthetics',
      text: 'Because the smile is the first thing that connects us to others, we dedicated at Orec Clinic a fully integrated, highly advanced dental department staffed by elite dentists and consultants to offer you:',
      items: [
        { title: 'Digital smile design', text: 'Designing a charming Hollywood Smile that precisely matches your natural facial features.' },
        { title: 'Immediate dental implants', text: 'With the latest global techniques and minimal pain, so you return to your normal lifestyle quickly and confidently.' },
        { title: 'Comprehensive dental treatments', text: 'From root canals and aesthetic restorations (zirconia and E-max) and whitening, to cosmetic gum surgery and functional problem treatment.' },
      ],
    },
    founder: {
      title: 'A word from the heart.. the clinic founder',
      quote:
        'I am delighted to bring this human passion, commitment to quality, and trust-based approach of building long-term partnerships with our clients to Orec Clinic. We did not want it to be just a dry, conventional clinic, but a place where you feel safe and comfortable — especially for everyone dreaming of a healthy, beautiful smile that rekindles their passion for life. For me, our true success is not measured by the number of operations, but by the sincere smiles we see on your faces and the comfort you feel from the first moment of welcome until you return home safe and sound.',
      closing:
        'Our true success story begins when you touch the warmth of the medical care and luxury we offer. Our consulting team is always there to listen and answer all your questions kindly.. Contact us today and take your first step toward a healthy, beautiful smile that rekindles your passion for life!',
      name: 'Dr. MHD GHIATH ALZUHAILI',
      nameEn: 'د. محمد غياث الزحيلي',
      role: 'Founder & CEO of Orec Clinic',
    },
    cta: 'Contact us today',
    license: 'Officially licensed by the Turkish Ministry of Health and Ministry of Tourism for health tourism',
  },
  why: {
    eyebrow: 'WHY OREC',
    title: 'Why do patients choose us as their family?',
    intro: 'Bridges of love and trust have extended between us and thousands of friends and patients coming from the Middle East, Europe, North Africa, and North America, because we excel at:',
    items: [
      {
        num: '01',
        title: 'Humane, friendly care',
        text: 'We listen to your concerns, understand your aspirations, and treat you as a cherished member of our family.',
      },
      {
        num: '02',
        title: 'VIP hospitality & logistics',
        text: 'Thanks to our founder’s deep experience in the luxury services sector, we take care of every detail of your transportation and premium hotel stay so you enjoy your trip worry-free.',
      },
      {
        num: '03',
        title: 'The latest safe technologies',
        text: 'Our clinic is equipped with the latest medical devices that guarantee you precise, comfortable treatment with world-class success rates.',
      },
      {
        num: '04',
        title: 'Continuous companionship',
        text: 'Our relationship does not end when treatment ends; our medical team stays in permanent contact to check on your health and safety even after you return to your country.',
      },
    ],
  },
  contact: {
    eyebrow: 'CONTACT US',
    title: 'Get in touch',
    quote:
      'Our true success story begins when you touch the warmth of the medical care and luxury we offer. Our consulting team is always there to listen and answer all your questions kindly.. Contact us today and take your first step toward a healthy, beautiful smile that rekindles your passion for life!',
    subtitle: 'Our consulting team is always available to listen to you and answer all your questions with kindness.',
    privacy: 'Expectations and outcomes are discussed with complete privacy and confidentiality.',
    infoTitle: 'Contact information',
    email: 'Email',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Open a WhatsApp chat',
    address: 'Address',
    formTitle: 'Send your request',
    form: {
      name: 'Full name',
      phone: 'Phone number (WhatsApp)',
      service: 'Service you are interested in',
      servicePlaceholder: 'Choose a service',
      message: 'Your message',
      messagePlaceholder: 'Describe your case or question here..',
      submit: 'Send your request',
      sending: 'Sending..',
      success: 'Your request has been received! Our consulting team will contact you shortly.',
      error: 'An error occurred while sending. Please try again or reach us via WhatsApp.',
      required: 'This field is required',
    },
  },
  footer: {
    tagline: 'Orec Clinic.. Your medical family on a journey to restore your confidence in your smile and beauty',
    care: 'CARE • PRECISION • EXCELLENCE',
    follow: 'Follow us',
    quickLinks: 'Quick links',
    servicesTitle: 'Our services',
    contactTitle: 'Contact us',
    rights: 'All rights reserved.',
    location: 'Istanbul — Türkiye',
  },
  whatsapp: {
    floatLabel: 'WhatsApp chat',
    tooltip: 'Message us on WhatsApp — we usually reply within minutes',
    prefill: 'Hello Orec Clinic, I would like a free consultation.',
    aria: 'Open a WhatsApp chat with Orec Clinic',
  },
}

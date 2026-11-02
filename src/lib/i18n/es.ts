import type { Dictionary } from './types'

export const es: Dictionary = {
  meta: {
    title: 'Clínica Orec.. Su familia médica en el camino para recuperar la confianza en su sonrisa y belleza',
    description:
      'Clínica Orec en el corazón de Estambul — estética y tratamiento dental, cirugía estética, trasplante capilar y cirugía bariátrica, con licencia oficial del Ministerio de Salud y de Turismo de Turquía.',
  },
  brand: {
    name: 'Clínica Orec',
    suffix: 'Orec Clinic',
    tagline: 'Su familia médica en el camino para recuperar la confianza en su sonrisa y belleza',
    care: 'CUIDADO • PRECISIÓN • EXCELENCIA',
  },
  nav: {
    home: 'Inicio',
    services: 'Servicios',
    about: 'Nosotros',
    why: '¿Por qué nosotros?',
    contact: 'Contacto',
    book: 'Reserve su consulta',
    servicesIndex: 'Departamentos',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    themeToggle: 'Cambiar entre modo oscuro y claro',
  },
  hero: {
    eyebrow: 'CUIDADO • PRECISIÓN • EXCELENCIA',
    title1: 'Clínica Orec..',
    title2: 'Su familia médica en el camino para recuperar la confianza en su sonrisa y belleza',
    badges: ['En el corazón de Estambul', 'Desde 2015', 'Con licencia oficial del Ministerio de Salud y de Turismo'],
    ctaPrimary: 'Contáctenos hoy',
    ctaSecondary: 'Descubra nuestros servicios',
    location: 'ESTAMBUL · DESDE 2015',
    prevSlide: 'Diapositiva anterior',
    nextSlide: 'Diapositiva siguiente',
    stats: [
      { value: '2015', label: 'Fundación en Estambul' },
      { value: '+10', label: 'Idiomas que hablamos' },
      { value: '4', label: 'Departamentos médicos' },
    ],
  },
  services: {
    eyebrow: 'NUESTROS SERVICIOS',
    title: 'Servicios',
    subtitle: 'Cuatro departamentos médicos integrados bajo un mismo techo, dirigidos por consultores turcos y árabes de élite, con acompañamiento completo desde la primera consulta hasta su regreso a casa.',
    viewAll: 'Ver todos los servicios',
    categories: [
      {
        id: 'dental',
        num: '01',
        code: 'DENTAL',
        title: 'Estética y Tratamiento Dental',
        description: 'Nuestra especialidad principal: desde implantes inmediatos hasta la Sonrisa de Hollywood, con tecnología digital precisa y materiales de circonio y E-max de clase mundial.',
        items: [
          { name: 'Implantes dentales', en: 'Dental Implants' },
          { name: 'Sonrisa de Hollywood', en: 'Hollywood Smile' },
          { name: 'Odontología restauradora', en: 'Restorative Dentistry' },
          { name: 'Blanqueamiento dental', en: 'Teeth Whitening' },
        ],
      },
      {
        id: 'cosmetic',
        num: '02',
        code: 'ESTÉTICA',
        title: 'Cirugía Estética',
        description: 'Cirugías de rostro y cuerpo realizadas por cirujanos especializados, con planificación 3D y atención pre y postoperatoria completa.',
        items: [],
        groups: [
          {
            name: 'Cirugía facial',
            items: [
              'Lifting facial (Facelift)',
              'Lifting de cejas (Brow Lift)',
              'Rinoplastia',
              'Otoplastia (orejas)',
              'Estética de labios (Cheiloplasty)',
              'Lifting de cuello',
              'Blefaroplastia (párpados)',
              'Contorneado de frente',
              'Mentoplastia (mentón)',
              'Aumento de mejillas / hoyuelos',
            ],
          },
          {
            name: 'Contorneado corporal',
            items: [
              'Liposucción y contorneado corporal',
              'Cirugía de mama (Mammoplasty)',
              'Ginecomastia',
              'Abdominoplastia (lifting de abdomen)',
              'Lifting de brazos',
              'Lifting de muslos',
            ],
          },
          {
            name: 'Estética íntima',
            items: [
              'Estética de glúteos (BBL)',
              'Rejuvenecimiento vaginal / Labiaplastia',
              'Inyección de grasa y relleno vaginal',
              'Vaginoplastia',
              'Estética y mejora del pene',
              'Alargamiento de pene',
            ],
          },
        ],
      },
      {
        id: 'hair',
        num: '03',
        code: 'CAPILAR',
        title: 'Trasplante Capilar',
        description: 'Las técnicas más avanzadas de Zafiro y DHI con un diseño de línea capilar natural que armoniza con sus rasgos.',
        items: [
          { name: 'Trasplante de cuero cabelludo', en: 'Scalp Hair Transplantation' },
          { name: 'Trasplante de barba y bigote', en: 'Beard & Mustache Transplantation' },
          { name: 'Trasplante de cejas', en: 'Eyebrow Transplantation' },
        ],
      },
      {
        id: 'obesity',
        num: '04',
        code: 'BARIÁTRICA',
        title: 'Cirugía Bariátrica',
        description: 'Soluciones quirúrgicas para perder peso supervisadas por un equipo de nutrición y conducta, con seguimiento dietético hasta su peso ideal.',
        items: [
          { name: 'Manga gástrica', en: 'Gastric Sleeve' },
          { name: 'Bypass gástrico', en: 'Gastric Bypass' },
          { name: 'Balón gástrico', en: 'Gastric Balloon' },
          { name: 'Bótox gástrico', en: 'Gastric Botox' },
        ],
      },
    ],
  },
  dental: {
    eyebrow: '01 · DENTAL',
    title: 'Estética y Tratamiento Dental',
    subtitle: 'Nuestro departamento más avanzado: cuatro recorridos terapéuticos completos, desde implantes hasta blanqueamiento; todos comienzan con un diagnóstico digital preciso y terminan con una sonrisa hecha a su medida.',
    cta: 'Reserve una consulta gratuita',
    sections: [
      {
        num: '01',
        name: 'Implantes dentales',
        tagline: 'Implantes dentales en Turquía | La solución ideal y definitiva para reponer dientes perdidos',
        intro:
          'Los implantes dentales son la revolución más reciente de la odontología moderna: la alternativa médica más duradera para reponer un diente perdido o desgastado sin dañar los dientes vecinos. En la Clínica Orec combinamos la tecnología digital avanzada con los dentistas más hábiles de Turquía para garantizar tasas de éxito de clase mundial y una experiencia sin dolor.',
        blocks: [
          {
            title: 'Componentes principales del implante',
            text: 'El diente implantado consta de tres partes que se fusionan para dar el aspecto y la sensación de un diente natural: el Fixture — un tornillo de titanio puro que se osteointegra con el hueso sin rechazo ni alergias; el Pilar (Abutment) — la pieza conectora sobre el fixture; y la Corona — de circonio o E-max para que se mezcle naturalmente con sus dientes en fuerza y brillo.',
          },
          {
            title: 'Implantes convencionales',
            text: 'Las raíces se insertan en el tejido óseo del maxilar y esperamos de 3 a 4 meses a que el hueso se fusione completamente con el implante; luego se fija el diente definitivo de forma permanente.',
          },
          {
            title: 'Implantes inmediatos',
            text: 'Una técnica avanzada en la que el implante se coloca directamente — generalmente justo después de extraer el diente dañado — omitiendo largas esperas y finalizando en una o dos sesiones. Ideal para viajes urgentes y pacientes con excelente densidad ósea.',
          },
          {
            title: 'Implantes de arco completo fijo (All-on-4 y All-on-6)',
            text: 'Para pérdida dental completa con encías retraídas, colocamos solo 4 o 6 raíces; dos de ellas con una inclinación de hasta 65 grados para máximo contacto y estabilidad con el hueso evitando los senos paranasales, y luego se fija una dentadura completa de forma permanente sobre esas raíces.',
          },
        ],
        candidatesTitle: '¿Quién es candidato a implantes dentales?',
        candidates: [
          'Personas mayores de 17-18 años, ya que antes la mandíbula sigue creciendo.',
          'Casos de pérdida dental por accidentes, enfermedades o deportes de contacto.',
          'Quienes tienen dificultad para masticar o pronunciar sonidos por dientes perdidos.',
        ],
        tipsTitle: 'Etapas de su viaje terapéutico',
        tips: [
          'Informe a su dentista sobre cualquier enfermedad crónica (hemofilia, diabetes, hipertensión); los diabéticos deben tener una hemoglobina glucosilada estable.',
          'Un TAC 3D mapea el grosor y densidad ósea, terminaciones nerviosas y senos para definir los puntos de perforación con extrema precisión.',
          'El procedimiento se realiza con anestesia local (o sedación consciente si lo desea), sin dolor y según el plan digital previo.',
        ],
        imageNote: 'Maxilar con implantes, pilares y coronas',
      },
      {
        num: '02',
        name: 'Sonrisa de Hollywood',
        tagline: 'Sonrisa de Hollywood en Turquía | El secreto del atractivo, la confianza y el brillo duradero',
        intro:
          'Una sonrisa hermosa significa confianza en uno mismo — y la Sonrisa de Hollywood en Turquía ya está a su alcance. En la Clínica Orec ofrecemos las mejores carillas de porcelana para dientes armoniosos con un blanco brillante: un aspecto saludable, uniforme y alineado que dura muchísimo tiempo sin decolorarse ni mancharse.',
        blocks: [
          {
            title: '¿Cómo se realiza el procedimiento?',
            text: 'Primero, tratamiento integral de todos los problemas dentales previos (caries, inflamación de encías); luego una reducción microscópica mínima de una capa delgada de esmalte para hacer espacio a las carillas; finalmente, las carillas de porcelana se fijan con extrema precisión usando adhesivos médicos de gran dureza.',
          },
          {
            title: 'Materiales utilizados',
            text: 'Las carillas se fabrican en circonio alemán mejorado o E-max puro, y se colocan solo en la arcada superior, solo en la inferior o en ambas para un aspecto perfecto. El diseño y trabajo de laboratorio tardan de dos a tres semanas (incluye 2-3 sesiones en la clínica).',
          },
          {
            title: 'Honestidad médica antes de las carillas',
            text: 'Nos aseguramos de que su caso realmente necesite carillas; si un simple blanqueamiento bastara, le aconsejamos no hacerlas, porque la reducción del esmalte es un procedimiento permanente e irreversible. Por eso tratamos antes todos los problemas dentales, reemplazamos los dientes muy dañados por implantes y realizamos tratamientos de conducto cuando es necesario.',
          },
        ],
        candidatesTitle: '¿Quién es candidato a la Sonrisa de Hollywood?',
        candidates: [
          'Personas con decoloración y manchas dentales severas y persistentes.',
          'Grandes consumidores de café, té y tabaco que desean una solución que no se manche en el futuro.',
          'Espacios entre los dientes, dientes parcialmente rotos o desiguales en longitud y tamaño.',
        ],
        tipsTitle: 'Consejos después del tratamiento',
        tips: [
          'Cepillado diario con pasta e hilo dental para evitar el sarro en el borde de las encías.',
          'Evite morder objetos muy duros (abrir envases, morder bolígrafos) para proteger las carillas.',
          'Visite a su dentista cada 6 meses para revisión y limpieza profesional.',
        ],
        imageNote: 'Sonrisa brillante y atractiva antes y después de las carillas',
      },
      {
        num: '03',
        name: 'Odontología restauradora',
        tagline: 'La salud de sus dientes es la base de la belleza de su sonrisa',
        intro:
          'Antes de pensar en cualquier procedimiento estético, sus dientes deben gozar de salud y fuerza. El departamento de Odontología Restauradora de la Clínica Orec es su destino para eliminar dolores, caries y problemas funcionales con las técnicas menos invasivas y los más altos estándares de comodidad y seguridad.',
        blocks: [
          {
            title: 'Empastes estéticos (composite)',
            text: 'Eliminamos la caries por completo y la reemplazamos con empastes de composite fotocurado de alta calidad que se funden con el color y aspecto natural del diente, devolviéndole fuerza y forma original sin rastro antiestético.',
          },
          {
            title: 'Tratamiento de conducto (endodoncia)',
            text: 'Usamos los dispositivos digitales más precisos para limpiar profundamente los conductos nerviosos infectados e inflamados y eliminar el dolor de forma permanente, generalmente en una sola sesión rápida y cómoda con anestesia local efectiva.',
          },
          {
            title: 'Coronas y puentes',
            text: 'Para proteger dientes débiles, rotos o con endodoncia, usamos coronas avanzadas de circonio y porcelana que dan al diente una dureza similar al esmalte natural y resisten altas fuerzas de masticación.',
          },
          {
            title: 'Tratamiento e injerto de encías',
            text: 'Las encías sanas enmarcan la sonrisa hermosa: raspado profundo, tratamiento de bolsas periodontales e injerto de encía con láser para eliminar oscurecimiento, inflamación y mal aliento.',
          },
        ],
        candidatesTitle: 'Casos que necesitan odontología restauradora',
        candidates: [
          'Dolor agudo o pulsante al consumir alimentos y bebidas frías o calientes.',
          'Huecos, perforaciones o fracturas en la estructura del diente por caries o presión excesiva.',
          'Sangrado de encías al cepillarse o mal aliento persistente.',
        ],
        imageNote: 'Ilustración de endodoncia o empaste estético de precisión',
      },
      {
        num: '04',
        name: 'Blanqueamiento dental',
        tagline: 'Blanqueamiento dental en Turquía | Solución rápida, segura y no quirúrgica para una sonrisa llena de vida',
        intro:
          'Si desea recuperar el blanco natural de sus dientes y eliminar el amarilleo causado por el estilo de vida diario — sin desgaste ni carillas — el departamento de Blanqueamiento de la Clínica Orec le ofrece las soluciones médicas más eficaces y seguras para el esmalte.',
        blocks: [
          {
            title: 'Blanqueamiento con láser en la clínica (Zoom)',
            text: 'Una sola sesión rápida de menos de una hora: se aplica un gel blanqueador médico de concentración medida y se activa con láser o un dispositivo Zoom avanzado — los dientes se aclaran al instante de 6 a 8 tonos, con protección total de las encías mediante un aislante especial.',
          },
          {
            title: 'Férulas de blanqueamiento domiciliarias',
            text: 'Tomamos una impresión de sus dientes y fabricamos férulas flexibles que se ajustan perfectamente a su boca, entregadas con un gel de concentración segura para el hogar. Úselas durante varios días para prolongar los resultados o lograr un aclaramiento gradual y cómodo.',
          },
        ],
        candidatesTitle: '¿Quién es candidato al blanqueamiento?',
        candidates: [
          'Amarilleo causado por el tabaco y el consumo frecuente de té, café y refrescos.',
          'Disminución natural del blanco dental con la edad.',
          'Pacientes con dientes alineados y uniformes que solo necesitan brillo y un tono más claro.',
        ],
        tipsTitle: 'Mantener el blanco después de la sesión',
        tips: [
          'Evite todos los alimentos y bebidas con color (café, té, curry, tomate) y el tabaco durante 48 horas — la "dieta blanca" — ya que los dientes absorben pigmentos más fácilmente.',
          'Enjuáguese con agua inmediatamente después de consumir cualquier bebida oscura.',
          'Use una pasta dental blanqueadora una o dos veces por semana como mantenimiento, según las indicaciones de su dentista en Orec.',
        ],
        imageNote: 'Comparación visual clara antes y después del blanqueamiento láser',
      },
    ],
  },
  about: {
    eyebrow: 'CLÍNICA OREC',
    title: 'Sobre la Clínica Orec',
    intro: {
      title: 'Introducción',
      text: 'Bienvenido a la Clínica Orec, donde creemos que la estética y la atención médica no son procedimientos pasajeros, sino un cálido viaje humano que comienza escuchándole y termina con la visión de su sonrisa radiante. Desde que abrimos nuestras puertas en el corazón de Estambul en 2015, nos hemos comprometido a ser el apoyo y el asesor de confianza de todos los que buscan un cambio positivo, combinando la precisión de la medicina moderna con la calidez del cuidado familiar, bajo nuestras licencias oficiales del Ministerio de Salud y de Turismo de Turquía para el turismo médico.',
    },
    vision: {
      title: 'Nuestra visión y filosofía',
      text: 'No creemos en el cambio artificial que borra los rasgos; vemos la belleza en la espontaneidad y naturalidad de su imagen. Con cariño, nos enfocamos en resaltar la belleza natural de su rostro y corregir imperfecciones con los métodos científicos más suaves, para darle un resultado que le favorezca y una tranquilidad total durante todo el viaje con nosotros.',
    },
    specialty: {
      title: 'Nuestra especialidad destacada: tratamiento y estética dental',
      text: 'Porque la sonrisa es lo primero que nos conecta con los demás, dedicamos en la Clínica Orec un departamento dental completamente integrado y muy avanzado, con un equipo de élite de dentistas y consultores para ofrecerle:',
      items: [
        { title: 'Diseño digital de sonrisa', text: 'Diseño de una encantadora Sonrisa de Hollywood que se adapta con precisión a sus rasgos faciales naturales.' },
        { title: 'Implantes dentales inmediatos', text: 'Con las técnicas globales más recientes y el mínimo dolor, para que regrese a su vida normal rápida y confiadamente.' },
        { title: 'Tratamientos dentales integrales', text: 'Desde endodoncias y restauraciones estéticas (circonio y E-max) y blanqueamientos, hasta cirugía estética de encías y tratamiento de problemas funcionales.' },
      ],
    },
    founder: {
      title: 'Una palabra del corazón.. el fundador de la clínica',
      quote:
        'Me complace trasladar esta pasión humana, el compromiso con la calidad y el enfoque basado en la confianza y la construcción de alianzas a largo plazo con nuestros clientes a la Clínica Orec. No quisimos que fuera una clínica convencional y fría, sino un lugar donde se sienta seguro y cómodo — especialmente para todos los que sueñan con una sonrisa sana y hermosa que les devuelva la pasión por la vida. Para mí, nuestro verdadero éxito no se mide por el número de operaciones, sino por las sonrisas sinceras que vemos en sus rostros y la comodidad que perciben desde el primer momento de bienvenida hasta que regresan a casa sanos y salvos.',
      closing:
        'Nuestra verdadera historia de éxito comienza cuando usted toca la calidez de la atención médica y el lujo que ofrecemos. Nuestro equipo de consultores siempre está disponible para escucharle y responder a todas sus preguntas con amabilidad.. ¡Contáctenos hoy y dé el primer paso hacia una sonrisa sana y hermosa que le devuelva la pasión por la vida!',
      name: 'Dr. MHD GHIATH ALZUHAILI',
      nameEn: 'د. محمد غياث الزحيلي',
      role: 'Fundador y Director Ejecutivo de la Clínica Orec',
    },
    cta: 'Contáctenos hoy',
    license: 'Con licencia oficial del Ministerio de Salud y de Turismo de Turquía para el turismo de salud',
  },
  why: {
    eyebrow: '¿POR QUÉ OREC?',
    title: '¿Por qué los pacientes nos eligen como su familia?',
    intro: 'Puentes de amor y confianza nos unen a miles de amigos y pacientes del Medio Oriente, Europa, el norte de África y América del Norte, porque nos destacamos en:',
    items: [
      {
        num: '01',
        title: 'Trato humano y cordial',
        text: 'Escuchamos sus preocupaciones, entendemos sus aspiraciones y le tratamos como un miembro querido de nuestra familia.',
      },
      {
        num: '02',
        title: 'Hospitalidad y logística VIP',
        text: 'Gracias a la amplia experiencia de nuestro fundador en el sector de servicios de lujo, nos ocupamos de cada detalle de sus traslados y su estadía hotelera premium para que disfrute su viaje sin preocupaciones.',
      },
      {
        num: '03',
        title: 'Tecnología segura de vanguardia',
        text: 'Nuestra clínica está equipada con los dispositivos médicos más modernos que garantizan un tratamiento preciso y confortable con tasas de éxito de clase mundial.',
      },
      {
        num: '04',
        title: 'Acompañamiento continuo',
        text: 'Nuestra relación no termina cuando termina el tratamiento; nuestro equipo médico mantiene contacto permanente para velar por su salud y bienestar incluso después de regresar a su país.',
      },
    ],
  },
  contact: {
    eyebrow: 'CONTÁCTENOS',
    title: 'Póngase en contacto',
    quote:
      'Nuestra verdadera historia de éxito comienza cuando usted toca la calidez de la atención médica y el lujo que ofrecemos. Nuestro equipo de consultores siempre está disponible para escucharle y responder a todas sus preguntas con amabilidad.. ¡Contáctenos hoy y dé el primer paso hacia una sonrisa sana y hermosa que le devuelva la pasión por la vida!',
    subtitle: 'Nuestro equipo de consultores siempre está disponible para escucharle y responder a todas sus preguntas con amabilidad.',
    privacy: 'Las expectativas y los resultados se discuten con total privacidad y confidencialidad.',
    infoTitle: 'Información de contacto',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Abrir chat de WhatsApp',
    address: 'Dirección',
    formTitle: 'Envíe su solicitud',
    form: {
      name: 'Nombre completo',
      phone: 'Número de teléfono (WhatsApp)',
      service: 'Servicio de su interés',
      servicePlaceholder: 'Elija un servicio',
      message: 'Su mensaje',
      messagePlaceholder: 'Describa su caso o pregunta aquí..',
      submit: 'Enviar solicitud',
      sending: 'Enviando..',
      success: '¡Su solicitud ha sido recibida! Nuestro equipo de consultores se pondrá en contacto en breve.',
      error: 'Ocurrió un error al enviar. Inténtelo de nuevo o contáctenos por WhatsApp.',
      required: 'Este campo es obligatorio',
    },
  },
  footer: {
    tagline: 'Clínica Orec.. Su familia médica en el camino para recuperar la confianza en su sonrisa y belleza',
    care: 'CUIDADO • PRECISIÓN • EXCELENCIA',
    follow: 'Síganos',
    quickLinks: 'Enlaces rápidos',
    servicesTitle: 'Nuestros servicios',
    contactTitle: 'Contáctenos',
    rights: 'Todos los derechos reservados.',
    location: 'Estambul — Turquía',
  },
  whatsapp: {
    floatLabel: 'Chat de WhatsApp',
    tooltip: 'Escríbanos por WhatsApp — normalmente respondemos en minutos',
    prefill: 'Hola Clínica Orec, me gustaría una consulta gratuita.',
    aria: 'Abrir chat de WhatsApp con la Clínica Orec',
  },
}

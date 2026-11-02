/**
 * Language-independent registry of departments / groups / sub-services.
 * Drives routing, generateStaticParams, image lookup and page numbering.
 * Translated text lives in ./content/<lang>/*.json — keyed by the slugs here.
 */

export interface SubServiceDef {
  slug: string
  /** Latin/English name shown as secondary line (dir=ltr) */
  en: string
  icon: string
  image?: string
  /** Cosmetic surgery only — group slug this service belongs to */
  group?: 'face' | 'body' | 'intimate'
}

export interface GroupDef {
  slug: 'face' | 'body' | 'intimate'
  en: string
  icon: string
}

export interface DepartmentDef {
  /** URL slug: /services/<slug> */
  slug: 'dental' | 'cosmetic' | 'hair' | 'bariatric'
  /** Matches dict.services.categories[].id (image + existing dictionary lookup) */
  id: 'dental' | 'cosmetic' | 'hair' | 'obesity'
  num: string
  code: string
  en: string
  icon: string
  image: string
  groups?: GroupDef[]
  services: SubServiceDef[]
}

export const DEPARTMENTS: DepartmentDef[] = [
  {
    slug: 'dental',
    id: 'dental',
    num: '01',
    code: 'DENTAL',
    en: 'Dental Care & Aesthetics',
    icon: '🦷',
    image: '/services/dental.jpg',
    services: [
      { slug: 'dental-implants', en: 'Dental Implants', icon: '🦷', image: '/services/dental/dental-implants.jpg' },
      { slug: 'hollywood-smile', en: 'Hollywood Smile', icon: '✨', image: '/services/dental/hollywood-smile.jpg' },
      { slug: 'restorative-dentistry', en: 'Restorative Dentistry', icon: '🛠️', image: '/services/dental/restorative-dentistry.jpg' },
      { slug: 'teeth-whitening', en: 'Teeth Whitening', icon: '⚡', image: '/services/dental/teeth-whitening.jpg' },
    ],
  },
  {
    slug: 'cosmetic',
    id: 'cosmetic',
    num: '02',
    code: 'AESTHETIC',
    en: 'Cosmetic Surgery',
    icon: '💎',
    image: '/services/cosmetic.jpg',
    groups: [
      { slug: 'face', en: 'Facial Surgery', icon: '💫' },
      { slug: 'body', en: 'Body Surgery', icon: '🕊️' },
      { slug: 'intimate', en: 'Intimate Area Aesthetics', icon: '🌸' },
    ],
    services: [
      { slug: 'facelift', en: 'Facelift / Facial Aesthetics', icon: '⏳', image: '/services/AestheticSurgery/facelift.jpg', group: 'face' },
      { slug: 'brow-lift', en: 'Brow Lift', icon: '👁️', image: '/services/AestheticSurgery/brow-lift.jpg', group: 'face' },
      { slug: 'rhinoplasty', en: 'Rhinoplasty', icon: '👃', image: '/services/AestheticSurgery/Rhinoplasty.jpg', group: 'face' },
      { slug: 'otoplasty', en: 'Otoplasty', icon: '👂', image: '/services/AestheticSurgery/Otoplasty.jpg', group: 'face' },
      { slug: 'lip-aesthetics', en: 'Lip Aesthetics / Cheiloplasty', icon: '💋', image: '/services/AestheticSurgery/lip-aesthetics.jpg', group: 'face' },
      { slug: 'neck-lift', en: 'Neck Lift / Platysmaplasty', icon: '🦢', image: '/services/AestheticSurgery/NeckLift.jpg', group: 'face' },
      { slug: 'blepharoplasty', en: 'Blepharoplasty / Eyelid Surgery', icon: '👀', image: '/services/AestheticSurgery/Blepharoplasty.jpg', group: 'face' },
      { slug: 'forehead-contouring', en: 'Forehead Reduction / Contouring', icon: '🪞', image: '/services/AestheticSurgery/ForeheadReduction.jpg', group: 'face' },
      { slug: 'genioplasty', en: 'Genioplasty / Chin Augmentation', icon: '🪨', image: '/services/AestheticSurgery/Genioplasty.jpg', group: 'face' },
      { slug: 'cheek-enhancement', en: 'Cheek Enhancement / Dimples', icon: '😊', image: '/services/AestheticSurgery/CheekEnhancement.jpg', group: 'face' },
      { slug: 'body-contouring', en: 'Body Contouring / Liposuction', icon: '🧬', image: '/services/AestheticSurgery/BodyContouringLiposuction.jpg', group: 'body' },
      { slug: 'breast-surgery', en: 'Breast Surgery / Mammoplasty', icon: '🎗️', image: '/services/AestheticSurgery/BreastSurgery.jpg', group: 'body' },
      { slug: 'gynecomastia', en: 'Gynecomastia Treatment', icon: '🧑‍⚕️', image: '/services/AestheticSurgery/Gynecomastia.jpg', group: 'body' },
      { slug: 'tummy-tuck', en: 'Abdominoplasty / Tummy Tuck', icon: '🌀', image: '/services/AestheticSurgery/abdominoplasty.webp', group: 'body' },
      { slug: 'arm-lift', en: 'Brachioplasty / Arm Lift', icon: '💪', image: '/services/AestheticSurgery/brachioplasty.webp', group: 'body' },
      { slug: 'thigh-lift', en: 'Thighplasty / Thigh Lift', icon: '🦵', image: '/services/AestheticSurgery/thigh-lift.webp', group: 'body' },
      { slug: 'bbl', en: 'Buttock Aesthetics / BBL', icon: '🍑', image: '/services/AestheticSurgery/ButtockAesthetics.jpg', group: 'intimate' },
      { slug: 'vaginal-rejuvenation', en: 'Vaginal Rejuvenation / Labiaplasty', icon: '🌸', image: '/services/AestheticSurgery/VaginalRejuvenationLabiaplasty.jpg', group: 'intimate' },
      { slug: 'vaginal-fat-filler', en: 'Vaginal Fat & Filler Injection', icon: '💉', image: '/services/AestheticSurgery/VaginalFat&FillerInjection.jpg', group: 'intimate' },
      { slug: 'vaginoplasty', en: 'Vaginoplasty', icon: '🩺', image: '/services/AestheticSurgery/Vaginoplasty.jpg', group: 'intimate' },
      { slug: 'penile-aesthetics', en: 'Penile Aesthetics', icon: '♂️', image: '/services/AestheticSurgery/PenileAesthetics.jpg', group: 'intimate' },
      { slug: 'penile-lengthening', en: 'Penile Lengthening', icon: '📏', image: '/services/AestheticSurgery/PenileLengthening.jpg', group: 'intimate' },
    ],
  },
  {
    slug: 'hair',
    id: 'hair',
    num: '03',
    code: 'HAIR',
    en: 'Hair Transplantation',
    icon: '💇',
    image: '/services/hair.jpg',
    services: [
      { slug: 'scalp-hair-transplant', en: 'Scalp Hair Transplantation', icon: '🌱', image: '/services/HairTransplantation/scalp-hair-transplantation.jpg' },
      { slug: 'beard-transplant', en: 'Beard & Mustache Transplantation', icon: '🧔', image: '/services/HairTransplantation/beard-mustache-transplantation.jpg' },
      { slug: 'eyebrow-transplant', en: 'Eyebrow Transplantation', icon: '🪶', image: '/services/HairTransplantation/eyebrow-transplantation.jpg' },
    ],
  },
  {
    slug: 'bariatric',
    id: 'obesity',
    num: '04',
    code: 'BARIATRIC',
    en: 'Bariatric Surgery & Weight Loss',
    icon: '⚖️',
    image: '/services/obesity.jpg',
    services: [
      { slug: 'gastric-sleeve', en: 'Gastric Sleeve / Sleeve Gastrectomy', icon: '🩺', image: '/services/BariatricSurgery/gastric-sleeve.jpg' },
      { slug: 'gastric-bypass', en: 'Gastric Bypass Surgery', icon: '🔁', image: '/services/BariatricSurgery/gastric-bypass.jpg' },
      { slug: 'gastric-balloon', en: 'Gastric Balloon', icon: '🎈', image: '/services/BariatricSurgery/gastric-balloon.jpg' },
      { slug: 'gastric-botox', en: 'Gastric Botox Injection', icon: '💉', image: '/services/BariatricSurgery/gastric-botox.jpg' },
    ],
  },
]

export function getDepartment(slug: string): DepartmentDef | undefined {
  return DEPARTMENTS.find((d) => d.slug === slug)
}

/** dict.services.categories[].id → department URL slug */
export const DEPT_SLUG_BY_ID: Record<string, DepartmentDef['slug']> = {
  dental: 'dental',
  cosmetic: 'cosmetic',
  hair: 'hair',
  obesity: 'bariatric',
}

export function getService(deptSlug: string, serviceSlug: string):
  | { department: DepartmentDef; service: SubServiceDef }
  | undefined {
  const department = getDepartment(deptSlug)
  const service = department?.services.find((s) => s.slug === serviceSlug)
  return department && service ? { department, service } : undefined
}

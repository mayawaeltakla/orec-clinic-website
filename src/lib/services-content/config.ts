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
      { slug: 'dental-implants', image: '/service-images/dental/dental-implants.jpg', en: 'Dental Implants', icon: '🦷' },
      { slug: 'hollywood-smile', image: '/service-images/dental/hollywood-smile.jpg', en: 'Hollywood Smile', icon: '✨' },
      { slug: 'restorative-dentistry', image: '/service-images/dental/restorative-dentistry.jpg', en: 'Restorative Dentistry', icon: '🛠️' },
      { slug: 'teeth-whitening', image: '/service-images/dental/teeth-whitening.jpg', en: 'Teeth Whitening', icon: '⚡' },
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
      { slug: 'facelift', en: 'Facelift / Facial Aesthetics', icon: '⏳', group: 'face', image: '/service-images/cosmetic/facelift.jpg' },
      { slug: 'brow-lift', en: 'Brow Lift', icon: '👁️', group: 'face', image: '/service-images/cosmetic/brow-lift.jpg' },
      { slug: 'rhinoplasty', en: 'Rhinoplasty', icon: '👃', group: 'face', image: '/service-images/cosmetic/rhinoplasty.jpg' },
      { slug: 'otoplasty', en: 'Otoplasty', icon: '👂', group: 'face', image: '/service-images/cosmetic/otoplasty.jpg' },
      { slug: 'lip-aesthetics', en: 'Lip Aesthetics / Cheiloplasty', icon: '💋', group: 'face', image: '/service-images/cosmetic/lip-aesthetics.jpg' },
      { slug: 'neck-lift', en: 'Neck Lift / Platysmaplasty', icon: '🦢', group: 'face', image: '/service-images/cosmetic/neck-lift.jpg' },
      { slug: 'blepharoplasty', en: 'Blepharoplasty / Eyelid Surgery', icon: '👀', group: 'face', image: '/service-images/cosmetic/blepharoplasty.jpg' },
      { slug: 'forehead-contouring', en: 'Forehead Reduction / Contouring', icon: '🪞', group: 'face', image: '/service-images/cosmetic/forehead-contouring.jpg' },
      { slug: 'genioplasty', en: 'Genioplasty / Chin Augmentation', icon: '🪨', group: 'face', image: '/service-images/cosmetic/genioplasty.jpg' },
      { slug: 'cheek-enhancement', en: 'Cheek Enhancement / Dimples', icon: '😊', group: 'face', image: '/service-images/cosmetic/cheek-enhancement.jpg' },
      { slug: 'body-contouring', en: 'Body Contouring / Liposuction', icon: '🧬', group: 'body', image: '/service-images/cosmetic/body-contouring.jpg' },
      { slug: 'breast-surgery', en: 'Breast Surgery / Mammoplasty', icon: '🎗️', group: 'body', image: '/service-images/cosmetic/breast-surgery.jpg' },
      { slug: 'gynecomastia', en: 'Gynecomastia Treatment', icon: '🧑‍⚕️', group: 'body', image: '/service-images/cosmetic/gynecomastia.jpg' },
      { slug: 'tummy-tuck', en: 'Abdominoplasty / Tummy Tuck', icon: '🌀', group: 'body', image: '/service-images/cosmetic/tummy-tuck.jpg' },
      { slug: 'arm-lift', en: 'Brachioplasty / Arm Lift', icon: '💪', group: 'body', image: '/service-images/cosmetic/arm-lift.jpg' },
      { slug: 'thigh-lift', en: 'Thighplasty / Thigh Lift', icon: '🦵', group: 'body', image: '/service-images/cosmetic/thigh-lift.jpg' },
      { slug: 'bbl', en: 'Buttock Aesthetics / BBL', icon: '🍑', group: 'intimate', image: '/service-images/cosmetic/bbl.jpg' },
      { slug: 'vaginal-rejuvenation', en: 'Vaginal Rejuvenation / Labiaplasty', icon: '🌸', group: 'intimate', image: '/service-images/cosmetic/vaginal-rejuvenation.jpg' },
      { slug: 'vaginal-fat-filler', en: 'Vaginal Fat & Filler Injection', icon: '💉', group: 'intimate', image: '/service-images/cosmetic/vaginal-fat-filler.jpg' },
      { slug: 'vaginoplasty', en: 'Vaginoplasty', icon: '🩺', group: 'intimate', image: '/service-images/cosmetic/vaginoplasty.jpg' },
      { slug: 'penile-aesthetics', en: 'Penile Aesthetics', icon: '♂️', group: 'intimate', image: '/service-images/cosmetic/penile-aesthetics.jpg' },
      { slug: 'penile-lengthening', en: 'Penile Lengthening', icon: '📏', group: 'intimate', image: '/service-images/cosmetic/penile-lengthening.jpg' },
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
      { slug: 'scalp-hair-transplant', en: 'Scalp Hair Transplantation', icon: '🌱', image: '/service-images/hair/scalp-hair-transplant.jpg' },
      { slug: 'beard-transplant', en: 'Beard & Mustache Transplantation', icon: '🧔', image: '/service-images/hair/beard-transplant.jpg' },
      { slug: 'eyebrow-transplant', en: 'Eyebrow Transplantation', icon: '🪶', image: '/service-images/hair/eyebrow-transplant.jpg' },
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
      { slug: 'gastric-sleeve', en: 'Gastric Sleeve / Sleeve Gastrectomy', icon: '🩺' },
      { slug: 'gastric-bypass', en: 'Gastric Bypass Surgery', icon: '🔁' },
      { slug: 'gastric-balloon', en: 'Gastric Balloon', icon: '🎈' },
      { slug: 'gastric-botox', en: 'Gastric Botox Injection', icon: '💉' },
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

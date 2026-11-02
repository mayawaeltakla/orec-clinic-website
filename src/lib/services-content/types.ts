/**
 * Deep services content — department pages + standalone sub-service pages.
 *
 * Source of truth: the clinic reference document (orec clinic.docx).
 * Structure here mirrors the document: every department contains its
 * sub-services, and every sub-service contains its medical sections.
 *
 * Language-independent metadata (slugs, Latin names, icons, numbering)
 * lives in ./config.ts — everything translatable lives in ./content/<lang>/.
 */

/** A titled block inside a section (technique, type, component, step…) */
export interface ContentBlock {
  title: string
  text: string
}

/**
 * One themed section of a sub-service page.
 * At least one of paragraphs / blocks / list must be present.
 */
export interface ServiceSection {
  /** Emoji rendered next to the heading */
  icon: string
  heading: string
  /** Free paragraphs under the heading */
  paragraphs?: string[]
  /** Titled blocks — rendered as cards in a 2-column grid */
  blocks?: ContentBlock[]
  /** Plain bullet list — candidates, tips, recovery notes… */
  list?: string[]
}

/** Content of one standalone sub-service page */
export interface SubServiceContent {
  /** Localized title (e.g. «زراعة الأسنان») */
  title: string
  /** The «X في تركيا | …» headline line from the reference document */
  tagline: string
  /** Intro paragraph(s) right under the hero */
  intro: string
  /** Medical sections (anatomy, techniques, candidates, procedure, risks, tips…) */
  sections: ServiceSection[]
}

/** A sub-group of a department (cosmetic surgery: face / body / intimate) */
export interface GroupContent {
  title: string
  description: string
  /** Optional shared medical sections rendered under the group (e.g. shared recovery rules) */
  sections?: ServiceSection[]
}

/** Content of one department page (/services/<dept>) */
export interface DepartmentContent {
  title: string
  tagline: string
  intro: string[]
  /** Present for cosmetic surgery — keyed by group slug (face / body / intimate) */
  groups?: Record<string, GroupContent>
  /** Keyed by sub-service slug — must cover every slug in config.ts */
  services: Record<string, SubServiceContent>
}

/** Shared UI labels for the new pages */
export interface ServicesUI {
  breadcrumbHome: string
  breadcrumbServices: string
  /** Section heading above the sub-service cards on a department page */
  subServicesTitle: string
  /** Card link label — open the standalone sub-service page */
  exploreService: string
  /** «Other services in the same department» heading on a sub-service page */
  relatedTitle: string
  backToServices: string
  backToDepartment: string
  /** Closing call-to-action band */
  ctaTitle: string
  ctaText: string
  ctaButton: string
  /** Shown when an unknown department/service slug is requested */
  notFoundTitle: string
  notFoundText: string
}

export interface ServicesContent {
  ui: ServicesUI
  /** Keyed by department slug (dental / cosmetic / hair / bariatric) */
  departments: Record<string, DepartmentContent>
}

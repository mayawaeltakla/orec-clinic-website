import type { BannerArt } from '@/components/clinic/page-banner'

/** The clinic's finished banner artwork, one per inner page (public/banners/). */
export const BANNERS = {
  faq: { src: '/banners/faq.jpg', width: 2172, height: 724 },
  team: { src: '/banners/team.jpg', width: 2172, height: 724 },
  blog: { src: '/banners/blog.jpg', width: 2172, height: 724 },
  experiences: { src: '/banners/experiences.jpg', width: 1672, height: 941 },
  contact: { src: '/banners/contact.jpg', width: 2172, height: 724 },
  why: { src: '/banners/why.jpg', width: 2172, height: 724 },
  about: { src: '/banners/about.jpg', width: 2172, height: 724 },
} satisfies Record<string, BannerArt>

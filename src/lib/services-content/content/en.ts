import type { ServicesContent } from '../types'
import meta from './en/meta.json'
import dental from './en/dental.json'
import cosmetic from './en/cosmetic.json'
import hair from './en/hair.json'
import bariatric from './en/bariatric.json'

/** Deep services content — en. Compiled against ServicesContent for strict structural parity. */
const content: ServicesContent = {
  ui: meta.ui,
  departments: {
    dental,
    cosmetic,
    hair,
    bariatric,
  },
}

export default content

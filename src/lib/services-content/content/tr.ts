import type { ServicesContent } from '../types'
import meta from './tr/meta.json'
import dental from './tr/dental.json'
import cosmetic from './tr/cosmetic.json'
import hair from './tr/hair.json'
import bariatric from './tr/bariatric.json'

/** Deep services content — tr. Compiled against ServicesContent for strict structural parity. */
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

import type { ServicesContent } from '../types'
import meta from './fr/meta.json'
import dental from './fr/dental.json'
import cosmetic from './fr/cosmetic.json'
import hair from './fr/hair.json'
import bariatric from './fr/bariatric.json'

/** Deep services content — fr. Compiled against ServicesContent for strict structural parity. */
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

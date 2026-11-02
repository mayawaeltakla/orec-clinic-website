import type { ServicesContent } from '../types'
import meta from './de/meta.json'
import dental from './de/dental.json'
import cosmetic from './de/cosmetic.json'
import hair from './de/hair.json'
import bariatric from './de/bariatric.json'

/** Deep services content — de. Compiled against ServicesContent for strict structural parity. */
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

import type { ServicesContent } from '../types'
import meta from './it/meta.json'
import dental from './it/dental.json'
import cosmetic from './it/cosmetic.json'
import hair from './it/hair.json'
import bariatric from './it/bariatric.json'

/** Deep services content — it. Compiled against ServicesContent for strict structural parity. */
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

import type { ServicesContent } from '../types'
import meta from './pl/meta.json'
import dental from './pl/dental.json'
import cosmetic from './pl/cosmetic.json'
import hair from './pl/hair.json'
import bariatric from './pl/bariatric.json'

/** Deep services content — pl. Compiled against ServicesContent for strict structural parity. */
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

import type { ServicesContent } from '../types'
import meta from './ar/meta.json'
import dental from './ar/dental.json'
import cosmetic from './ar/cosmetic.json'
import hair from './ar/hair.json'
import bariatric from './ar/bariatric.json'

/** Deep services content — ar. Compiled against ServicesContent for strict structural parity. */
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

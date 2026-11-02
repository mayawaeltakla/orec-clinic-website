import type { ServicesContent } from '../types'
import meta from './es/meta.json'
import dental from './es/dental.json'
import cosmetic from './es/cosmetic.json'
import hair from './es/hair.json'
import bariatric from './es/bariatric.json'

/** Deep services content — es. Compiled against ServicesContent for strict structural parity. */
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

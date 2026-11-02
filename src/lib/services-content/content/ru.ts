import type { ServicesContent } from '../types'
import meta from './ru/meta.json'
import dental from './ru/dental.json'
import cosmetic from './ru/cosmetic.json'
import hair from './ru/hair.json'
import bariatric from './ru/bariatric.json'

/** Deep services content — ru. Compiled against ServicesContent for strict structural parity. */
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

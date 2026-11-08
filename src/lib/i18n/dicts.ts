import type { Dictionary, LanguageCode } from './types'
import { ar } from './ar'
import { en } from './en'
import { es } from './es'
import { tr } from './tr'
import { fr } from './fr'
import { de } from './de'
import { it } from './it'
import { ru } from './ru'
import { pl } from './pl'
import { deCH } from './deCH'

/**
 * Full UI dictionaries, one per language. Imported by server code only (layout + page metadata):
 * the browser receives just the active language's dictionary, never all ten.
 */
const DICTS: Record<LanguageCode, Dictionary> = { ar, en, es, tr, fr, de, it, ru, pl, deCH }

export function getDict(code: LanguageCode | string): Dictionary {
  return DICTS[code as LanguageCode] ?? ar
}

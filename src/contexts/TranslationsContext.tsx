import { createContext } from 'react'
import { LocaleInfo, LocaleShortCode, TranslationStrings } from '@/translations'

export type TranslationContextValue = {
  t: TranslationStrings
  currentLocale: LocaleShortCode
  availableLocales: Array<LocaleInfo>
}

const TranslationsContext = createContext<TranslationContextValue>(null)

export default TranslationsContext

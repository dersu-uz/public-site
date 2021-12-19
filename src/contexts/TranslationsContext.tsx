import { createContext } from 'react'

import {
  LocaleInfo,
  LocaleShortCode,
  TranslationStrings,
} from '@/services/i18nService'

export type TranslationContextValue = {
  t: TranslationStrings
  currentLocale: LocaleShortCode
  availableLocales: Array<LocaleInfo>
}

const TranslationsContext = createContext<TranslationContextValue>(null)

export default TranslationsContext

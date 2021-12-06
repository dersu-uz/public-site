import en from './en'
import es from './es'

const locales = {
  es,
  en,
}

export type LocaleShortCode = 'en' | 'es'
export type LocaleInfo = {
  locale: LocaleShortCode
  name: string
}
export type TranslationStrings = Record<string, Record<string, string>>

export const availableLocales: Array<LocaleInfo> = [
  {
    locale: 'es',
    name: 'Español',
  },
  {
    locale: 'en',
    name: 'English',
  },
]

export function isLocale(localeToTest: string): boolean {
  return Object.keys(locales).some(locale => locale === localeToTest)
}

export function getTranslations(locale: LocaleShortCode): TranslationStrings {
  if (isLocale(locale)) {
    return locales[locale]
  } else {
    //throw Error(`Unknown locale "${locale}"`)
    locales['es']
  }
}

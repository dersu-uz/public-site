import en from './en'
import es from './es'

const locales = {
  es,
  en,
}

export const localeNames = [
  {
    locale: 'es',
    name: 'Español',
  },
  {
    locale: 'en',
    name: 'English',
  },
]

export function isLocale(localeToTest) {
  return Object.keys(locales).some(locale => locale === localeToTest)
}

export function getTranslations(locale) {
  if (isLocale(locale)) {
    return locales[locale]
  } else {
    // throw Error(`Unknown locale "${locale}"`)
    // TODO: decide if we are ok with no throwing any error
    return locales['es']
  }
}

import locales from '@/locales';

export type LocaleShortCode = keyof typeof locales;

export type LocaleInfo = {
  locale: LocaleShortCode;
  name: string;
};

export type TranslationStrings = typeof locales.es;

export const availableLocales: Array<LocaleInfo> = Object.keys(locales).map((locale) => {
  return {
    locale: locale as LocaleShortCode,
    name: locales[locale].localeMetadata.name as string,
  };
});

export function isLocale(localeToTest: string): boolean {
  return Object.keys(locales).some((locale) => locale === localeToTest);
}

export function getTranslations(locale: string): TranslationStrings | undefined {
  return locales[locale];
}

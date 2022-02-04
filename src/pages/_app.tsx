import '@/styles/main.css'

import { FC } from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'

import TranslationsContext, {
  TranslationContextValue,
} from '@/contexts/TranslationsContext'
import { DeveloperContextProvider } from '@/contexts/DeveloperContext'

import {
  getTranslations,
  availableLocales,
  LocaleShortCode,
} from '@/services/i18nService'

import Page from '@/components/Page'
import { PrivacyContextProvider } from '@/contexts/PrivacyContext'

const NextApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { title, description, canonicalUrl, locale } = pageProps
  const translations = getTranslations(locale)
  const contextValue: TranslationContextValue = {
    t: translations,
    currentLocale: locale as LocaleShortCode,
    availableLocales,
  }

  return (
    <PrivacyContextProvider>
      <TranslationsContext.Provider value={contextValue}>
        <DeveloperContextProvider>
          <Page
            title={title}
            description={description}
            canonicalUrl={canonicalUrl}
            locale={locale}
          >
            <Component {...pageProps} />
          </Page>
        </DeveloperContextProvider>
      </TranslationsContext.Provider>
    </PrivacyContextProvider>
  )
}

export default NextApp

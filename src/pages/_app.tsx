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

const NextApp: FC<AppProps> = props => {
  const { Component, pageProps, router } = props
  const { title, description, canonicalUrl } = pageProps
  const translations = getTranslations(router.locale) ?? getTranslations('es')
  const contextValue: TranslationContextValue = {
    t: translations,
    currentLocale: router.locale as LocaleShortCode,
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
          >
            <Component {...pageProps} />
          </Page>
        </DeveloperContextProvider>
      </TranslationsContext.Provider>
    </PrivacyContextProvider>
  )
}

export default NextApp

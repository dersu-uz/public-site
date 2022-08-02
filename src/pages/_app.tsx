import '@/styles/main.css';
import Page from '@/components/Page';
import { DeveloperContextProvider } from '@/contexts/DeveloperContext';
import { PrivacyContextProvider } from '@/contexts/PrivacyContext';
import TranslationsContext, { TranslationContextValue } from '@/contexts/TranslationsContext';
import { availableLocales, getTranslations, LocaleShortCode } from '@/services/i18nService';
import { defaultTheme } from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import { FC } from 'react';

import type { AppProps /*, AppContext */ } from 'next/app'

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
    <ThemeProvider theme={defaultTheme}>
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
    </ThemeProvider>
  )
}

export default NextApp

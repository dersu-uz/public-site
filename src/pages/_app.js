import '@/styles/main.css'

import PlausibleProvider from 'next-plausible'

import { ENABLE_PLAUSIBLE, PLAUSIBLE_DOMAIN } from '@/constants/settings'

import TranslationsContext from '@/contexts/TranslationsContext'
import { DeveloperContextProvider } from '@/contexts/DeveloperContext'

import { getTranslations, localeNames } from '@/translations'

import Page from '@/components/Page'

/* eslint react/prop-types: 0 */
function NextApp({ Component, pageProps }) {
  const { title, description, canonicalUrl, locale } = pageProps
  const translations = getTranslations(locale)
  const contextValue = {
    t: translations,
    currentLocale: locale,
    localeNames,
  }
  return (
    <PlausibleProvider domain={PLAUSIBLE_DOMAIN} enabled={ENABLE_PLAUSIBLE}>
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
    </PlausibleProvider>
  )
}

export default NextApp

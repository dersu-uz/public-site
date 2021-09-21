import '@/styles/main.css'

import TranslationsContext from '@/contexts/TranslationsContext'
import { DeveloperContextProvider } from '@/contexts/DeveloperContext'

import { getTranslations, localeNames } from '@/translations'

import Page from '@/components/Page'
import DeveloperHelpers from '@/components/DeveloperHelpers'

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
    <TranslationsContext.Provider value={contextValue}>
      <DeveloperContextProvider>
        <Page
          title={title}
          description={description}
          canonicalUrl={canonicalUrl}
        >
          <Component {...pageProps} />
          <DeveloperHelpers />
        </Page>
      </DeveloperContextProvider>
    </TranslationsContext.Provider>
  )
}

export default NextApp

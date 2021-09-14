import Page from '@/components/Page'
import TranslationsContext from '@/contexts/TranslationsContext'
import { getTranslations, localeNames } from '@/translations'

import '@/styles/main.scss'
import GridOverlay from '@/components/GridOverlay'

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
      <Page title={title} description={description} canonicalUrl={canonicalUrl}>
        <GridOverlay />
        <Component {...pageProps} />
      </Page>
    </TranslationsContext.Provider>
  )
}

export default NextApp

import React from 'react'
import Page from '@/components/Page'
import TranslationsContext from '@/contexts/TranslationsContext'
import { getTranslations, localeNames } from '@/translations'

import '@/styles/main.scss'

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
        <Component {...pageProps} />
      </Page>
    </TranslationsContext.Provider>
  )
}

export default NextApp

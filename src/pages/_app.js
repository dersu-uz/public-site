import React from 'react'
import Page from '@/components/Page'

import '@/styles/main.scss'

/* eslint react/prop-types: 0 */
function NextApp({ Component, pageProps }) {
  const { title, description } = pageProps
  return (
    <Page title={title} description={description}>
      <Component {...pageProps} />
    </Page>
  )
}

export default NextApp

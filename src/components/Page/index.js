import PropTypes from 'prop-types'
import Head from 'next/head'
import Script from 'next/script'

import CookieBanner from '@/components/CookieBanner'

const Page = ({ title, description, canonicalUrl, children }) => {
  return (
    <>
      <div className="Page overflow-hidden">
        <Head>
          <title>{title ? `${title} | Dersu` : `Dersu | ${description}`}</title>
          <meta name="description" content={description} />
          {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        {children}
        <CookieBanner />
      </div>
      <Script
        async
        defer
        data-domain="dersu.uz"
        src="https://plausible.io/js/plausible.js"
      />
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  canonicalUrl: PropTypes.string,
  description: PropTypes.string.isRequired,
}

export default Page

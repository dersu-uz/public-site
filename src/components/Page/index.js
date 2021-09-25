import PropTypes from 'prop-types'
import Head from 'next/head'
import Script from 'next/script'

import { DEVELOPMENT_HELPERS } from '@/constants/settings'

import CookieBanner from '@/components/CookieBanner'
import DeveloperHelpers from '@/components/DeveloperHelpers'

const Page = ({ title, description, canonicalUrl, children }) => (
  <>
    <div className="Page">
      <Head>
        <title>{title ? `${title} | Dersu` : `Dersu | ${description}`}</title>
        <meta name="description" content={description} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      {children}
      <CookieBanner />
      <div id="modal-root"></div>
      {DEVELOPMENT_HELPERS && <DeveloperHelpers />}
    </div>
    <Script
      async
      defer
      data-domain="dersu.uz"
      src="https://plausible.io/js/plausible.js"
    />
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  canonicalUrl: PropTypes.string,
  description: PropTypes.string.isRequired,
}

export default Page

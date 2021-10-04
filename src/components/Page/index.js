import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'

import { BASE_DOMAIN_URL, DEVELOPMENT_HELPERS } from '@/constants/settings'

import CookieBanner from '@/components/CookieBanner'
import DeveloperHelpers from '@/components/DeveloperHelpers'

const Page = ({ title, description, canonicalUrl, children }) => (
  <>
    <div className="Page">
      <NextSeo
        title={title ? `${title} | Dersu` : `Dersu | ${description}`}
        description={description}
        canonical={canonicalUrl}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.svg',
          },
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png',
          },
        ]}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'initial-scale=1.0, width=device-width',
          },
        ]}
        openGraph={{
          description,
          images: [
            {
              url: `${BASE_DOMAIN_URL}/opengraph-banner.jpg`,
            },
          ],
        }}
      />
      {children}
      <CookieBanner />
      <div id="modal-root"></div>
      {DEVELOPMENT_HELPERS && <DeveloperHelpers />}
    </div>
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  canonicalUrl: PropTypes.string,
  description: PropTypes.string.isRequired,
}

export default Page

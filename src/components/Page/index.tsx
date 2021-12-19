import { FC } from 'react'
import { NextSeo } from 'next-seo'

import { LocaleShortCode } from '@/services/i18nService'

import { BASE_DOMAIN_URL, DEVELOPMENT_HELPERS } from '@/constants/settings'

import CookieBanner from '@/components/CookieBanner'
import DeveloperHelpers from '@/components/DeveloperHelpers'

type Props = {
  title: string
  description: string
  canonicalUrl: string
  locale: LocaleShortCode
}

const Page: FC<Props> = ({
  title,
  description,
  canonicalUrl,
  locale,
  children,
}) => (
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
          {
            rel: 'alternate',
            type: 'application/rss+xml',
            href: `${BASE_DOMAIN_URL}/feed/${locale}/feed.xml`,
          },
          {
            rel: 'alternate',
            type: 'application/json',
            href: `${BASE_DOMAIN_URL}/feed/${locale}/feed.json`,
          },
          {
            rel: 'alternate',
            type: 'application/atom+xml',
            href: `${BASE_DOMAIN_URL}/feed/${locale}/atom.xml`,
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

export default Page

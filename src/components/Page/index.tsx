import { FC, useContext } from 'react'
import { NextSeo } from 'next-seo'
import PlausibleProvider from 'next-plausible'

import { LocaleShortCode } from '@/services/i18nService'

import PrivacyContext from '@/contexts/PrivacyContext'

import {
  BASE_DOMAIN_URL,
  DEVELOPMENT_HELPERS,
  ENABLE_PLAUSIBLE,
  PLAUSIBLE_DOMAIN,
} from '@/constants/settings'

import CookieBanner from '@/components/CookieBanner'
import DeveloperHelpers from '@/components/DeveloperHelpers'

import locales from '@/locales'

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
}) => {
  const { acceptCookies } = useContext(PrivacyContext)
  return (
    <PlausibleProvider
      domain={PLAUSIBLE_DOMAIN}
      enabled={ENABLE_PLAUSIBLE && acceptCookies}
    >
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
            content:
              'initial-scale=1.0, width=device-width, viewport-fit=cover',
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
        languageAlternates={Object.keys(locales).map(l => ({
          hrefLang: l,
          href: `/${l}/`,
        }))}
      />
      {children}
      <CookieBanner />
      <div id="modal-root"></div>
      {DEVELOPMENT_HELPERS && <DeveloperHelpers />}
    </PlausibleProvider>
  )
}

export default Page

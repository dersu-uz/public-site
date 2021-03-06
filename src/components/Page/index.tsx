import CookieBanner from '@/components/CookieBanner';
import DeveloperHelpers from '@/components/DeveloperHelpers';
import {
  BASE_DOMAIN_URL, DEVELOPMENT_HELPERS, ENABLE_PLAUSIBLE, PLAUSIBLE_DOMAIN
} from '@/constants/settings';
import PrivacyContext from '@/contexts/PrivacyContext';
import locales from '@/locales';
import PlausibleProvider from 'next-plausible';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { FC, ReactNode, useContext } from 'react';

type Props = {
  title: string
  description: string
  canonicalUrl: string
  children: ReactNode
}

const Page: FC<Props> = ({ title, description, canonicalUrl, children }) => {
  const { acceptCookies } = useContext(PrivacyContext)
  const router = useRouter()

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
            href: `${BASE_DOMAIN_URL}/feed/${router.locale}/feed.xml`,
          },
          {
            rel: 'alternate',
            type: 'application/json',
            href: `${BASE_DOMAIN_URL}/feed/${router.locale}/feed.json`,
          },
          {
            rel: 'alternate',
            type: 'application/atom+xml',
            href: `${BASE_DOMAIN_URL}/feed/${router.locale}/atom.xml`,
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

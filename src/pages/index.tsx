import { FC, useContext, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import {
  BASE_DOMAIN_URL,
  COOKIES_PREFERRED_LOCALE_NAME,
} from '@/constants/settings'

import PrivacyContext from '@/contexts/PrivacyContext'

import { LocaleShortCode } from '@/services/i18nService'

import ImportedHomePage, {
  getStaticProps as importedGetStaticProps,
} from './es'

export const getStaticProps: GetStaticProps = async ctx => {
  const staticProps = await importedGetStaticProps(ctx)
  return {
    ...staticProps,
    props: {
      ...(staticProps['props'] || {}),
      canonicalUrl: `${BASE_DOMAIN_URL}/es/`,
    },
  }
}

type Props = {
  locale: LocaleShortCode
}

const HomePage: FC<Props> = props => {
  const { locale } = props
  const router = useRouter()

  const { useHonestCookie } = useContext(PrivacyContext)
  const [preferredLocale] = useHonestCookie(COOKIES_PREFERRED_LOCALE_NAME)

  useEffect(() => {
    if (locale && preferredLocale && locale !== preferredLocale) {
      router.push(`/${preferredLocale}`)
    }
  }, [locale, preferredLocale, router])

  return <ImportedHomePage {...props} />
}

export default HomePage

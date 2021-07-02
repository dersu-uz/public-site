import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookie } from 'react-use'

import { COOKIES_PREFERRED_LOCALE_NAME } from '@/constants/settings'
import ImportedHomePage, {
  getStaticProps as importedGetStaticProps,
} from './es'

export const getStaticProps = args => {
  const staticProps = importedGetStaticProps(args)
  return {
    ...staticProps,
    props: {
      ...staticProps.props,
      canonicalUrl: '/es',
    },
  }
}

const HomePage = props => {
  // eslint-disable-next-line react/prop-types
  const { locale } = props
  const router = useRouter()
  const [preferredLocale] = useCookie(COOKIES_PREFERRED_LOCALE_NAME)

  useEffect(() => {
    if (locale && preferredLocale && locale !== preferredLocale) {
      router.push(`/${preferredLocale}`)
    }
  }, [locale, preferredLocale, router])

  return <ImportedHomePage {...props} />
}

export default HomePage

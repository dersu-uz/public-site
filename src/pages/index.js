/*
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookie } from 'react-use'
*/
import {
  BASE_DOMAIN_URL,
  /*COOKIES_PREFERRED_LOCALE_NAME,*/
} from '@/constants/settings'

import ImportedHomePage, {
  getStaticProps as importedGetStaticProps,
} from './es'

export const getStaticProps = args => {
  const staticProps = importedGetStaticProps(args)
  return {
    ...staticProps,
    props: {
      ...staticProps.props,
      canonicalUrl: `${BASE_DOMAIN_URL}/es/`,
    },
  }
}

const HomePage = props => {
  // eslint-disable-next-line react/prop-types

  /*
  TODO: English redirect disabled for now

  const { locale } = props
  const router = useRouter()
  const [preferredLocale] = useCookie(COOKIES_PREFERRED_LOCALE_NAME)

  useEffect(() => {
    if (locale && preferredLocale && locale !== preferredLocale) {
      router.push(`/${preferredLocale}`)
    }
  }, [locale, preferredLocale, router])

  */

  return <ImportedHomePage {...props} />
}

export default HomePage

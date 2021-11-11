import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useCookie } from 'react-use'
import {
  BASE_DOMAIN_URL,
  COOKIES_PREFERRED_LOCALE_NAME,
} from '@/constants/settings'

import ImportedHomePage, {
  getStaticProps as importedGetStaticProps,
} from './es'

export async function getStaticProps(args) {
  const staticProps = await importedGetStaticProps(args)
  return {
    ...staticProps,
    props: {
      ...staticProps.props,
      canonicalUrl: `${BASE_DOMAIN_URL}/es/`,
    },
  }
}

const HomePage = props => {
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

HomePage.propTypes = {
  locale: PropTypes.string,
}

export default HomePage

import React from 'react'
import { useRouter } from 'next/router'
import { useCookie, useMount } from 'react-use'

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

  useMount(() => {
    if (locale !== preferredLocale) {
      router.push(`/${preferredLocale}`)
    }
  })

  return <ImportedHomePage {...props} />
}

export default HomePage

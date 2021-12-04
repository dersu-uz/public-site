import { FC, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useCookie } from 'react-use'

import type { LocaleShortCode } from '@/translations'

import { COOKIES_PREFERRED_LOCALE_NAME } from '@/constants/settings'

import ImportedHomePage, {
  getStaticProps as importedGetStaticProps,
} from './es'

export const getStaticProps: GetStaticProps = async ctx => {
  const staticProps = await importedGetStaticProps(ctx)
  return {
    ...staticProps,
    props: {
      ...(staticProps['props'] || {}),
      canonicalUrl: '/es/',
    },
  }
}

type Props = {
  locale: LocaleShortCode
}

const HomePage: FC<Props> = props => {
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

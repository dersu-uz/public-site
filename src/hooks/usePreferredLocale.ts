import { useContext } from 'react'
import { useRouter } from 'next/router'

import {
  COOKIES_PREFERRED_LOCALE_DAYS,
  COOKIES_PREFERRED_LOCALE_NAME,
} from '@/constants/settings'

import PrivacyContext from '@/contexts/PrivacyContext'

import { LocaleShortCode } from '@/services/i18nService'

type UsePreferredLocale = {
  changeLocale: (newLocale: LocaleShortCode) => void
}

const usePreferredLocale = (): UsePreferredLocale => {
  const router = useRouter()

  const { acceptCookies, useHonestCookie } = useContext(PrivacyContext)

  const [preferredLocale, updatePreferredLocale] = useHonestCookie(
    COOKIES_PREFERRED_LOCALE_NAME
  )

  const changeLocale = (newLocale: LocaleShortCode) => {
    if (acceptCookies && preferredLocale !== newLocale) {
      updatePreferredLocale(newLocale, {
        expires: COOKIES_PREFERRED_LOCALE_DAYS,
      })
    }
    router.push(`/${newLocale}`)
  }

  return {
    changeLocale,
  } as UsePreferredLocale
}

export default usePreferredLocale

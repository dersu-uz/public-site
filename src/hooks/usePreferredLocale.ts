import {
  COOKIES_PREFERRED_LOCALE_DAYS,
  COOKIES_PREFERRED_LOCALE_NAME,
} from '@/constants/settings'
import type { LocaleShortCode } from '@/translations'
import { useRouter } from 'next/router'
import { useCookie } from 'react-use'

type UsePreferredLocale = {
  changeLocale: (newLocale: LocaleShortCode) => void
}

const usePreferredLocale = (): UsePreferredLocale => {
  const router = useRouter()

  const [preferredLocale, updatePreferredLocale] = useCookie(
    COOKIES_PREFERRED_LOCALE_NAME
  )

  const changeLocale = (newLocale: LocaleShortCode) => {
    if (preferredLocale !== newLocale) {
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

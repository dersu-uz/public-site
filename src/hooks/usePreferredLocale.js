import {
  COOKIES_PREFERRED_LOCALE_DAYS,
  COOKIES_PREFERRED_LOCALE_NAME,
} from '@/constants/settings'
import { useRouter } from 'next/router'
import { useCookie } from 'react-use'

const usePreferredLocale = () => {
  const router = useRouter()

  const [preferredLocale, updatePreferredLocale] = useCookie(
    COOKIES_PREFERRED_LOCALE_NAME
  )

  const changeLocale = newLocale => {
    if (preferredLocale !== newLocale) {
      updatePreferredLocale(newLocale, {
        expires: COOKIES_PREFERRED_LOCALE_DAYS,
      })
    }
    router.push(`/${newLocale}`)
  }

  return {
    changeLocale,
  }
}

export default usePreferredLocale

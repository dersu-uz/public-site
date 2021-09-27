import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useCookie } from 'react-use'

import TranslationsContext from '@/contexts/TranslationsContext'
import {
  COOKIES_ACCEPT_NAME,
  COOKIES_ACCEPT_EXPIRE_DAYS,
} from '@/constants/settings'

const CookieBanner = () => {
  const { t, currentLocale } = useContext(TranslationsContext)
  const [acceptCookies, updateAcceptCookies] = useCookie(COOKIES_ACCEPT_NAME)
  const [showCookieBanner, setShowCookieBanner] = useState(false)

  useEffect(() => {
    if (!acceptCookies) setShowCookieBanner(true)
  }, [acceptCookies])

  const handleAcceptCookies = () => {
    updateAcceptCookies(true, {
      expires: COOKIES_ACCEPT_EXPIRE_DAYS,
    })
    setShowCookieBanner(false)
  }

  return showCookieBanner ? (
    <div className="CookieBanner">
      <div className="fixed px-4 pb-5 bottom-0 left-1/2 transform -translate-x-1/2 w-[fit-content] max-w-[668px]">
        <div className="p-5 font-sans text-dersu-2xs text-dersu-white bg-dersu-black flex gap-10 rounded">
          <div>
            {t.common.cookieBanner1}{' '}
            <Link href={`/${currentLocale}/${t.common.privacySlug}`}>
              <a className="font-bold hover:underline">
                {t.common.cookieBanner2}
              </a>
            </Link>
          </div>
          <div
            onClick={handleAcceptCookies}
            className="text-dersu-sm cursor-pointer"
          >
            ✕
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default CookieBanner

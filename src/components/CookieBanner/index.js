import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useCookie } from 'react-use'

import TranslationsContext from '@/contexts/TranslationsContext'
import {
  COOKIES_ACCEPT_NAME,
  COOKIES_ACCEPT_EXPIRE_DAYS,
} from '@/constants/settings'

import Wrapper from '@/components/Wrapper'

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
      <Wrapper>
        <div className="CookieBanner__content">
          <div className="CookieBanner__text">
            {t.common.cookieBanner1}{' '}
            <Link href={`/${currentLocale}/${t.common.privacySlug}`}>
              {t.common.cookieBanner2}
            </Link>
          </div>
          <div onClick={handleAcceptCookies} className="CookieBanner__close">
            ✕
          </div>
        </div>
      </Wrapper>
    </div>
  ) : (
    <></>
  )
}

export default CookieBanner

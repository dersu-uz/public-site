import PrivacyContext from '@/contexts/PrivacyContext';
import TranslationsContext from '@/contexts/TranslationsContext';
import Link from 'next/link';
import { FC, useContext, useEffect, useState } from 'react';

const CookieBanner: FC = () => {
  const { t, currentLocale } = useContext(TranslationsContext)
  const { acceptCookies, handleUserAcceptCookies } = useContext(PrivacyContext)

  const [showCookieBanner, setShowCookieBanner] = useState(false)

  useEffect(() => {
    setShowCookieBanner(!acceptCookies)
  }, [acceptCookies])

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
            onClick={() => handleUserAcceptCookies()}
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

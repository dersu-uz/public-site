import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCookie } from 'react-use'

import {
  COOKIES_PREFERRED_LOCALE_NAME,
  COOKIES_PREFERRED_LOCALE_DAYS,
} from '@/constants/settings'

import TranslationsContext from '@/contexts/TranslationsContext'

import Wrapper from '@/components/Wrapper'

const Footer = () => {
  const { t, localeNames, currentLocale } = useContext(TranslationsContext)
  const router = useRouter()

  const [preferredLocale, updatePreferredLocale] = useCookie(
    COOKIES_PREFERRED_LOCALE_NAME
  )

  const handleChangeLocale = newLocale => {
    if (preferredLocale !== newLocale) {
      updatePreferredLocale(newLocale, {
        expires: COOKIES_PREFERRED_LOCALE_DAYS,
      })
    }
    router.push(`/${newLocale}`)
  }

  return (
    <footer className="Footer">
      <Wrapper>
        <p>{t.common.teamDersu}</p>
        <ul className="Footer__social-links">
          <li>
            <Link href={`/${currentLocale}`}>Dersu.uz</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/dersu">LinkedIn</Link>
          </li>
          <li>
            <Link href="https://twitter.com/dersu_uz">Twitter</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/dersu_uz/">Instagram</Link>
          </li>
          <li>
            <Link href={`/${currentLocale}/${t.common.workWithDersuSlug}`}>
              {t.common.workWithDersu}
            </Link>
          </li>
          <li>
            <Link href={`/${currentLocale}/${t.common.privacySlug}`}>
              {t.common.privacy}
            </Link>
          </li>
          {localeNames
            .filter(l => l.locale !== currentLocale)
            .map(l => (
              <li key={l.locale}>
                <a
                  href={`/${l.locale}/`}
                  onClick={event => {
                    event.preventDefault()
                    handleChangeLocale(l.locale)
                  }}
                >
                  {l.name}
                </a>
              </li>
            ))}
        </ul>
      </Wrapper>
    </footer>
  )
}

export default Footer

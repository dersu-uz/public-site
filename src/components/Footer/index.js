import React, { useContext } from 'react'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'

import TranslationsContext from '@/contexts/TranslationsContext'

const Footer = () => {
  const { t, localeNames, currentLocale } = useContext(TranslationsContext)
  return (
    <footer className="Footer">
      <Wrapper>
        <p>Equipo Dersu</p>
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
                <Link href={`/${l.locale}`}>{l.name}</Link>
              </li>
            ))}
        </ul>
      </Wrapper>
    </footer>
  )
}

export default Footer

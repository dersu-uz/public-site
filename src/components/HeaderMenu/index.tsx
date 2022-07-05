import { FC, useContext } from 'react'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'

import TranslationsContext from '@/contexts/TranslationsContext'

import usePreferredLocale from '@/hooks/usePreferredLocale'

import styles from './styles.module.css'

const HeaderMenu: FC = () => {
  const plausible = usePlausible()
  const { availableLocales, currentLocale } = useContext(TranslationsContext)
  const { changeLocale } = usePreferredLocale()

  return (
    <nav>
      <ul className={styles.HeaderMenu}>
        <li className={styles.HeaderMenuItem}>
          <Link href={`/${currentLocale}/blog`}>
            <a>Blog</a>
          </Link>
        </li>

        {currentLocale === 'es' && (
          <li className={styles.HeaderMenuItem}>
            <Link href={`/${currentLocale}/#pricing`}>
              <a>Planes</a>
            </Link>
          </li>
        )}

        {currentLocale === 'es' && (
          <li className={styles.HeaderMenuItem}>
            <Link href={`/${currentLocale}/jornadas-seguridad`}>
              <a>Jornadas de seguridad</a>
            </Link>
          </li>
        )}

        <li className={styles.HeaderMenuItem}>
          <Link href="http://eepurl.com/hI63hX">
            <a
              target="_blank"
              onClick={() =>
                plausible('CTA Newsletter', {
                  props: { method: 'Header' },
                })
              }
            >
              Newsletter
            </a>
          </Link>
        </li>

        {availableLocales.map((l, i) => {
          const isCurrent = l.locale === currentLocale
          return !isCurrent ? (
            <li key={i} className={styles.HeaderMenuItem}>
              <a
                href={`/${l.locale}/`}
                onClick={e => {
                  e.preventDefault()
                  changeLocale(l.locale)
                }}
              >
                {l.name}
              </a>
            </li>
          ) : null
        })}
      </ul>
    </nav>
  )
}

export default HeaderMenu

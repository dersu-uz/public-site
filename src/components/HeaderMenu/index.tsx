import TranslationsContext from '@/contexts/TranslationsContext';
import usePreferredLocale from '@/hooks/usePreferredLocale';
import { usePlausible } from 'next-plausible';
import Link from 'next/link';
import { FC, useContext } from 'react';
import styles from './styles.module.css';

const HeaderMenu: FC = () => {
  const plausible = usePlausible()
  const { availableLocales, currentLocale, t } = useContext(TranslationsContext)
  const { changeLocale } = usePreferredLocale()

  return (
    <nav>
      <ul className={styles.HeaderMenu}>
        <li className={styles.HeaderMenuItem}>
          <Link href={`/${currentLocale}/blog`}>
            <a>{t.headerMenu.blog}</a>
          </Link>
        </li>

        <li className={styles.HeaderMenuItem}>
          <Link href={`/${currentLocale}/#plans`}>
            <a>{t.headerMenu.plans}</a>
          </Link>
        </li>

        {currentLocale === 'es' && (
          <li className={styles.HeaderMenuItem}>
            <Link href={`/${currentLocale}/jornadas-seguridad`}>
              <a>{t.headerMenu.safetySessions}</a>
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
              {t.headerMenu.newsletter}
            </a>
          </Link>
        </li>

        <li className={styles.HeaderMenuItem}>
          <Link href={`/${currentLocale}/${t.partners.href}`}>
            <a>{t.headerMenu.partners}</a>
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

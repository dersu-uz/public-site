import { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'
import { useWindowScroll } from 'react-use'

import TranslationsContext from '@/contexts/TranslationsContext'
import usePreferredLocale from '@/hooks/usePreferredLocale'
import Wrapper from '@/components/Wrapper'

import DersuLogoWithText from '../../styles/assets/dersu-logo-with-text.svg'

const Header = () => {
  const headerRef = useRef(null)
  const headerContentRef = useRef(null)

  const { localeNames, currentLocale } = useContext(TranslationsContext)
  const { y: scrollTop } = useWindowScroll()

  const { changeLocale } = usePreferredLocale()

  const [isSticky, setIsSticky] = useState(false)
  const [heightCompensation, setHeightCompensation] = useState(0)

  const plausible = usePlausible()

  useEffect(() => {
    const offsetTop =
      (headerRef && headerRef.current && headerRef.current.offsetTop) || 0

    const distance = scrollTop - offsetTop
    setIsSticky(distance > 0)
    setHeightCompensation(
      (headerContentRef &&
        headerContentRef.current &&
        headerContentRef.current.getBoundingClientRect().height) ||
        0
    )
  }, [scrollTop])

  const navItemClasses =
    'text-dersu-light-gray text-dersu-2xs mx-2 font-bold leading-5 hover:text-dersu-black transition-colors cursor-pointer'

  return (
    <header
      className="Header"
      ref={headerRef}
      style={{ paddingTop: `${isSticky ? `${heightCompensation}` : `0`}px` }}
    >
      <div
        ref={headerContentRef}
        className={`${isSticky ? 'fixed top-0 left-0 w-full z-10' : ''}`}
      >
        <Wrapper>
          <div className="flex py-10 items-center">
            <h1 className="flex-grow">
              <Link href={`/${currentLocale}`}>
                <a>
                  <DersuLogoWithText className="h-5 -mt-1.5 md:h-6" />
                </a>
              </Link>
            </h1>
            <nav className="flex font-sans">
              <span>
                <Link href={`/${currentLocale}/blog`}>
                  <a className={navItemClasses}>Blog</a>
                </Link>
              </span>{' '}
              /
              <span>
                <Link href="http://eepurl.com/hI63hX">
                  <a
                    target="_blank"
                    onClick={() =>
                      plausible('CTA Newsletter', {
                        props: { method: 'Header' },
                      })
                    }
                    className={navItemClasses}
                  >
                    Newsletter
                  </a>
                </Link>
              </span>{' '}
              /
              {localeNames.map((l, i) => {
                const isCurrent = l.locale === currentLocale
                return !isCurrent ? (
                  <span key={i}>
                    <a
                      href={`/${l.locale}/`}
                      className={navItemClasses}
                      onClick={e => {
                        e.preventDefault()
                        changeLocale(l.locale)
                      }}
                    >
                      {l.name}
                    </a>
                  </span>
                ) : null
              })}
            </nav>
          </div>
        </Wrapper>
      </div>
    </header>
  )
}

export default Header

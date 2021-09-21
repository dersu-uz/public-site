import { useContext, useMemo, useRef } from 'react'
import Link from 'next/link'
import { useWindowScroll } from 'react-use'

import TranslationsContext from '@/contexts/TranslationsContext'
import usePreferredLocale from '@/hooks/usePreferredLocale'
import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'

import DersuLogoWithText from '../../styles/assets/dersu-logo-with-text.svg'

const Header = () => {
  const headerRef = useRef(null)
  const headerContentRef = useRef(null)

  const { localeNames, currentLocale } = useContext(TranslationsContext)
  const { y: scrollTop } = useWindowScroll()

  const { changeLocale } = usePreferredLocale()

  const { isSticky, compensation } = useMemo(() => {
    const offsetTop =
      (headerRef && headerRef.current && headerRef.current.offsetTop) || 0

    const distance = scrollTop - offsetTop
    const isSticky = distance > 0
    const compensation =
      (isSticky &&
        headerContentRef &&
        headerContentRef.current &&
        headerContentRef.current.getBoundingClientRect().height) ||
      0

    return {
      isSticky,
      compensation,
    }
  }, [scrollTop])

  return (
    <header
      className="Header"
      ref={headerRef}
      style={{ paddingTop: `${compensation}px` }}
    >
      <div
        ref={headerContentRef}
        className={`${isSticky ? 'fixed top-0 left-0 w-full z-10' : ''}`}
      >
        <Container>
          <Wrapper>
            <div className="flex py-10 items-center">
              <h1 className="flex-grow">
                <Link href={`/${currentLocale}`}>
                  <a>
                    <DersuLogoWithText className="h-5 -mt-1.5 md:h-6" />
                  </a>
                </Link>
              </h1>
              <nav>
                <ul className="flex">
                  {localeNames.map((l, i) => {
                    const isCurrent = l.locale === currentLocale
                    return (
                      <li
                        key={i}
                        className="font-sans text-dersu-light-gray text-sm pl-2.5 font-bold leading-5 hover:text-dersu-black transition-colors"
                      >
                        {isCurrent ? (
                          <span className="text-dersu-black">{l.name}</span>
                        ) : (
                          <a
                            href={`/${l.locale}/`}
                            onClick={e => {
                              e.preventDefault()
                              changeLocale(l.locale)
                            }}
                          >
                            {l.name}
                          </a>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>
          </Wrapper>
        </Container>
      </div>
    </header>
  )
}

export default Header

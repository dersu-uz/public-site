import { FC, useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'
import { useWindowScroll } from 'react-use'

import TranslationsContext from '@/contexts/TranslationsContext'
import usePreferredLocale from '@/hooks/usePreferredLocale'
import Wrapper from '@/components/Wrapper'

import DersuLogoWithText from '../../styles/assets/dersu-logo-with-text.svg'

type Props = {
  negativeColor?: boolean
  forceSticky?: boolean
  needsCompensation?: boolean
}

const Header: FC<Props> = ({
  negativeColor,
  forceSticky,
  needsCompensation,
}) => {
  const headerRef = useRef(null)
  const headerContentRef = useRef(null)

  const { availableLocales, currentLocale } = useContext(TranslationsContext)
  const { y: scrollTop } = useWindowScroll()

  const { changeLocale } = usePreferredLocale()

  const [isSticky, setIsSticky] = useState(forceSticky)
  const [heightCompensation, setHeightCompensation] = useState(0)

  const plausible = usePlausible()

  useEffect(() => {
    const offsetTop =
      (headerRef && headerRef.current && headerRef.current.offsetTop) || 0

    const distance = scrollTop - offsetTop
    setIsSticky(distance > 0 || forceSticky)
    setHeightCompensation(
      (headerContentRef &&
        headerContentRef.current &&
        headerContentRef.current.getBoundingClientRect().height) ||
        0
    )
  }, [scrollTop, forceSticky])

  const navItemClasses = `${
    negativeColor ? 'text-dersu-white' : 'text-dersu-black'
  } text-dersu-2xs pl-[10px] font-bold leading-5 hover:underline transition-colors cursor-pointer`

  return (
    <header
      className="Header"
      ref={headerRef}
      style={{
        paddingTop: `${
          isSticky && needsCompensation ? `${heightCompensation}` : `0`
        }px`,
      }}
    >
      <div
        ref={headerContentRef}
        className={`${isSticky ? 'fixed top-0 left-0 w-full z-10' : ''}`}
      >
        <Wrapper>
          <div className="flex py-10 items-center">
            <h1 className="flex-grow">
              <Link href="/">
                <a title="Dersu">
                  <DersuLogoWithText
                    className={`h-5 -mt-1.5 md:h-6 transition-colors ${
                      negativeColor ? 'text-dersu-white' : 'text-dersu-black'
                    }`}
                  />
                </a>
              </Link>
            </h1>
            <nav>
              <ul className="flex font-sans">
                <li className={navItemClasses}>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>

                <li className={navItemClasses}>
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
                    <li key={i} className={navItemClasses}>
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
          </div>
        </Wrapper>
      </div>
    </header>
  )
}

Header.defaultProps = {
  negativeColor: false,
  forceSticky: false,
  needsCompensation: true,
}

export default Header

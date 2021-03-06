import BurgerButton from '@/components/BurgerButton';
import HeaderLogoLink from '@/components/HeaderLogoLink';
import HeaderMenu from '@/components/HeaderMenu';
import Wrapper from '@/components/Wrapper';
import useTailwindBreapoints from '@/hooks/useTailwindBreakpoints';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useToggle, useWindowScroll } from 'react-use';
import styles from './styles.module.css';

type Props = {
  negativeColor?: boolean
  forceSticky?: boolean
  needsCompensation?: boolean
  className?: string
}

const Header: FC<Props> = ({
  negativeColor,
  forceSticky,
  needsCompensation,
  className,
}) => {
  const headerRef = useRef(null)
  const headerContentRef = useRef(null)

  const { y: scrollTop } = useWindowScroll()
  const { breakpoint } = useTailwindBreapoints()

  const [isSticky, setIsSticky] = useState(forceSticky)
  const [heightCompensation, setHeightCompensation] = useState(0)
  const [isMenuOpen, toogleIsMenuOpen] = useToggle(false)

  const router = useRouter()

  // Force menu close when route or hash change
  const handleRouteChange = useCallback(() => {
    toogleIsMenuOpen(false)
  }, [toogleIsMenuOpen])

  // Subscribe to routing changes
  useEffect(() => {
    router.events.on('hashChangeStart', handleRouteChange)
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('hashChangeStart', handleRouteChange)
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [handleRouteChange, router.events])

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

  const shouldShowMenu = useMemo(
    () => isMenuOpen && ['none', 'sm'].includes(breakpoint),
    [breakpoint, isMenuOpen]
  )

  return (
    <header
      ref={headerRef}
      data-is-menu-open={shouldShowMenu}
      className={`${className ?? ''} ${styles.Header}`}
      style={{
        paddingTop:
          isSticky && needsCompensation ? `${heightCompensation}px` : 0,
      }}
    >
      <div
        ref={headerContentRef}
        data-is-sticky={isSticky}
        className={styles.HeaderContent}
      >
        <Wrapper>
          <div className="flex flex-wrap py-10 items-center justify-between">
            <div className="order-1">
              <HeaderLogoLink negativeColor={negativeColor || shouldShowMenu} />
            </div>
            <div
              className={classNames(
                'order-3 md:order-2 w-full md:w-auto pt-12 md:pt-0',
                !shouldShowMenu ? 'hidden md:block' : 'block'
              )}
            >
              <HeaderMenu />
            </div>
            <div className="order-2 md:hidden">
              <BurgerButton
                isOpen={shouldShowMenu}
                onToggle={() => toogleIsMenuOpen()}
              />
            </div>
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

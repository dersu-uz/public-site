import PropTypes from 'prop-types'

import { COLOR_SCHEMES } from '@/constants/theme'

import Header from '@/components/Header'
import Wrapper from '@/components/Wrapper'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

const DefaultLayout = props => {
  const { title, heroImageUrl, webpHeroImageUrl, heroColorScheme, children } =
    props
  return (
    <>
      <Header forceSticky={true} needsCompensation={false} />
      <PageHero
        title={title}
        imageUrl={heroImageUrl}
        webpImageUrl={webpHeroImageUrl}
        colorScheme={heroColorScheme}
      />
      <main>
        <Wrapper>
          <div className="max-w-4xl mx-auto py-10 md:py-24">{children}</div>
        </Wrapper>
      </main>
      <Footer />
    </>
  )
}

DefaultLayout.defaultProps = {
  heroColorScheme: COLOR_SCHEMES.BROWN_INVERTED,
}

DefaultLayout.propTypes = {
  title: PropTypes.string,
  heroImageUrl: PropTypes.string,
  webpHeroImageUrl: PropTypes.string,
  heroColorScheme: PropTypes.oneOf(Object.keys(COLOR_SCHEMES)),
  children: PropTypes.node,
}

export default DefaultLayout

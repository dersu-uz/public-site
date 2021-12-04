import { FC } from 'react'

import { COLOR_SCHEMES } from '@/constants/theme'

import Header from '@/components/Header'
import Wrapper from '@/components/Wrapper'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

type Props = {
  title?: string
  heroImageUrl?: string
  webpHeroImageUrl?: string
  heroColorScheme?: keyof typeof COLOR_SCHEMES
}

const DefaultLayout: FC<Props> = ({
  title,
  heroImageUrl,
  webpHeroImageUrl,
  heroColorScheme,
  children,
}) => {
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

export default DefaultLayout

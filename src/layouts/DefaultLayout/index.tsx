import { FC } from 'react'

import { COLOR_SCHEMES } from '@/constants/theme'

import Header from '@/components/Header'
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
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout

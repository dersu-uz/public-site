import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import { COLOR_SCHEMES } from '@/constants/theme';
import { FC, ReactNode } from 'react';

type Props = {
  title?: string
  heroImageUrl?: string
  webpHeroImageUrl?: string
  heroColorScheme?: keyof typeof COLOR_SCHEMES
  children: ReactNode
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

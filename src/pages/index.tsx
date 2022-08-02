import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HomeHero from '@/modules/HomeHero';
import HomeIntro from '@/modules/HomeIntro';
import HomeLearn from '@/modules/HomeLearn';
import HomeMountaineerProfile from '@/modules/HomeMountaineerProfile';
import HomeRouteAlerts from '@/modules/HomeRouteAlerts';
import HomeRoutePlanning from '@/modules/HomeRoutePlanning';
import HomeSafetySessions from '@/modules/HomeSafetySessions';
import Pricing from '@/modules/Pricing';
import RelatedPosts from '@/modules/RelatedPosts';
import Signup from '@/modules/Signup';
import { getLatestPosts } from '@/services/blogService';
import { LocaleShortCode } from '@/services/i18nService';
import { GetStaticProps } from 'next';
import { FC } from 'react';

export const getStaticProps: GetStaticProps = async ctx => {
  if (ctx.locale === 'default') return { notFound: true }

  const latestPosts = await getLatestPosts(ctx.locale as LocaleShortCode, 2)

  return {
    props: {
      description: 'Conecta a las personas con las montañas',
      latestPosts,
    },
  }
}

type Props = {
  latestPosts?: Array<BlogPost>
}

const HomePage: FC<Props> = ({ latestPosts }) => (
  <>
    <HomeHero />
    <Header />
    <HomeIntro />
    <HomeMountaineerProfile />
    <HomeRoutePlanning />
    <Pricing />
    <HomeSafetySessions />
    <Signup />
    <HomeRouteAlerts />
    <HomeLearn />
    <RelatedPosts posts={latestPosts} />
    <Footer />
  </>
)

export default HomePage

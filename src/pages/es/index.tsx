import { FC } from 'react'
import { GetStaticProps } from 'next'

import { getLatestPosts } from '@/services/blogService'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import HomeHero from '@/modules/HomeHero'
import HomeIntro from '@/modules/HomeIntro'
import HomeMountaineerProfile from '@/modules/HomeMountaineerProfile'
import SignupForBeta from '@/modules/SignupForBeta'
import HomeRoutePlanning from '@/modules/HomeRoutePlanning'
import HomeRouteAlerts from '@/modules/HomeRouteAlerts'
import HomeLearn from '@/modules/HomeLearn'
import RelatedPosts from '@/modules/RelatedPosts'

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = await getLatestPosts('es', 2)
  return {
    props: {
      locale: 'es',
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
    <HomeRouteAlerts />
    <HomeLearn />
    <RelatedPosts posts={latestPosts} />
    <SignupForBeta />
    <Footer />
  </>
)

export default HomePage

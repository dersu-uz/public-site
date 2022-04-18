import { FC } from 'react'
import { GetStaticProps } from 'next'

import { getLatestPosts } from '@/services/blogService'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import HomeIntro from '@/modules/HomeIntro'
import HomeHero from '@/modules/HomeHero'
import Signup from '@/modules/Signup'
import HomeMountaineerProfile from '@/modules/HomeMountaineerProfile'
import HomeRoutePlanning from '@/modules/HomeRoutePlanning'
import HomeRouteAlerts from '@/modules/HomeRouteAlerts'
import HomeLearn from '@/modules/HomeLearn'
import RelatedPosts from '@/modules/RelatedPosts'
import { ENABLE_APP_DOWNLOAD } from '@/constants/settings'

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = await getLatestPosts('en', 2)
  return {
    props: {
      locale: 'en',
      description: 'Connect people with mountains',
      latestPosts,
    },
  }
}

type Props = {
  latestPosts: Array<BlogPost>
}

const HomePage: FC<Props> = ({ latestPosts }) => (
  <>
    <HomeHero />
    <Header />
    <HomeIntro />
    <HomeMountaineerProfile />
    <HomeRoutePlanning />
    {ENABLE_APP_DOWNLOAD && <Signup />}
    <HomeRouteAlerts />
    <HomeLearn />
    {!ENABLE_APP_DOWNLOAD && <Signup />}
    <RelatedPosts posts={latestPosts} />
    <Footer />
  </>
)

export default HomePage

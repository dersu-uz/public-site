import PropTypes from 'prop-types'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeHero from '@/components/HomeHero'
import ModuleBetaAnnouncement from '@/components/ModuleBetaAnnouncement'
import ModuleFeaturedPosts from '@/components/ModuleFeaturedPosts'
import ModuleHighlights, { SEPARATORS } from '@/components/ModuleHighlights'
import ModuleIntro from '@/components/ModuleIntro'

import { getLatestPosts } from '@/services/blogService'

import { ALIGN_MODES, COLOR_SCHEMES } from '@/constants/theme'

export async function getStaticProps() {
  const latestPosts = await getLatestPosts('en', 2)
  return {
    props: {
      locale: 'en',
      description: 'Connect people with mountains',
      latestPosts,
    },
  }
}

const HomePage = ({ latestPosts }) => (
  <>
    <HomeHero
      tagline={
        <>
          Dersu connect people
          <br /> with mountains
        </>
      }
    />
    <Header />
    <ModuleIntro tagline="Learn, explore and grow" />
    <ModuleHighlights
      title="Routes for different levels and moments"
      subtitle="Mountaineer profile"
      text="With Dersu you will be able to define your objectives and capacities (physical, technical, etc.) so that we can offer you the most suitable routes."
      imageUrl="/images/highlights/01.jpg"
      webpImageUrl="/images/highlights/01.webp"
      columnsForImage={6}
      colorScheme={COLOR_SCHEMES.GREEN}
      alignMode={ALIGN_MODES.CENTER}
      separator={SEPARATORS.LINES}
    />
    <ModuleHighlights
      title="To avoid surprises, prepare your outings well"
      subtitle="Planner"
      text="We love when a plan comes together: Check the weather of the place, The critical points on your route, the material you'll need, and, of course, share it with the group."
      imageUrl={['/images/highlights/02-a.jpg', '/images/highlights/02-b.jpg']}
      webpImageUrl={[
        '/images/highlights/02-a.webp',
        '/images/highlights/02-b.webp',
      ]}
      columnsForImage={6}
      colorScheme={COLOR_SCHEMES.YELLOW}
      alignMode={ALIGN_MODES.LEFT}
      separator={SEPARATORS.EXCLAMATION_MARK}
    />
    <ModuleHighlights
      title="More information means better decisions"
      subtitle="On Route"
      text="To improve decision-making, we are developing a real-time warning system to help you identify critical points along the route."
      imageUrl="/images/highlights/03.jpg"
      webpImageUrl="/images/highlights/03.webp"
      columnsForImage={6}
      colorScheme={COLOR_SCHEMES.BROWN}
      alignMode={ALIGN_MODES.CENTER}
      separator={SEPARATORS.ICONS}
      overlapsPreviousModule={true}
    />
    <ModuleHighlights
      title="Coaching, training, and development"
      subtitle="Learn about mountain"
      text="A mountain is always a learning experience. Under the guidance of professionals, we are preparing a variety of training programs that will allow you to progress at your own pace."
      imageUrl="/images/highlights/04.jpg"
      webpImageUrl="/images/highlights/04.webp"
      columnsForImage={6}
      colorScheme={COLOR_SCHEMES.PINK}
      alignMode={ALIGN_MODES.LEFT}
      separator={SEPARATORS.WAVES}
      framedImage={true}
    />
    <ModuleBetaAnnouncement
      title="We plan to release the App's first trial version in December and gradually allow people access by invitation."
      subtitle="To sign up for our beta and receive our newsletter, leave your email here. We'll keep you updated."
    />
    <ModuleFeaturedPosts posts={latestPosts} />
    <Footer />
  </>
)

HomePage.propTypes = {
  latestPosts: PropTypes.array.isRequired,
}

export default HomePage

import PropTypes from 'prop-types'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ModuleFeaturedPosts from '@/components/ModuleFeaturedPosts'
import { getLatestPosts } from '@/services/blogService'

export async function getStaticProps() {
  const latestPosts = getLatestPosts('es')
  return {
    props: {
      locale: 'es',
      title: 'Blog',
      description: 'Tu asistente en la montaña',
      latestPosts,
    },
  }
}

const BlogPage = ({ latestPosts }) => (
  <>
    <Header />
    <ModuleFeaturedPosts posts={latestPosts} />
    <Footer />
  </>
)

BlogPage.defaultProps = {
  latestPosts: [],
}

BlogPage.propTypes = {
  latestPosts: PropTypes.array,
}

export default BlogPage

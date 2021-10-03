import PropTypes from 'prop-types'

import { getLatestPosts } from '@/services/blogService'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Wrapper from '@/components/Wrapper'
import BlogPostsList from '@/components/BlogPostsList'

export async function getStaticProps() {
  const latestPosts = await getLatestPosts('es')
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

    <div className="ModuleFeaturedPosts">
      <Wrapper>
        <div className="flex items-end justify-between">
          <h2 className="text-dersu-lg md:text-dersu-3xl lg:text-dersu-4xl mt-16">
            Blog
          </h2>
        </div>
        <BlogPostsList posts={latestPosts} />
      </Wrapper>
    </div>
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

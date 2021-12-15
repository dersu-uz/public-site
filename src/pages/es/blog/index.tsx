import { FC } from 'react'
import { GetStaticProps } from 'next'

import { getLatestPosts } from '@/services/blogService'

import { generateRSSFeed } from '@/utils/generateRSSFeed'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Wrapper from '@/components/Wrapper'
import BlogPostsList from '@/components/BlogPostsList'

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = await getLatestPosts('es')
  generateRSSFeed('es')
  return {
    props: {
      locale: 'es',
      title: 'Blog',
      description: 'Tu asistente en la montaña',
      latestPosts,
    },
  }
}

type Props = {
  latestPosts: Array<BlogPost>
}

const BlogPage: FC<Props> = ({ latestPosts }) => (
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

export default BlogPage

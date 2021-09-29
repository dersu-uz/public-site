import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import {
  getPostBySlug,
  getAllPostSlugs,
  getLatestPosts,
} from '@/services/blogService'

import { COLOR_SCHEMES } from '@/constants/theme'

import markdownToHtml from '@/utils/markdownToHtml'

import BlogPostHero from '@/components/BlogPostHero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogPostBody from '@/components/BlogPostBody'
import ModuleFeaturedPosts from '@/components/ModuleFeaturedPosts'

export async function getStaticPaths() {
  const slugs = getAllPostSlugs('es')
  return {
    paths: slugs.map(slug => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const post = getPostBySlug(slug, 'es')
  const otherPosts = getLatestPosts('es', 2)
  const {
    title,
    subtitle,
    tag,
    content,
    featuredImageUrl,
    webpFeaturedImageUrl,
    colorScheme,
  } = post
  const htmlContent = await markdownToHtml(content)

  return {
    props: {
      slug,
      locale: 'es',
      title,
      description: subtitle,
      subtitle,
      tag,
      htmlContent,
      featuredImageUrl,
      webpFeaturedImageUrl,
      colorScheme,
      otherPosts,
    },
  }
}

const BlogPostPage = ({
  slug,
  title,
  subtitle,
  featuredImageUrl,
  webpFeaturedImageUrl,
  colorScheme,
  htmlContent,
  otherPosts,
}) => {
  const { isFallback } = useRouter()

  return (
    <>
      {isFallback ? (
        <p>Loading…</p>
      ) : !isFallback && !slug ? (
        <ErrorPage statusCode={404} />
      ) : (
        <>
          <Header forceSticky={true} needsCompensation={false} />
          <BlogPostHero
            title={title}
            imageUrl={featuredImageUrl}
            webpImageUrl={webpFeaturedImageUrl}
            colorScheme={colorScheme}
          />
          <BlogPostBody subtitle={subtitle} htmlContent={htmlContent} />

          <ModuleFeaturedPosts posts={otherPosts} />
          <Footer />
        </>
      )}
    </>
  )
}

BlogPostPage.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  featuredImageUrl: PropTypes.string.isRequired,
  webpFeaturedImageUrl: PropTypes.string.isRequired,
  htmlContent: PropTypes.string.isRequired,
  colorScheme: PropTypes.oneOf(Object.keys(COLOR_SCHEMES)),
  otherPosts: PropTypes.array,
}

export default BlogPostPage

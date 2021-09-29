import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { getPostBySlug, getAllPostSlugs } from '@/services/blogService'

import BlogPostHero from '@/components/BlogPostHero'
import MarkdownContent from '@/components/MarkdownContent'
import Wrapper from '@/components/Wrapper'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import markdownToHtml from '@/utils/markdownToHtml'

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
  const {
    title,
    subtitle,
    tag,
    content,
    featuredImageUrl,
    webpFeaturedImageUrl,
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
    },
  }
}

const BlogPostPage = ({
  slug,
  title,
  subtitle,
  featuredImageUrl,
  webpFeaturedImageUrl,
  htmlContent,
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
          <Header />
          {
            <BlogPostHero
              title={title}
              imageUrl={featuredImageUrl}
              webpImageUrl={webpFeaturedImageUrl}
            />
          }
          <Wrapper>
            <h1>{subtitle}</h1>
            <MarkdownContent
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </Wrapper>
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
}

export default BlogPostPage

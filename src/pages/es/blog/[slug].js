import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { getPostBySlug, getPostSlugs } from '@/utils/posts'

import BlogPostPageHero from '@/components/BlogPostPageHero'
import MarkdownContent from '@/components/MarkdownContent'
import Wrapper from '@/components/Wrapper'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export async function getStaticPaths() {
  const slugs = getPostSlugs('es')
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
  const { meta, htmlContent } = await getPostBySlug(slug, 'es')
  return {
    props: {
      title: meta.title,
      description: meta.title,
      locale: 'es',
      slug,
      post: {
        meta,
        htmlContent,
      },
    },
  }
}

const BlogPostPage = ({ slug, post }) => {
  const { isFallback } = useRouter()
  const {
    meta: { title, featuredImage },
    htmlContent,
  } = post
  return (
    <>
      {isFallback ? (
        <p>Loading…</p>
      ) : !isFallback && !slug ? (
        <ErrorPage statusCode={404} />
      ) : (
        <>
          <Header />
          {featuredImage && (
            <BlogPostPageHero title={title} imageUrl={featuredImage} />
          )}
          <Wrapper>
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
  post: PropTypes.shape({
    meta: PropTypes.shape({
      title: PropTypes.string.isRequired,
      featuredImage: PropTypes.string.isRequired,
    }),
    htmlContent: PropTypes.string.isRequired,
  }),
}

export default BlogPostPage

import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { getPostBySlug, getPostSlugs } from '@/utils/posts'

import BlogPostHero from '@/components/BlogPostHero'
import Container from '@/components/Container'
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

const BlogPost = ({ slug, post }) => {
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
            <BlogPostHero title={title} imageUrl={featuredImage} />
          )}
          <Container>
            <Wrapper>
              <MarkdownContent
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </Wrapper>
          </Container>
          <Footer />
        </>
      )}
    </>
  )
}

BlogPost.propTypes = {
  slug: PropTypes.string.isRequired,
  post: PropTypes.shape({
    meta: PropTypes.shape({
      title: PropTypes.string.isRequired,
      featuredImage: PropTypes.string.isRequired,
    }),
    htmlContent: PropTypes.string.isRequired,
  }),
}

export default BlogPost

import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { NextSeo } from 'next-seo'

import {
  getPostBySlug,
  getAllPostSlugs,
  getLatestPosts,
} from '@/services/blogService'

import { COLOR_SCHEMES } from '@/constants/theme'
import { BASE_DOMAIN_URL } from '@/constants/settings'

import PageHero from '@/components/PageHero'
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
  const post = await getPostBySlug(slug, 'es')
  const otherPosts = await getLatestPosts('es', 2)
  const { subtitle, htmlContent } = post
  return {
    props: {
      ...post,
      description: subtitle,
      htmlContent,
      otherPosts,
    },
  }
}

const BlogPostPage = props => {
  const {
    url,
    slug,
    title,
    subtitle,
    tag,
    author,
    dateFormatted,
    featuredImageUrl,
    webpFeaturedImageUrl,
    colorScheme,
    htmlContent,
    otherPosts,
  } = props
  const { isFallback } = useRouter()

  return (
    <>
      {isFallback ? (
        <p>Loading…</p>
      ) : !isFallback && !slug ? (
        <ErrorPage statusCode={404} />
      ) : (
        <>
          <NextSeo
            openGraph={{
              description: subtitle,
              url,
              type: 'article',
              article: {
                tags: [tag],
              },
              images: [
                {
                  url: `${BASE_DOMAIN_URL}${featuredImageUrl}`,
                },
              ],
            }}
          />
          <Header forceSticky={true} needsCompensation={false} />
          <PageHero
            title={title}
            imageUrl={featuredImageUrl}
            webpImageUrl={webpFeaturedImageUrl}
            colorScheme={colorScheme}
          />
          <BlogPostBody
            subtitle={subtitle}
            author={author}
            dateFormatted={dateFormatted}
            htmlContent={htmlContent}
          />
          <ModuleFeaturedPosts posts={otherPosts} />
          <Footer />
        </>
      )}
    </>
  )
}

BlogPostPage.propTypes = {
  url: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  featuredImageUrl: PropTypes.string,
  webpFeaturedImageUrl: PropTypes.string,
  htmlContent: PropTypes.string.isRequired,
  colorScheme: PropTypes.oneOf(Object.keys(COLOR_SCHEMES)),
  otherPosts: PropTypes.array,
}

export default BlogPostPage

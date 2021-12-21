import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { NextSeo } from 'next-seo'

import {
  getPostBySlug,
  getAllPostSlugs,
  getLatestPosts,
} from '@/services/blogService'

import { BASE_DOMAIN_URL } from '@/constants/settings'

import PageHero from '@/components/PageHero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Post from '@/components/Post'
import RelatedPosts from '@/modules/RelatedPosts'

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  const post = await getPostBySlug(slug as string, 'es')
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

type Props = {
  url: string
  slug: string
  title: string
  subtitle: string
  tag: string
  author: string
  dateFormatted: string
  featuredImageUrl: string
  webpFeaturedImageUrl: string
  htmlContent: string
  otherPosts: Array<BlogPost>
}

const BlogPostPage: FC<Props> = ({
  url,
  slug,
  title,
  subtitle,
  tag,
  author,
  dateFormatted,
  featuredImageUrl,
  webpFeaturedImageUrl,
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
          />
          <Post
            subtitle={subtitle}
            author={author}
            dateFormatted={dateFormatted}
            htmlContent={htmlContent}
          />
          <RelatedPosts posts={otherPosts} />
          <Footer />
        </>
      )}
    </>
  )
}

export default BlogPostPage

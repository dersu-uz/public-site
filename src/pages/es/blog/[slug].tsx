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
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { BlogPost } from '@/types/common'

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
  colorScheme: keyof typeof COLOR_SCHEMES
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

export default BlogPostPage

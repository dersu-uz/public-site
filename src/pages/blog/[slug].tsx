import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Post from '@/components/Post';
import { BASE_DOMAIN_URL } from '@/constants/settings';
import RelatedPosts from '@/modules/RelatedPosts';
import { getAllPostSlugs, getLatestPosts, getPostBySlug } from '@/services/blogService';
import { LocaleShortCode } from '@/services/i18nService';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { FC, useEffect } from 'react';

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

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  if (locale === 'default') return { notFound: true }

  const { slug } = params
  const post = await getPostBySlug(slug as string, locale as LocaleShortCode)
  const otherPosts = await getLatestPosts(locale as LocaleShortCode, 2)
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

  // Process Instagram embed posts
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { instgrm } = window as any
    if (instgrm) {
      instgrm.Embeds.process()
    }
  })

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
      <Script async src="//www.instagram.com/embed.js" />
    </>
  )
}

export default BlogPostPage

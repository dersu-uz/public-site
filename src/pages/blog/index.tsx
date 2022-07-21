import { GetStaticProps } from 'next'
import { FC } from 'react'
import { getLatestPosts } from '@/services/blogService'
import { generateRSSFeed } from '@/utils/generateRSSFeed'
import { LocaleShortCode } from '@/services/i18nService'
import Blog from '@/views/Blog'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (locale === 'default') return { notFound: true }

  const latestPosts = await getLatestPosts(locale as LocaleShortCode, 100)
  generateRSSFeed(locale as LocaleShortCode)

  return {
    props: {
      title: 'Blog',
      description: 'Tu asistente en la montaña',
      latestPosts,
    },
  }
}

type Props = {
  title: string
  description: string
  latestPosts: Array<BlogPost>
}

const BlogPage: FC<Props> = props => {
  return <Blog title={props.title} description={props.description} latestPosts={props.latestPosts} />
}

export default BlogPage

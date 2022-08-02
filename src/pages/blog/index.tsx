import { getLatestPosts } from '@/services/blogService';
import { LocaleShortCode } from '@/services/i18nService';
import { generateRSSFeed } from '@/utils/generateRSSFeed';
import Blog from '@/views/Blog';
import { GetStaticProps } from 'next';
import { FC } from 'react';

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

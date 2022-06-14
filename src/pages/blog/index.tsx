import { GetStaticProps } from 'next'
import { FC, useContext } from 'react'

import { getLatestPosts } from '@/services/blogService'

import { generateRSSFeed } from '@/utils/generateRSSFeed'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import MarkdownContent from '@/components/MarkdownContent'
import PostsList from '@/components/PostsList'
import Wrapper from '@/components/Wrapper'
import TranslationsContext from '@/contexts/TranslationsContext'
import DefaultLayout from '@/layouts/DefaultLayout'
import { LocaleShortCode } from '@/services/i18nService'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
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
  const { t } = useContext(TranslationsContext)

  if (!props.latestPosts.length) {
    return (
      <DefaultLayout {...props}>
        <MainContent>
          <MarkdownContent>
            {t.blog.workingOn}{' '}
            <Link href="/blog" locale="es">
              <a>{t.blog.spanishVersion}</a>
            </Link>{' '}
            {t.blog.available}
          </MarkdownContent>
        </MainContent>
      </DefaultLayout>
    )
  }

  return (
    <>
      <Header />

      <div className="ModuleFeaturedPosts">
        <Wrapper>
          <div className="flex items-end justify-between">
            <h2 className="text-dersu-lg md:text-dersu-3xl lg:text-dersu-4xl mt-16">
              Blog
            </h2>
          </div>
          <PostsList posts={props.latestPosts} />
        </Wrapper>
      </div>
      <Footer />
    </>
  )
}

export default BlogPage

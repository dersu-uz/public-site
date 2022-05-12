import { FC, useContext } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { generateRSSFeed } from '@/utils/generateRSSFeed'

import TranslationsContext from '@/contexts/TranslationsContext'

import DefaultLayout from '@/layouts/DefaultLayout'

import MainContent from '@/components/MainContent'
import MarkdownContent from '@/components/MarkdownContent'

export const getStaticProps: GetStaticProps = async () => {
  generateRSSFeed('fr')
  return {
    props: {
      locale: 'fr',
      title: 'Blog',
      description: '',
    },
  }
}

const BlogPage: FC = props => {
  const { t } = useContext(TranslationsContext)
  return (
    <DefaultLayout {...props}>
      <MainContent>
        <MarkdownContent>
          {t.blog.workingOn}{' '}
          <Link href="/es/blog">
            <a>{t.blog.spanishVersion}</a>
          </Link>{' '}
          {t.blog.available}
        </MarkdownContent>
      </MainContent>
    </DefaultLayout>
  )
}

export default BlogPage

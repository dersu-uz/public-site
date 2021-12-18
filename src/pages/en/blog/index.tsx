import { FC } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { generateRSSFeed } from '@/utils/generateRSSFeed'

import DefaultLayout from '@/layouts/DefaultLayout'

import MainContent from '@/components/MainContent'
import MarkdownContent from '@/components/MarkdownContent'

export const getStaticProps: GetStaticProps = async () => {
  generateRSSFeed('en')
  return {
    props: {
      locale: 'en',
      title: 'Coming soon',
      description: 'Coming soon',
    },
  }
}

const BlogPage: FC = props => {
  return (
    <DefaultLayout {...props}>
      <MainContent>
        <MarkdownContent>
          We are working on the english version of our blog. There is the{' '}
          <Link href="/es/blog">
            <a>spanish version</a>
          </Link>{' '}
          available.
        </MarkdownContent>
      </MainContent>
    </DefaultLayout>
  )
}

export default BlogPage

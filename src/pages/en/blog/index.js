import Link from 'next/link'
import DefaultLayout from '@/layouts/DefaultLayout'
import { generateRSSFeed } from '@/utils/generateRSSFeed'
import MarkdownContent from '@/components/MarkdownContent'

export async function getStaticProps() {
  generateRSSFeed('en')
  return {
    props: {
      locale: 'en',
      title: 'Coming soon',
      description: 'Coming soon',
    },
  }
}

const BlogPage = props => {
  return (
    <DefaultLayout {...props}>
      <MarkdownContent>
        We are working on the english version of our blog. There is the{' '}
        <Link href="/es/blog">
          <a>spanish version</a>
        </Link>{' '}
        available.
      </MarkdownContent>
    </DefaultLayout>
  )
}

export default BlogPage

import DefaultLayout from '@/layouts/DefaultLayout'
import { generateRSSFeed } from '@/utils/generateRSSFeed'

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
  return <DefaultLayout {...props}></DefaultLayout>
}

export default BlogPage

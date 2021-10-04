import DefaultLayout from '@/layouts/DefaultLayout'

export async function getStaticProps() {
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

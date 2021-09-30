import DefaultLayout from '@/layouts/DefaultLayout'

export const getStaticProps = async () => {
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

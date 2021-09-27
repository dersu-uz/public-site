import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ModuleFeaturedPosts from '@/components/ModuleFeaturedPosts'

export const getStaticProps = () => {
  return {
    props: {
      locale: 'es',
      title: 'Blog',
      description: 'Tu asistente en la montaña',
    },
  }
}

const BlogPage = () => (
  <>
    <Header />
    <ModuleFeaturedPosts />
    <Footer />
  </>
)

export default BlogPage

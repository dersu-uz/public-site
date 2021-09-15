import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export const getStaticProps = () => {
  return {
    props: {
      locale: 'es',
      description: 'Tu asistente en la montaña',
    },
  }
}

function HomePage() {
  return (
    <>
      <Hero imageUrl={`/images/hero/01.png`} />
      <Header />
      <Footer />
    </>
  )
}

export default HomePage

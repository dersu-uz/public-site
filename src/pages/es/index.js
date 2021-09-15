import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ModuleBetaAnnouncement from '@/components/ModuleBetaAnnouncement'
import ModuleIntro from '@/components/ModuleIntro'

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
      <ModuleIntro />
      <ModuleBetaAnnouncement />
      <Footer />
    </>
  )
}

export default HomePage

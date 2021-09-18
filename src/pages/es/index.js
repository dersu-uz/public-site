import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ModuleBetaAnnouncement from '@/components/ModuleBetaAnnouncement'
import ModuleHighlights, {
  ALIGN_MODES,
  COLOR_SCHEMES,
} from '@/components/ModuleHighlights'
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
      <ModuleHighlights
        title="Rutas para diferentes niveles y momentos"
        subtitle="Perfil de montañista"
        text="En Dersu podrás definir tus objetivos y capacidades (físicas, técnicas, etc.) para que podamos ofrecerte las rutas más adecuadas."
        imageUrl={`/images/highlights/01.jpg`}
        colorScheme={COLOR_SCHEMES.GREEN}
        alignMode={ALIGN_MODES.CENTER}
        separatorName="Lines"
      />
      <ModuleHighlights
        title="Preparar bien tus salidas es clave para evitar sorpresas"
        subtitle="Planificador"
        text="Queremos que los planes salgan bien: consultar la meteorología de la zona, los puntos críticos de la ruta, el material que necesitas y, por supuesto, compartirlo con tu grupo."
        imageUrl={`/images/highlights/02.jpg`}
        colorScheme={COLOR_SCHEMES.YELLOW}
        alignMode={ALIGN_MODES.LEFT}
        separatorName="ExclamationMark"
      />
      <ModuleHighlights
        title="Información extra para tomar mejores decisiones"
        subtitle="Ayuda en ruta"
        text="Estamos construyendo un sistema de avisos en tiempo real que te ayude a identificar puntos críticos en la ruta y a gestionar mejor la toma las decisiones."
        imageUrl={`/images/highlights/03.jpg`}
        colorScheme={COLOR_SCHEMES.BROWN}
        alignMode={ALIGN_MODES.CENTER}
        separatorName="Icons"
      />
      <ModuleHighlights
        title="Evolución, formación y consejo"
        subtitle="Aprende de montaña"
        text="En montaña, siempre hay algo que aprender. Por eso, estamos preparando diferentes opciones de formación guiada por profesionales, con la que podrás progresar a tu ritmo."
        imageUrl={`/images/highlights/04.jpg`}
        colorScheme={COLOR_SCHEMES.PINK}
        alignMode={ALIGN_MODES.LEFT}
        separatorName="Waves"
      />
      <ModuleBetaAnnouncement />
      <Footer />
    </>
  )
}

export default HomePage

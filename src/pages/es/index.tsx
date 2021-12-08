import { FC } from 'react'
import { GetStaticProps } from 'next'

import { BlogPost } from '@/types/common'

import { ALIGN_MODES, COLOR_SCHEMES } from '@/constants/theme'

import { getLatestPosts } from '@/services/blogService'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeHero from '@/components/HomeHero'
import ModuleBetaAnnouncement from '@/components/ModuleBetaAnnouncement'
import ModuleFeaturedPosts from '@/components/ModuleFeaturedPosts'
import ModuleHighlights, { SEPARATORS } from '@/components/ModuleHighlights'
import ModuleIntro from '@/components/ModuleIntro'

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = await getLatestPosts('es', 2)
  return {
    props: {
      locale: 'es',
      description: 'Conecta a las personas con las montañas',
      latestPosts,
    },
  }
}

type Props = {
  latestPosts?: Array<BlogPost>
}

const HomePage: FC<Props> = ({ latestPosts }) => (
  <>
    <HomeHero
      tagline={
        <>
          Dersu conecta a las personas
          <br /> con las montañas
        </>
      }
    />
    <Header />
    <ModuleIntro tagline="Conoce, explora y crece" />
    <ModuleHighlights
      title="Rutas para diferentes niveles y momentos"
      subtitle="Perfil de montañista"
      text="En Dersu podrás definir tus objetivos y capacidades (físicas, técnicas, etc.) para que podamos ofrecerte las rutas más adecuadas."
      imageUrl="/images/highlights/01.jpg"
      webpImageUrl="/images/highlights/01.webp"
      colorScheme={COLOR_SCHEMES.GREEN}
      alignMode={ALIGN_MODES.CENTER}
      separator={SEPARATORS.LINES}
    />
    <ModuleHighlights
      title="Preparar bien tus salidas es clave para evitar sorpresas"
      subtitle="Planificador"
      text="Queremos que los planes salgan bien: consultar la meteorología de la zona, los puntos críticos de la ruta, el material que necesitas y, por supuesto, compartirlo con tu grupo."
      imageUrl={['/images/highlights/02-a.jpg', '/images/highlights/02-b.jpg']}
      webpImageUrl={[
        '/images/highlights/02-a.webp',
        '/images/highlights/02-b.webp',
      ]}
      colorScheme={COLOR_SCHEMES.YELLOW}
      alignMode={ALIGN_MODES.LEFT}
      separator={SEPARATORS.EXCLAMATION_MARK}
    />
    <ModuleHighlights
      title="Información extra para tomar mejores decisiones"
      subtitle="Ayuda en ruta"
      text="Estamos construyendo un sistema de avisos en tiempo real que te ayude a identificar puntos críticos en la ruta y a gestionar mejor la toma las decisiones."
      imageUrl="/images/highlights/03.jpg"
      webpImageUrl="/images/highlights/03.webp"
      colorScheme={COLOR_SCHEMES.BROWN}
      alignMode={ALIGN_MODES.CENTER}
      separator={SEPARATORS.ICONS}
      overlapsPreviousModule={true}
    />
    <ModuleHighlights
      title="Evolución, formación y consejo"
      subtitle="Aprende de montaña"
      text="En montaña, siempre hay algo que aprender. Por eso, estamos preparando diferentes opciones de formación guiada por profesionales, con la que podrás progresar a tu ritmo."
      imageUrl="/images/highlights/04.jpg"
      webpImageUrl="/images/highlights/04.webp"
      colorScheme={COLOR_SCHEMES.PINK}
      alignMode={ALIGN_MODES.LEFT}
      separator={SEPARATORS.WAVES}
      framedImage={true}
    />
    <ModuleBetaAnnouncement title="Si quieres apuntarte a la beta, déjanos aquí tu email y te mantendremos al tanto." />
    <ModuleFeaturedPosts posts={latestPosts} />
    <Footer />
  </>
)

export default HomePage

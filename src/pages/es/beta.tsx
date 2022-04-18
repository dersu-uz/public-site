import { FC } from 'react'
import { GetStaticProps } from 'next'

import DefaultLayout from '@/layouts/DefaultLayout'
import Wrapper from '@/components/Wrapper'
import Picture from '@/components/Picture'

import Signup from '@/modules/Signup'
import { ENABLE_BETA_SIGNUP } from '@/constants/settings'

export const getStaticProps: GetStaticProps = async () => {
  if (!ENABLE_BETA_SIGNUP) {
    return { props: {}, notFound: true }
  }
  return {
    props: {
      locale: 'es',
      title: 'Apúntate a la Beta',
      description: 'Antes de lanzar la App, queremos que la pongas a prueba.',
    },
  }
}

const BetaLandingPage: FC = () => {
  return (
    <DefaultLayout
      title="Antes de lanzar la App, queremos que la pongas a prueba."
      heroImageUrl="/images/pages/beta/hero.jpg"
      webpHeroImageUrl="/images/pages/beta/hero.webp"
    >
      <Wrapper>
        <div className="max-w-screen-xl xl:mx-auto py-24 lg:py-16 flex gap-16 justify-between">
          <div className="lg:w-6/12">
            <h2 className="text-dersu-lg lg:text-dersu-2xl xl:text-dersu-4xl mb-12">
              ¿Quieres una invitación para la versión de prueba?
            </h2>
            <p className="mb-8">
              Dersu es una App de montaña para personas de todos los niveles,
              por eso necesitamos que mucha gente la pruebe. Buscamos guías con
              titulación y excursionistas de tortilla, gente que esquía o que
              escala en hielo.
            </p>
            <p className="flex justify-center my-16 lg:hidden">
              <Picture
                alt="Dersu App"
                imageType="png"
                imageName="picture-01a"
                path="/images/pages/beta"
                densities={[1, 2]}
              />
            </p>
            <p className="mb-8">En esta versión, podrás hacer cosas como:</p>
            <ul className="mb-8">
              <li>
                1. Definir tu nivel físico, técnico y de riesgo en las rutas.
              </li>
              <li>
                2. Ver las rutas Dersu, propuestas por guías con experiencia.
              </li>
              <li>
                3. Saber si las rutas son adecuadas para ti y para tu grupo.
              </li>
              <li>
                4. Planificar teniendo en cuenta puntos críticos, la meteo y
                material.
              </li>
              <li>
                5. Seguir la ruta con la información que necesitas para tomar
                decisiones.
              </li>
            </ul>
            <p>
              Solo tienes que apuntarte, recibir la invitación y si quieres,
              contarnos cómo podemos mejorar.
            </p>
            <p className="flex justify-center my-16 lg:hidden">
              <Picture
                alt="Dersu App"
                imageType="png"
                imageName="picture-01b"
                path="/images/pages/beta"
                densities={[1, 2]}
              />
            </p>
          </div>
          <div className="hidden lg:block lg:w-6/12">
            <Picture
              alt="Dersu App"
              imageType="png"
              imageName="picture-01"
              path="/images/pages/beta"
              densities={[1, 2]}
            />
          </div>
        </div>
      </Wrapper>
      <Signup />
    </DefaultLayout>
  )
}

export default BetaLandingPage

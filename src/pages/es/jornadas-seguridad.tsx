import { useContext } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Picture from '@/components/Picture'
import Wrapper from '@/components/Wrapper'

import TranslationsContext from '@/contexts/TranslationsContext'

import DersuLogoWithText from '../../styles/assets/dersu-logo-with-text.svg'
import ArrowDown from '../../../public/images/pages/jornadas-seguridad/arrow-down.svg'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      locale: 'es',
      title: 'Jornadas gratuitas para la seguridad en montaña',
    },
  }
}

const JornadasSeguridadPage = () => {
  const { currentLocale } = useContext(TranslationsContext)

  return (
    <>
      {/* Hero */}
      <div className="relative h-screen max-h-[900px] md:max-h-[700px] flex justify-center items-center">
        <header className="text-dersu-white">
          <div className="absolute top-0 left-0 w-full z-10">
            <Wrapper>
              <div className="flex py-10 items-center">
                <h1 className="flex-grow">
                  <Link href={`/${currentLocale}`}>
                    <a title="Dersu">
                      <DersuLogoWithText className="h-5 -mt-1.5 md:h-6 transition-colors " />
                    </a>
                  </Link>
                </h1>
                <p className="font-sans text-sm font-semibold">
                  #CAMINAYAPRENDE
                </p>
              </div>
            </Wrapper>
          </div>
        </header>

        {/* Hero background (desktop) */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            width="100%"
            height="100%"
            poster="/images/pages/jornadas-seguridad/hero-poster-desktop.jpg"
            className="w-full h-full object-cover"
          >
            <source
              src="/images/pages/jornadas-seguridad/hero-video-desktop.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Hero content */}
        <div className="relative px-10 text-center text-white">
          <p className="font-sans text-dersu-xs md:text-2xl mb-4">
            Julio/Agosto 2022
          </p>
          <h1 className="text-dersu-lg mb-12  md:text-dersu-4xl text-center max-w-5xl mx-auto">
            Jornadas gratuitas para la seguridad en montaña
          </h1>
          <Button type="button">Apúntate</Button>
        </div>
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <ArrowDown />
        </div>
      </div>

      <div className="bg-white">
        <Wrapper limitedWidth>
          {/* Sesiones en ruta */}
          <div className="border-dersu-black/20 border-b">
            <div className="py-11 md:py-20 flex flex-col justify-between gap-8 lg:flex-row">
              <div className="lg:w-6/12">
                <div className="lg:max-w-[620px]">
                  <h2 className="font-sans uppercase text-dersu-3xs md:text-dersu-2xs mb-4">
                    Sesiones en ruta
                  </h2>
                  <p className="text-dersu-lg md:text-dersu-4xl mb-5 md:mb-8">
                    Aprende de seguridad y primeros auxilios en montaña con
                    especialistas.
                  </p>
                  <p className="font-sans text-dersu-xs md:text-dersu-md">
                    Trataremos los básicos (y algún extra) en una ruta fácil,
                    con paradas para hablar y practicar técnicas que puedas
                    aplicar en tu siguiente salida.
                  </p>
                </div>
              </div>
              <div className="lg:w-5/12">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="jpg"
                  imageName="photo-01"
                  alt="Image"
                  imgClassName="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Con profesionales */}
          <div className="border-dersu-black/20 border-b">
            <div className="py-11 md:py-20 flex flex-col justify-between gap-8 lg:flex-row">
              <div className="lg:w-6/12">
                <div className="lg:max-w-[550px]">
                  <h2 className="font-sans uppercase text-dersu-3xs md:text-dersu-2xs mb-4">
                    Con profesionales de montaña
                  </h2>
                  <p className="text-dersu-lg md:text-dersu-4xl mb-5 md:mb-8">
                    De qué hablaremos:
                  </p>
                  <ul className="font-sans text-dersu-xs md:text-dersu-md">
                    <li className="mb-4 list-disc ml-8">
                      Cómo planificar tus rutas y hacerlas de forma más segura.
                    </li>
                    <li className="mb-4 list-disc ml-8">
                      Prepárate y reacciona ante emergencias: desde la
                      preparación del botiquín a cómo actuar si tienes que
                      llamar a los equipos de rescate.
                    </li>
                    <li className="mb-4 list-disc ml-8">
                      Orientación y tecnología como compañeras de ruta:
                      seguimiento y comunicaciones en entornos naturales.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-5/12 2xl:-mr-10">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="png"
                  imageName="collage-01"
                  webpEnabled
                  alt="Image"
                  imgClassName="w-full lg:-mt-10"
                />
              </div>
            </div>
          </div>

          {/* Formando grupos */}
          <div>
            <div className="py-11 md:py-20 flex flex-col justify-between gap-8 lg:flex-row">
              <div className="lg:w-1/2">
                <div className="lg:max-w-[600px]">
                  <h2 className="font-sans uppercase text-dersu-3xs md:text-dersu-2xs mb-4">
                    Estamos formando grupos
                  </h2>
                  <p className="text-dersu-lg md:text-dersu-4xl mb-5 md:mb-8">
                    Barajamos varias fechas y lugares donde hacerlo ¿cuál te
                    vendría mejor?
                  </p>
                  <Button type="button">Cuéntanos y apúntate</Button>
                </div>
              </div>
              <div className="lg:w-5/12 2xl:-mr-10">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="png"
                  imageName="collage-02"
                  webpEnabled
                  alt="Image"
                  imgClassName="hidden lg:block w-full lg:-mt-10"
                />
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="jpg"
                  imageName="photo-06"
                  alt="Image"
                  imgClassName="block lg:hidden w-full lg:-mt-10 rounded-xl"
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      {/* Organiza y colabora */}
      <div className="pt-24 pb-1">
        {/* Organizan */}
        <Wrapper limitedWidth>
          <h2 className="text-dersu-lg md:text-dersu-4xl mb-10">
            Quién organiza
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7 mb-24">
            <div className="bg-white rounded-lg flex flex-col px-8 hover:bg-dersu-blue">
              <p className="border-black/20 border-b h-[210px] flex justify-center items-center">
                <img
                  src="/images/pages/jornadas-seguridad/logo-dersu.svg"
                  alt="Logo Dersu"
                />
              </p>
              <p className="font-sans text-sm py-7">
                Una app de montaña donde encontrar rutas creadas por guías
                profesionales y poder aprender de montaña
              </p>
            </div>

            <div className="bg-white rounded-lg flex flex-col px-8 hover:bg-dersu-blue">
              <p className="border-black/20 border-b h-[210px] flex justify-center items-center">
                <img
                  src="/images/pages/jornadas-seguridad/logo-altaruta.svg"
                  alt="Logo Alta Ruta"
                />
              </p>
              <p className="font-sans text-sm py-7">
                Te ayuda a organizar rutas de senderismo de alto nivel, de forma
                autónoma o con guías profesionales
              </p>
            </div>

            <div className="bg-white rounded-lg flex flex-col px-8 hover:bg-dersu-blue">
              <p className="border-black/20 border-b h-[210px] flex justify-center items-center">
                <img
                  src="/images/pages/jornadas-seguridad/logo-garmin.svg"
                  alt="Logo Garmin"
                />
              </p>
              <p className="font-sans text-sm py-7">
                Líder mundial en navegación GPS en el sector náutico,
                automoción, aviación, fitness y actividades al aire libre.
              </p>
            </div>

            <div className="bg-white rounded-lg flex flex-col px-8 hover:bg-dersu-blue">
              <p className="border-black/20 border-b h-[210px] flex justify-center items-center">
                <img
                  src="/images/pages/jornadas-seguridad/logo-immed.svg"
                  alt="Logo IMMED"
                />
              </p>
              <p className="font-sans text-sm py-7">
                Una entidad dedicada a la investigación y formación en medicina
                de montaña y deportiva.
              </p>
            </div>
          </div>
        </Wrapper>

        {/* Colaboran */}
        <Wrapper limitedWidth className="hidden">
          <h2 className="text-dersu-lg md:text-dersu-4xl mb-10">
            Quién colabora
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7 mb-24">
            <div className="bg-white rounded-lg flex flex-col border-transparent border-4 hover:border-dersu-blue">
              <p className="flex justify-center items-center h-full">
                <img
                  src="/images/pages/jornadas-seguridad/logo-montanasegura.png"
                  alt="Logo Montaña Segura"
                  className="p-8"
                />
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col border-transparent border-4 hover:border-dersu-blue">
              <p className="flex justify-center items-center h-full">
                <img
                  src="/images/pages/jornadas-seguridad/logo-fam.png"
                  alt="Logo Federación Andaluza de Montañismo"
                  className="p-8"
                />
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col border-transparent border-4 hover:border-dersu-blue">
              <p className="flex justify-center items-center h-full">
                <img
                  src="/images/pages/jornadas-seguridad/logo-montanasegura.png"
                  alt="Logo Montaña Segura"
                  className="p-8"
                />
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col border-transparent border-4 hover:border-dersu-blue">
              <p className="flex justify-center items-center h-full">
                <img
                  src="/images/pages/jornadas-seguridad/logo-fam.png"
                  alt="Logo Federación Andaluza de Montañismo"
                  className="p-8"
                />
              </p>
            </div>
          </div>
        </Wrapper>
      </div>

      <Footer />
    </>
  )
}

export default JornadasSeguridadPage

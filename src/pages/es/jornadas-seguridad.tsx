import { GetStaticProps } from 'next'
import Link from 'next/link'

import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Picture from '@/components/Picture'
import Wrapper from '@/components/Wrapper'

import DersuLogoWithText from '../../styles/assets/dersu-logo-with-text.svg'
import { useContext } from 'react'
import TranslationsContext from '@/contexts/TranslationsContext'

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
    <div>
      {/* Hero */}
      <div className="relative">
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

        <div className="absolute top-0 left-0 w-full h-full">
          {/* <Picture
            imageName="hero"
            imageType="jpg"
            path="/images/pages/jornadas-seguridad"
            alt="Jornadas gratuitas para la seguridad en montaña"
            imgClassName="w-full h-full object-cover"
          /> */}
          <video
            autoPlay
            muted
            loop
            poster="/images/pages/jornadas-seguridad/hero.jpg"
            className="w-full h-full object-cover"
          >
            <source
              src="/images/pages/jornadas-seguridad/hero.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="relative px-10 py-[240px] md:py-[278px] text-center text-white">
          <p className="font-sans text-2xl mb-4">Julio/Agosto 2022</p>
          <h1 className="text-dersu-lg mb-12  md:text-dersu-4xl text-center max-w-5xl mx-auto">
            Jornadas gratuitas para la seguridad en montaña
          </h1>
          <Button type="button">Apúntate</Button>
        </div>
      </div>

      <div className="bg-white">
        <Wrapper limitedWidth>
          <div className="relative">
            <div>
              <div className="py-11 md:py-20 border-dersu-black/20 border-b">
                <div className="lg:w-1/2">
                  <div className="lg:max-w-[620px]">
                    <h2 className="font-sans uppercase text-dersu-3xs md:text-dersu-2xs mb-4">
                      sesiones en ruta
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
              </div>

              <div className="py-11 md:py-20 border-dersu-black/20 border-b">
                <div className="lg:w-1/2">
                  <div className="lg:max-w-[550px]">
                    <h2 className="font-sans uppercase text-dersu-3xs md:text-dersu-2xs mb-4">
                      con profesionales de montaña
                    </h2>
                    <p className="text-dersu-lg md:text-dersu-4xl mb-5 md:mb-8">
                      De qué hablaremos:
                    </p>
                    <ul className="font-sans text-dersu-xs md:text-dersu-md">
                      <li className="mb-4 list-disc ml-8">
                        Cómo planificar tus rutas y hacerlas de forma más
                        segura.
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
              </div>

              <div className="py-11 md:py-20">
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
              </div>
            </div>

            {/* Fotos */}
            <div className="relative h-[2000px] lg:absolute lg:w-[45%] lg:right-0 lg:top-0 lg:h-full">
              <p className="absolute right-0 top-20">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="jpg"
                  imageName="photo-01"
                  alt="Image"
                  imgClassName="w-full rounded-xl"
                />
              </p>
              <p className="absolute left-0 top-[34%]">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="jpg"
                  imageName="photo-02"
                  alt="Image"
                  imgClassName="w-full rounded-xl"
                />
              </p>
              <p className="absolute right-0 top-[39%]">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="jpg"
                  imageName="photo-03"
                  alt="Image"
                  imgClassName="w-full rounded-xl"
                />
              </p>
              <p className="absolute left-[30%] top-[56%]">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="jpg"
                  imageName="photo-04"
                  alt="Image"
                  imgClassName="w-full rounded-xl"
                />
              </p>
              <p className="absolute right-0 bottom-[19%]">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="jpg"
                  imageName="photo-05"
                  alt="Image"
                  imgClassName="w-full rounded-xl"
                />
              </p>
              <p className="absolute left-0 bottom-20">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="jpg"
                  imageName="photo-06"
                  alt="Image"
                  imgClassName="w-full rounded-xl"
                />
              </p>
            </div>
          </div>
        </Wrapper>
      </div>

      {/* Organiza y colabora */}
      <div className="pt-24 pb-1">
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
                Dersu, la aplicación movil que conecta a las{' '}
                <strong>personas</strong> con las <strong>montañas</strong>.
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
                Disfrutar de las rutas de <strong>alta montaña</strong> más
                exigentes nunca había sido tan <strong>fácil</strong>
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
                Leader en dispositivos que te <strong>guían</strong> y realizan
                un <strong>seguimiento de tu ubicación</strong>
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
                IMMED de las rutas de <strong>alta montaña</strong> más
                exigentes nunca había sido tan <strong>fácil</strong>
              </p>
            </div>
          </div>
        </Wrapper>

        <Wrapper limitedWidth>
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
    </div>
  )
}

export default JornadasSeguridadPage

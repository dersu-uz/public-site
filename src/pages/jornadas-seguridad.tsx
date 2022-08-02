import Footer from '@/components/Footer';
import HeaderLogoLink from '@/components/HeaderLogoLink';
import PartnerCard from '@/components/PartnerCard';
import Picture from '@/components/Picture';
import Wrapper from '@/components/Wrapper';
import { BASE_DOMAIN_URL } from '@/constants/settings';
import { GetStaticProps } from 'next';
import { usePlausible } from 'next-plausible';
import { NextSeo } from 'next-seo';
import ArrowDown from '../../public/images/pages/jornadas-seguridad/arrow-down.svg';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      locale: 'es',
      title: 'Jornadas gratuitas para la seguridad en montaña',
    },
  }
}

const JornadasSeguridadPage = () => {
  const plausible = usePlausible()

  return (
    <>
      {/* Social */}
      <NextSeo
        openGraph={{
          title: 'Jornadas gratuitas para la seguridad en montaña',
          description: 'Aprende de seguridad y primeros auxilios en montaña con especialistas.',
          type: 'article',
          images: [
            {
              url: `${BASE_DOMAIN_URL}/images/pages/jornadas-seguridad/open-graph-image.jpg`,
              alt: 'Grupo de gente aprendiendo seguridad y primeros auxilios',
            },
          ],
        }}
        twitter={{
          handle: '@dersu_uz',
          site: '@dersu_uz',
          cardType: 'summary_large_image',
        }}
      />

      {/* Hero */}
      <div className="relative h-screen max-h-[900px] md:max-h-[700px] flex justify-center items-center">
        <header className="text-dersu-white">
          <div className="absolute top-0 left-0 w-full z-10">
            <Wrapper>
              <div className="flex py-10 items-center justify-between">
                <HeaderLogoLink negativeColor={true} />
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
            preload="auto"
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

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />

        {/* Hero content */}
        <div className="relative px-10 text-center text-white">
          <p className="font-sans text-dersu-xs md:text-2xl mb-4">
            Julio/Agosto 2022
          </p>
          <h1 className="text-dersu-lg mb-12  md:text-dersu-4xl text-center max-w-5xl mx-auto">
            Jornadas gratuitas para la seguridad en montaña
          </h1>
          <a
            href="https://docs.google.com/forms/d/1OjC3f8jtO8Oo3Lsj-bZu86qSP8H_Igno82UBTm0SKFA/viewform?edit_requested=true"
            rel="noreferrer noopener"
            onClick={() => plausible('CTA Jornadas Seguridad - Formulario')}
            className="font-sans text-dersu-xs bg-dersu-blue text-dersu-brown font-semibold py-4 px-16 rounded-md whitespace-nowrap hover:bg-dersu-cream"
          >
            Apúntate
          </a>
        </div>
        <div className="absolute bottom-28 md:bottom-16 left-1/2 transform -translate-x-1/2">
          <ArrowDown />
        </div>
      </div>

      <div className="bg-white pt-10 md:pt-20 pb-10 md:pb-20">
        <Wrapper limitedWidth>
          {/* Sesiones en ruta */}
          <div className="border-dersu-black/20 border-b pb-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row">
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
                  webpEnabled
                  densities={[1, 2]}
                  alt="Image"
                  imgClassName="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Con profesionales */}
          <div className="border-dersu-black/20 border-b py-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row">
              <div className="lg:w-6/12 md:pt-10">
                <div className="lg:max-w-[550px]">
                  <h2 className="font-sans uppercase text-dersu-3xs md:text-dersu-2xs mb-4">
                    Con profesionales de montaña
                  </h2>
                  <p className="text-dersu-lg md:text-dersu-4xl mb-5 md:mb-8">
                    De qué hablaremos:
                  </p>
                  <ul className="font-sans text-dersu-xs md:text-dersu-md">
                    <li className="mb-4 list-disc ml-5 md:ml-7">
                      Cómo planificar tus rutas y hacerlas de forma más segura.
                    </li>
                    <li className="mb-4 list-disc ml-5 md:ml-7">
                      Prepárate y reacciona ante emergencias: desde la
                      preparación del botiquín a cómo actuar si tienes que
                      llamar a los equipos de rescate.
                    </li>
                    <li className="list-disc ml-5 md:ml-7">
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
                  densities={[1, 2]}
                  alt="Image"
                  imgClassName="w-full"
                />
              </div>
            </div>
          </div>

          {/* Formando grupos */}
          <div className="py-5 md:py-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row">
              <div className="lg:w-1/2 pt-5 md:pt-10">
                <div className="lg:max-w-[600px] pb-4 md:pb-0">
                  <h2 className="font-sans uppercase text-dersu-3xs md:text-dersu-2xs mb-4">
                    Estamos formando grupos
                  </h2>
                  <p className="text-dersu-lg md:text-dersu-4xl mb-10">
                    Barajamos varias fechas y lugares donde hacerlo ¿cuál te
                    vendría mejor?
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/1OjC3f8jtO8Oo3Lsj-bZu86qSP8H_Igno82UBTm0SKFA/viewform?edit_requested=true"
                    rel="noreferrer noopener"
                    onClick={() =>
                      plausible('CTA Jornadas Seguridad - Formulario')
                    }
                    className="font-sans text-dersu-xs bg-dersu-blue text-dersu-brown font-semibold py-4 px-16 rounded-md whitespace-nowrap hover:bg-dersu-black hover:text-white"
                  >
                    Cuéntanos y apúntate
                  </a>
                </div>
              </div>
              <div className="lg:w-5/12 2xl:-mr-10">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="png"
                  imageName="collage-02"
                  webpEnabled
                  densities={[1, 2]}
                  alt="Image"
                  imgClassName="hidden lg:block"
                />
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="jpg"
                  imageName="photo-06"
                  alt="Image"
                  webpEnabled
                  densities={[1, 2]}
                  imgClassName="block lg:hidden w-full lg:-mt-10 rounded-xl"
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      {/* Organiza y colabora */}
      <div className="pb-1">
        {/* Organizan */}
        <Wrapper limitedWidth className="pt-10 md:pt-24">
          <h2 className="text-dersu-lg md:text-dersu-4xl mb-5 md:mb-10">
            Quién organiza
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7 mb-5 md:mb-10">
            <PartnerCard
              isLinkedCard={true}
              linkTarget={"_blank"}
              linkRel={"noopener noreferrer"}
              linkUrl={"https://dersu.uz/es/"}
              onClick={() => plausible('CTA Jornadas Seguridad - Dersu')}
              imageSource={"/images/pages/jornadas-seguridad/logo-dersu.svg"}
              imageAltText={"Logo Dersu"}
              partnerDescription={
                <p className="font-sans text-sm py-7">
                Una <strong>app</strong> de montaña donde encontrar rutas
                creadas por <strong>guías profesionales</strong> y poder{' '}
                <strong>aprender</strong> de montaña
              </p>
              }
            />

            <PartnerCard
              isLinkedCard={true}
              linkTarget={"_blank"}
              linkRel={"noopener noreferrer"}
              linkUrl={"https://www.laaltaruta.com/"}
              onClick={() => plausible('CTA Jornadas Seguridad - Alta Ruta')}
              imageSource={"/images/pages/jornadas-seguridad/logo-altaruta.svg"}
              imageAltText={"Logo Alta Ruta"}
              partnerDescription={
                <p className="font-sans text-sm py-7">
                  Te ayuda a <strong>organizar rutas</strong> de senderismo de{' '}
                  <strong>alto nivel</strong>, de forma autónoma o con guías
                  profesionales
                </p>
              }
            />

            <PartnerCard
              isLinkedCard={true}
              linkTarget={"_blank"}
              linkRel={"noopener noreferrer"}
              linkUrl={"https://www.garmin.com/es-ES/c/outdoor-recreation/handheld-hiking-gps/"}
              onClick={() => plausible('CTA Jornadas Seguridad - Garmin')}
              imageSource={"/images/pages/jornadas-seguridad/logo-garmin.svg"}
              imageAltText={"Logo Garmin"}
              partnerDescription={
                <p className="font-sans text-sm py-7">
                  Líder mundial en <strong>navegación GPS</strong> en el sector
                  náutico, automoción, aviación, fitness y actividades al aire
                  libre.
                </p>
              }
            />

            <PartnerCard
              isLinkedCard={true}
              linkTarget={"_blank"}
              linkRel={"noopener noreferrer"}
              linkUrl={"http://www.immed.info/index.php/es/"}
              onClick={() => plausible('CTA Jornadas Seguridad - Immed')}
              imageSource={"/images/pages/jornadas-seguridad/logo-immed.svg"}
              imageAltText={"Logo IMMED"}
              partnerDescription={
                <p className="font-sans text-sm py-7">
                  Una entidad dedicada a la{' '}
                  <strong>investigación y formación</strong> en medicina de
                  montaña y deportiva.
                </p>
              }
            />
          </div>
        </Wrapper>

        {/* Colaboran */}
        <Wrapper limitedWidth className="pt-5 md:pt-12">
          <h2 className="text-dersu-lg md:text-dersu-4xl mb-5 md:mb-10">
            Quién colabora
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7">
            <a
              href="https://montanasegura.com/"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() =>
                plausible('CTA Jornadas Seguridad - Montana Segura')
              }
              className="bg-white rounded-lg flex flex-col border-transparent border-4 hoverable:hover:border-dersu-blue min-h-[190px]"
            >
              <p className="flex justify-center items-center h-full">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="png"
                  imageName="logo-montanasegura"
                  webpEnabled
                  densities={[1, 2]}
                  alt="Logo Montaña Segura"
                  imgClassName="p-8 max-w-[240px]"
                />
              </p>
            </a>

            <a
              href="https://web.huescalamagia.es/"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() =>
                plausible('CTA Jornadas Seguridad - Huesca La Magia')
              }
              className="bg-white rounded-lg flex flex-col border-transparent border-4 hoverable:hover:border-dersu-blue min-h-[190px]"
            >
              <p className="flex justify-center items-center h-full">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="png"
                  imageName="logo-huescalamagia"
                  webpEnabled
                  densities={[1, 2]}
                  alt="Logo Huesca La Magia"
                  imgClassName="p-8 max-w-[240px]"
                />
              </p>
            </a>

            <a
              href="https://www.valledetena.com/"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() =>
                plausible('CTA Jornadas Seguridad - Valle de Tena')
              }
              className="bg-white rounded-lg flex flex-col border-transparent border-4 hoverable:hover:border-dersu-blue min-h-[190px]"
            >
              <p className="flex justify-center items-center h-full">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="png"
                  imageName="logo-valledetena"
                  webpEnabled
                  densities={[1, 2]}
                  alt="Logo Valle de Tena"
                  imgClassName="p-8 max-w-[240px]"
                />
              </p>
            </a>

            <a
              href="https://desni.in/jorsegurdersu"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() =>
                plausible(
                  'CTA Jornadas Seguridad - Grandes Espacios Turismo Activo'
                )
              }
              className="bg-white rounded-lg flex flex-col border-transparent border-4 hoverable:hover:border-dersu-blue min-h-[190px]"
            >
              <p className="flex justify-center items-center h-full">
                <img
                  src="/images/pages/jornadas-seguridad/logo-geta.svg"
                  alt="Logo Grandes Espacios Turismo Activo"
                  className="p-8 max-w-[240px]"
                />
              </p>
            </a>

            <a
              href="https://www.revistainua.com/"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => plausible('CTA Jornadas Seguridad - Revista Inua')}
              className="bg-white rounded-lg flex flex-col border-transparent border-4 hoverable:hover:border-dersu-blue min-h-[190px]"
            >
              <p className="flex justify-center items-center h-full">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="png"
                  imageName="logo-inua"
                  webpEnabled
                  densities={[1, 2]}
                  alt="Logo Revista Inua"
                  imgClassName="p-8 max-w-[240px]"
                />
              </p>
            </a>

            <a
              href="https://revistasalvaje.com/"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() =>
                plausible('CTA Jornadas Seguridad - Revista Salvaje')
              }
              className="bg-white rounded-lg flex flex-col border-transparent border-4 hoverable:hover:border-dersu-blue min-h-[190px]"
            >
              <p className="flex justify-center items-center h-full">
                <Picture
                  path="/images/pages/jornadas-seguridad"
                  imageType="png"
                  imageName="logo-salvaje"
                  webpEnabled
                  densities={[1, 2]}
                  alt="Logo Revista Salvaje"
                  imgClassName="p-8 max-w-[240px]"
                />
              </p>
            </a>
          </div>
        </Wrapper>
      </div>

      <Footer />
    </>
  )
}

export default JornadasSeguridadPage

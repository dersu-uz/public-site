import { FC, useContext } from 'react'
import Fade from 'react-reveal/Fade'

import Wrapper from '@/components/Wrapper'
import StoreButtons from '@/components/StoreButtons'
import TranslationsContext from '@/contexts/TranslationsContext'

const Pricing: FC = () => {
  const { currentLocale, t } = useContext(TranslationsContext)

  return (
    <div id="pricing" className="py-16">
      <Wrapper>
        {/* Header */}
        <h2 className="font-sans font-bold text-dersu-2xs uppercase tracking-widest mb-5 md:text-dersu-xs">
          Suscripción
        </h2>
        <p className="text-dersu-xl mb-7 md:mb-12 max-w-xl md:text-dersu-xl lg:text-dersu-4xl">
          Elige el plan que mejor se adapta a ti
        </p>

        {/* Plans */}
        <Fade bottom cascade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-8 md:mb-16">
            {/* Free plan */}
            <div className="bg-white rounded-3xl px-4 md:px-8 py-7 md:py-11">
              <div className="text-center">
                <h3 className="text-dersu-lg md:mb-3">Gratis</h3>
                <p className="text-dersu-3xs font-sans uppercase">
                  Una ruta al mes, a ver si te gusta
                </p>
                <p className="text-center">
                  <img
                    src="/images/modules/pricing/plan-1.svg"
                    alt="Illustration"
                    className="inline-block"
                  />
                </p>
                <p className="font-sans text-dersu-2xs text-dersu-light-gray">
                  Encuentra rutas creadas por profesionales, aprende y mejora tu
                  seguridad en montaña. Una al mes, siempre gratis.
                </p>
              </div>
              <div className="font-sans text-dersu-sm pt-6 mt-6 border-t border-neutral-200">
                <h4 className="font-semibold mb-4">Qué incluye:</h4>
                <ul className="list-disc list-outside">
                  <li className="ml-5 mb-1">Planifica una salida al mes</li>
                  <li className="ml-5 mb-1">
                    Aviso de puntos críticos al hacerla
                  </li>
                  <li className="ml-5 mb-1">Configura tus niveles</li>
                  <li className="ml-5 mb-1">
                    Aprende con la biblioteca de montaña
                  </li>
                </ul>
              </div>
            </div>

            {/* No limits plan */}
            <div className="bg-white rounded-3xl px-4 md:px-8 py-7 md:py-11 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24">
                <img
                  src="/images/modules/pricing/discount-shape.svg"
                  alt="Shape"
                  className="absolute top-0 left-0 w-full h-full"
                />
                <p className="absolute w-full h-full flex items-center justify-center text-[30px] font-bold">
                  -50
                  <span className="text-dersu-xs mb-3">%</span>
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-dersu-lg md:mb-3">Sin Límites</h3>
                <p className="text-dersu-3xs font-sans uppercase">
                  10€ el primer año, a petarlo
                </p>
                <p className="text-center">
                  <img
                    src="/images/modules/pricing/plan-2.svg"
                    alt="Illustration"
                    className="inline-block"
                  />
                </p>
                <p className="font-sans text-dersu-2xs text-dersu-light-gray">
                  Planifica, invita y trackea todas las rutas que quieras, el
                  primer año viene con descuento. Y después 20€/año, que tampoco
                  es una locura.
                </p>
              </div>
              <div className="font-sans text-dersu-sm pt-6 mt-6 border-t border-neutral-200">
                <h4 className="font-semibold mb-4">Qué incluye:</h4>
                <ul className="list-disc list-outside">
                  <li className="ml-5 mb-1">
                    Salidas hasta el infinito y más allá
                  </li>
                  <li className="ml-5 mb-1">
                    Planifica y participa cuanto quieras
                  </li>
                  <li className="ml-5 mb-1">Importa rutas a lo loco</li>
                  <li className="ml-5 mb-1">
                    Aprende con la biblioteca de montaña
                  </li>
                </ul>
              </div>
            </div>

            {/* Future plans */}
            <div className="bg-dersu-blue rounded-3xl px-4 md:px-8 py-7 md:pt-11 md:pb-7">
              <div className="text-center h-full flex flex-col justify-between">
                <h3 className="text-dersu-lg">
                  Siempre oteando el horizonte...
                </h3>
                <p className="text-center">
                  <img
                    src="/images/modules/pricing/plan-3.svg"
                    alt="Illustration"
                    className="inline-block"
                  />
                </p>
                <p className="font-sans text-dersu-sm py-6 flex-grow">
                  Pronto lanzaremos un plan para quienes queréis desarrollar
                  vuestras habilidades físicas, técnicas y psicológicas.{' '}
                  <strong>
                    Estamos contando todas las novedades en la Newsletter, no te
                    la pierdas.
                  </strong>
                </p>
                <p>
                  <a
                    href="http://eepurl.com/hI63hX"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="rounded-md font-sans text-sm bg-white/20 flex items-center justify-center py-4 hoverable:hover:bg-black hoverable:hover:text-white"
                  >
                    Apuntate a nuestra Newsletter
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Fade>

        {/* Footer */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-dersu-lg mb-4 text-center md:text-left max-w-sm mx-auto md:mx-0 md:max-w-lg">
              Descarga la App y organiza tus rutas de una manera más segura.
            </h2>
            <StoreButtons />

            {currentLocale !== 'es' && (
              <p className="font-sans text-xs mt-4 text-center md:text-left max-w-xs mx-auto md:mx-0">
                {t.common.appLocalesDisclaimer}
              </p>
            )}
          </div>
          <div className="md:w-1/2 order-1 md:order-2 border-neutral-200 border-b md:border-l md:border-b-0 pb-8 md:pl-8 flex flex-col md:flex-row gap-1 items-center md:items-start">
            <img
              src="/images/modules/pricing/guide-badge.svg"
              alt="Guide Badge"
            />
            <div className="text-center md:text-left">
              <h2 className="text-dersu-lg mb-1">
                ¿Eres guía de Montaña AEGM?
              </h2>
              <p className="font-sans text-lg">
                La versión Dersu Sin Límites es gratis para ti
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Pricing

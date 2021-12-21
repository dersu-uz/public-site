import { FC, useContext } from 'react'
import Fade from 'react-reveal/Fade'

import TranslationsContext from '@/contexts/TranslationsContext'

import Picture from '@/components/Picture'

const HomeRouteAlerts: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className="bg-dersu-dark-green text-dersu-blue">
      <div className="md:flex md:max-h-[710px] overflow-hidden">
        <div className="px-4 pt-16 md:w-6/12 md:py-16 md:pl-10 md:pr-20">
          <Fade right>
            <h2 className="font-sans font-bold text-dersu-2xs uppercase tracking-widest mb-5 md:text-dersu-xs 2xl:text-center">
              {t.moduleHomeRouteAlerts.title}
            </h2>
            <p className="text-dersu-xl mb-24 md:mb-40 max-w-screen-sm 2xl:mx-auto 2xl:text-center md:text-dersu-xl lg:text-dersu-4xl">
              {t.moduleHomeRouteAlerts.subtitle}
            </p>
            <p className="text-dersu-md mb-28 max-w-lg 2xl:mx-auto 2xl:text-center">
              {t.moduleHomeRouteAlerts.text}
            </p>
          </Fade>
        </div>
        <div className="relative md:w-6/12 md:pt-24 md:py-24">
          <Picture
            alt="Dersu App"
            path="/images/modules/home-route-alerts"
            imageName="picture-01"
            imageType="jpg"
            pictureClassName="flex w-full h-full"
            imgClassName="flex-grow object-cover"
            webpEnabled
          />
          <div className="absolute w-full flex justify-center -top-20 md:top-auto md:bottom-[-120px] ">
            <Fade bottom>
              <Picture
                alt="Dersu App"
                path="/images/modules/home-route-alerts"
                imageName="picture-02"
                imageType="png"
                densities={[1, 2]}
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRouteAlerts

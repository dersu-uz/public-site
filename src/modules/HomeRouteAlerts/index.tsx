import { FC, useContext } from 'react'
import TranslationsContext from '@/contexts/TranslationsContext'
import Picture from '@/components/Picture'

const HomeRouteAlerts: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className="bg-dersu-dark-green text-dersu-blue text-center md:text-left">
      <div className="md:flex md:max-h-[600px] overflow-hidden">
        <div className="md:w-6/12 px-4 pt-16 md:py-16 md:pl-10 md:pr-20">
          <h2 className="font-sans font-bold text-dersu-2xs mb-5 md:text-dersu-2xs lg:text-dersu-xs uppercase tracking-widest">
            {t.moduleHomeRouteAlerts.title}
          </h2>
          <p className="text-dersu-xl md:text-dersu-xl mb-20 lg:text-dersu-3xl xl:text-dersu-4xl xl:max-w-3xl">
            {t.moduleHomeRouteAlerts.subtitle}
          </p>
          <p className="text-dersu-sm mb-20 lg:text-dersu-md xl:max-w-3xl">
            {t.moduleHomeRouteAlerts.text}
          </p>
        </div>
        <div className="md:w-6/12 relative md:pt-16 md:py-16">
          <Picture
            alt="Dersu App"
            path="/images/modules/home-route-alerts"
            imageName="picture-01"
            imageType="jpg"
            densities={[1, 2]}
            pictureClassName="flex w-full h-full"
            imgClassName="flex-grow object-cover"
            webpEnabled
          />
          <div className="absolute w-full -top-20 md:top-auto md:bottom-[-120px] flex justify-center">
            <Picture
              alt="Dersu App"
              path="/images/modules/home-route-alerts"
              imageName="picture-02"
              imageType="png"
              densities={[1, 2]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRouteAlerts

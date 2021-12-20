import { FC, useContext } from 'react'
import Fade from 'react-reveal/Fade'

import TranslationsContext from '@/contexts/TranslationsContext'

import Picture from '@/components/Picture'

const HomeRoutePlanning: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className="bg-dersu-pink text-dersu-brown pt-16 px-4 text-center md:pt-16 md:p-8">
      <Fade bottom>
        <h2 className="font-sans font-bold text-dersu-2xs uppercase tracking-widest mb-5 md:text-dersu-xs">
          {t.moduleHomeRoutePlanning.title}
        </h2>
        <p className="text-dersu-xl px-8 mb-12 max-w-screen-md mx-auto text-center md:mb-20 md:px-0 md:text-dersu-4xl">
          {t.moduleHomeRoutePlanning.subtitle}
        </p>
      </Fade>
      <div className="flex flex-col gap-4 md:flex-row md:grid-flow-col max-w-screen-xl mx-auto">
        <Fade bottom>
          <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col justify-between">
            <p className="flex justify-center">
              <Picture
                alt="Dersu app"
                path="/images/modules/home-route-planning"
                imageName="picture-01"
                imageType="png"
                densities={[1, 2]}
                webpEnabled
                pictureClassName="w-full px-4 md:w-auto md:p-0"
                imgClassName="w-full"
              />
            </p>
            <p className="text-dersu-md basis-20 max-w-xs mx-auto">
              {t.moduleHomeRoutePlanning.text1}
            </p>
          </div>
          <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col justify-between">
            <p className="flex justify-center">
              <Picture
                alt="Dersu app"
                path="/images/modules/home-route-planning"
                imageName="picture-02"
                imageType="png"
                densities={[1, 2]}
                webpEnabled
                pictureClassName="w-full px-4 md:w-auto md:p-0"
                imgClassName="w-full"
              />
            </p>
            <p className="text-dersu-md basis-20 max-w-xs mx-auto">
              {t.moduleHomeRoutePlanning.text2}
            </p>
          </div>
          <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col justify-between">
            <p className="flex justify-center">
              <Picture
                alt="Dersu app"
                path="/images/modules/home-route-planning"
                imageName="picture-03"
                imageType="png"
                densities={[1, 2]}
                webpEnabled
                pictureClassName="w-full px-4 md:w-auto md:p-0"
                imgClassName="w-full"
              />
            </p>
            <p className="text-dersu-md basis-20 max-w-xs mx-auto">
              {t.moduleHomeRoutePlanning.text3}
            </p>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default HomeRoutePlanning

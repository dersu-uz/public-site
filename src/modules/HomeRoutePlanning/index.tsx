import { FC, useContext } from 'react'
import TranslationsContext from '@/contexts/TranslationsContext'
import Picture from '@/components/Picture'

const HomeRoutePlanning: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className="bg-dersu-pink text-dersu-brown py-16 px-4 text-center">
      <h2 className="font-sans font-bold text-dersu-2xs mb-5 md:text-dersu-2xs lg:text-dersu-xs uppercase tracking-widest">
        {t.moduleHomeRoutePlanning.title}
      </h2>
      <p className="text-dersu-xl mx-auto md:text-dersu-xl mb-20 lg:text-dersu-3xl lg:max-w-2xl xl:text-dersu-4xl xl:max-w-3xl xl:mx-auto">
        {t.moduleHomeRoutePlanning.subtitle}
      </p>
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-8 md:gap-y-4 md:grid-flow-col max-w-screen-xl mx-auto">
        <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col justify-between">
          <p className="flex justify-center">
            <Picture
              alt="Dersu app"
              path="/images/modules/home-route-planning"
              imageName="picture-01"
              imageType="png"
              densities={[1, 2]}
              webpEnabled
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
            />
          </p>
          <p className="text-dersu-md basis-20 max-w-xs mx-auto">
            {t.moduleHomeRoutePlanning.text3}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeRoutePlanning

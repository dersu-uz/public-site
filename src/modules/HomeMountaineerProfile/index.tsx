import { FC, useContext } from 'react'

import TranslationsContext from '@/contexts/TranslationsContext'

import Picture from '@/components/Picture'

const HomeMountaineerProfile: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className="lg:flex">
      <div className="lg:w-6/12 bg-dersu-brown text-dersu-blue py-16 px-10 text-center">
        <h2 className="font-sans font-bold text-dersu-2xs mb-5 md:text-dersu-2xs lg:text-dersu-xs uppercase tracking-widest">
          {t.moduleHomeMountaineerProfile.title}
        </h2>
        <p className="text-dersu-xl md:text-dersu-xl mb-20 lg:text-dersu-3xl xl:text-dersu-4xl xl:max-w-3xl xl:mx-auto">
          {t.moduleHomeMountaineerProfile.subtitle}
        </p>
        <p className="text-dersu-sm mb-20 lg:text-dersu-md xl:mx-auto xl:max-w-3xl">
          {t.moduleHomeMountaineerProfile.text}
        </p>
      </div>
      <div className="lg:w-6/12 bg-dersu-cream flex justify-center p-16">
        <div className="place-self-center md:hidden -mt-44">
          <Picture
            alt="Dersu App"
            path="/images/modules/home-mountaineer-profile"
            imageName="picture-mobile"
            imageType="png"
            densities={[1, 2]}
            webpEnabled
          />
        </div>
        <div className="place-self-center hidden md:block">
          <Picture
            alt="Dersu App"
            path="/images/modules/home-mountaineer-profile"
            imageName="picture-desktop"
            imageType="png"
            densities={[1, 2]}
            webpEnabled
          />
        </div>
      </div>
    </div>
  )
}

export default HomeMountaineerProfile

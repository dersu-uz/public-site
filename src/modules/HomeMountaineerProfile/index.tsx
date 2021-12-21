import { FC, useContext } from 'react'
import Fade from 'react-reveal/Fade'

import TranslationsContext from '@/contexts/TranslationsContext'

import Picture from '@/components/Picture'

const HomeMountaineerProfile: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className="md:flex md:min-h-[785px]">
      <div className="md:w-[55%] bg-dersu-brown text-dersu-blue py-16 px-8 md:px-10 text-center">
        <Fade left>
          <h2 className="font-sans font-bold text-dersu-2xs uppercase tracking-widest mb-5 md:text-dersu-xs">
            {t.moduleHomeMountaineerProfile.title}
          </h2>
          <p className="text-dersu-xl mb-24 mx-auto max-w-lg md:text-dersu-xl lg:text-dersu-4xl">
            {t.moduleHomeMountaineerProfile.subtitle}
          </p>
          <p className="text-dersu-md mb-28 mx-auto max-w-xl">
            {t.moduleHomeMountaineerProfile.text}
          </p>
        </Fade>
      </div>
      <div className="md:w-[45%] bg-dersu-cream flex justify-center pb-12 md:p-8">
        <Fade right>
          <p className="flex w-full h-full items-center">
            <Picture
              alt="Dersu App"
              path="/images/modules/home-mountaineer-profile"
              imageName="picture-mobile"
              imageType="png"
              densities={[1, 2]}
              webpEnabled
              pictureClassName="w-full lg:hidden -mt-28 md:mt-0 px-8 md:w-auto md:p-0"
              imgClassName="w-full"
            />
            <Picture
              alt="Dersu App"
              path="/images/modules/home-mountaineer-profile"
              imageName="picture-desktop"
              imageType="png"
              densities={[1, 2]}
              webpEnabled
              pictureClassName="place-self-center hidden lg:block"
              imgClassName="w-full"
            />
          </p>
        </Fade>
      </div>
    </div>
  )
}

export default HomeMountaineerProfile

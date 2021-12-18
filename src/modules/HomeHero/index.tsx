import { FC, useContext } from 'react'

import TranslationsContext from '@/contexts/TranslationsContext'

import Picture from '@/components/Picture'
import Wrapper from '@/components/Wrapper'

const HomeHero: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className="min-h-screen relative">
      <div className="absolute w-full h-full">
        <Picture
          className="flex-grow object-cover"
          alt="background"
          imageName="hero-01"
          path="/images/home/hero"
          imageType="jpg"
          webpEnabled
        />
      </div>

      <div className="absolute w-full h-full">
        <Wrapper>
          <h1 className="text-dersu-4xl text-dersu-white">
            {t.moduleHomeHero.tagLine}
          </h1>
          <p className="text-dersu-md font-semibold text-dersu-blue">
            {t.moduleHomeHero.signupForBeta}
          </p>
        </Wrapper>
      </div>
    </div>
  )
}

export default HomeHero

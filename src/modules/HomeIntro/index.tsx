import { FC, useContext } from 'react'
import Fade from 'react-reveal/Fade'

import TranslationsContext from '@/contexts/TranslationsContext'

import Wrapper from '@/components/Wrapper'

const HomeIntro: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className="pt-16 pb-16 text-center md:pt-44 md:pb-14">
      <Wrapper>
        <Fade bottom>
          <h2 className="text-dersu-lg mb-16 md:mb-24 mx-auto max-w-sm md:text-dersu-3xl lg:text-dersu-4xl md:max-w-3xl">
            {t.moduleHomeIntro.tagLine}
          </h2>
        </Fade>
        <span className="inline-block w-1 h-32 from-dersu-black to-transparent bg-gradient-to-b"></span>
      </Wrapper>
    </div>
  )
}

export default HomeIntro

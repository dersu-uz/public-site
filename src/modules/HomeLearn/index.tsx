import { FC, useContext } from 'react'
import Fade from 'react-reveal/Fade'

import TranslationsContext from '@/contexts/TranslationsContext'

const HomeLearn: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className="bg-dersu-blue text-dersu-brown text-center pt-16 pb-16 px-4 md:py-16">
      <Fade right>
        <h2 className="font-sans font-bold text-dersu-2xs uppercase tracking-widest mb-5 md:text-dersu-xs">
          {t.moduleHomeLearn.title}
        </h2>
        <p className="text-dersu-xl max-w-3xl md:max-w-md lg:max-w-screen-md mx-auto mb-12 md:text-dersu-xl lg:text-dersu-4xl">
          {t.moduleHomeLearn.subtitle}
        </p>
        <p className="text-dersu-md mb-14 max-w-2xl mx-auto md:text-dersu-md">
          {t.moduleHomeLearn.text}
        </p>
        <div className="flex justify-center">
          <img className='opacity-90'
            src="/images/modules/home-learn/picture-01.jpg"
            alt={t.moduleHomeLearn.title}
          />
        </div>
      </Fade>
    </div>
  )
}

export default HomeLearn

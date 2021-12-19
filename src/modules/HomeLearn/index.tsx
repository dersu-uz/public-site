import { FC, useContext } from 'react'

import TranslationsContext from '@/contexts/TranslationsContext'

const HomeLearn: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className="bg-dersu-blue text-dersu-brown pt-16 pb-4 md:py-16 px-4 text-center">
      <h2 className="font-sans font-bold text-dersu-2xs mb-5 md:text-dersu-2xs lg:text-dersu-xs uppercase tracking-widest">
        {t.moduleHomeLearn.title}
      </h2>
      <p className="text-dersu-xl mx-auto md:text-dersu-xl mb-20 lg:text-dersu-3xl lg:max-w-2xl xl:text-dersu-4xl xl:max-w-3xl xl:mx-auto">
        {t.moduleHomeLearn.subtitle}
      </p>
      <p className="text-dersu-sm mb-20 mx-auto lg:text-dersu-md lg:max-w-2xl">
        {t.moduleHomeLearn.text}
      </p>
      <div className="flex justify-center">
        <img src="/images/modules/home-learn/picture-01.jpg" alt="" />
      </div>
    </div>
  )
}

export default HomeLearn

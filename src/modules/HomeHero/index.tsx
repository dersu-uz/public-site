import { FC, useContext } from 'react'

import TranslationsContext from '@/contexts/TranslationsContext'

import Picture from '@/components/Picture'
import MailchimpForm from '@/components/MailchimpForm'

import styles from './styles.module.css'

const HomeHero: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className={styles.module}>
      <div className="md:h-screen md:max-h-[900px]">
        <div className="flex flex-col md:flex-row items-end">
          <div className="px-8 md:w-6/12 md:pl-16 md:pr-0">
            <h1 className="text-dersu-lg text-center pt-28 pb-6 md:text-left lg:text-dersu-4xl text-dersu-white mb-14">
              {t.moduleHomeHero.tagLine}
            </h1>
            <p className="text-dersu-md font-semibold text-dersu-blue text-center md:text-left mb-8">
              {t.moduleHomeHero.signupForBeta}
            </p>
            <div className="md:max-w-lg">
              <MailchimpForm />
            </div>
          </div>
          <div className="w-full md:w-6/12 flex justify-center">
            <div>
              <Picture
                alt="Dersu app"
                path="/images/home/hero"
                imageName="hero-phone"
                imageType="png"
                densities={[1, 2]}
                webpEnabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero

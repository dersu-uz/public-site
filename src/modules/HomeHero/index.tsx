import { FC, useContext } from 'react'

import TranslationsContext from '@/contexts/TranslationsContext'

import Picture from '@/components/Picture'

import styles from './styles.module.css'

const HomeHero: FC = () => {
  const { t, currentLocale } = useContext(TranslationsContext)
  return (
    <div className={styles.module_bg_desktop}>
      <div className="relative">
        <div className="absolute inset-0 bg-dersu-brown/30"></div>
        <div className="relative min-h-[900px] md:flex mx-auto max-w-screen-2xl">
          <div className="md:px-8 md:w-6/12 md:pl-16 md:pr-0">
            <div className={styles.module_bg_mobile}>
              <div className="md:hidden absolute inset-0 bg-dersu-brown/30"></div>
              <h1 className="relative text-dersu-white text-dersu-lg text-center pt-[208px] md:pt-[110px] mb-16 max-w-[300px] md:max-w-none mx-auto md:text-dersu-3xl lg:text-dersu-4xl md:text-left">
                {t.moduleHomeHero.tagLine}
              </h1>
              <div className="relative px-8 md:hidden flex justify-center overflow-hidden h-1/6">
                <Picture
                  alt="Dersu app"
                  path="/images/modules/home-hero"
                  imageName={`hero-phone-${currentLocale}`}
                  imageType="png"
                  densities={[1, 2]}
                  webpEnabled
                />
              </div>
            </div>
            <div className="bg-dersu-brown md:bg-transparent py-16 px-4 md:p-0 mt-[-150px] transform scale-100 md:mt-0">
              <p className="text-dersu-lg text-center text-dersu-blue mb-8 md:mb-4 max-w-xs md:max-w-sm mx-auto md:mx-0 md:text-dersu-md md:text-left">
                {t.moduleHomeHero.downloadApp}
              </p>

              <div className="md:max-w-lg text-center md:text-left mx-auto md:mx-0 flex flex-col md:flex-row gap-3 items-center">
                <a
                  href="https://apps.apple.com/us/app/dersu/id1596941542"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t.common.downloadAppApple}
                  className="block"
                >
                  <img
                    src={`/images/common/icon-app-store-light.${currentLocale}.svg`}
                    alt={t.common.downloadAppApple}
                    className="h-16 md:h-10 rounded-[10px] md:rounded-[6px]"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=uz.dersu"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t.common.downloadAppGoogle}
                  className="block"
                >
                  <img
                    src={`/images/common/icon-play-store-light.${currentLocale}.svg`}
                    alt={t.common.downloadAppGoogle}
                    className="h-16 md:h-10 rounded-[10px] md:rounded-[6px]"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-6/12 flex justify-center md:pt-[90px]">
            <div className="hidden md:block">
              <Picture
                alt="Dersu app"
                path="/images/modules/home-hero"
                imageName={`hero-phone-${currentLocale}`}
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

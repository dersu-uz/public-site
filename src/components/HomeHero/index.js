/* eslint-disable @next/next/no-img-element */
import Fade from 'react-reveal/Fade'

import IndicatorSlide from '@/components/IndicatorSlide'

import DersuLogoSymbol from '../../styles/assets/dersu-logo-symbol.svg'

const HomeHero = () => (
  <div className="HomeHero">
    <div className="min-h-screen bg-dersu-black relative">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-full">
          <picture className="flex w-full h-full">
            <source type="image/webp" srcSet="/images/hero/01.webp" />
            <source type="image/jpeg" srcSet="/images/hero/01.jpg" />
            <img
              className="flex-grow object-cover"
              src="/images/hero/01.jpg"
              alt="Hero 1"
            />
          </picture>
        </div>
        <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-full">
          <picture className="flex w-full h-full">
            <source type="image/webp" srcSet="/images/hero/02.webp" />
            <source type="image/jpeg" srcSet="/images/hero/02.jpg" />
            <img
              className="flex-grow object-cover"
              src="/images/hero/02.jpg"
              alt="Hero 2"
            />
          </picture>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black/50 to-black/0"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-black/0 to-black/50"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Fade bottom distance={`24px`} delay={500}>
          <DersuLogoSymbol className="w-[95px] md:w-[170px] text-dersu-yellow" />
        </Fade>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-between">
          <Fade bottom distance={`24px`} delay={1000}>
            <p className="text-dersu-white text-dersu-sm text-center md:text-dersu-md pt-[60px]">
              Dersu conecta a las personas
              <br /> con las montañas
            </p>
          </Fade>
          <div className="pb-8 md:pb-10">
            <IndicatorSlide />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeHero

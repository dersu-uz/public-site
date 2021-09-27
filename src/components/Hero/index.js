import Fade from 'react-reveal/Fade'

import IndicatorSlide from '@/components/IndicatorSlide'

import DersuLogoSymbol from '../../styles/assets/dersu-logo-symbol.svg'

const Hero = () => (
  <div className="Hero">
    <div className="min-h-screen bg-dersu-black relative">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row">
        <div
          className="w-full md:w-1/2 min-h-[50vh] md:min-h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero/01.jpg')`,
          }}
        ></div>

        <div
          className="w-full md:w-1/2 min-h-[50vh] md:min-h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero/02.jpg')`,
          }}
        ></div>
      </div>

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

export default Hero

import Fade from 'react-reveal/Fade'

import IndicatorSlide from '@/components/IndicatorSlide'

import DersuLogoSymbol from '../../styles/assets/dersu-logo-symbol.svg'

const Hero = () => (
  <div className="Hero">
    <div className="min-h-screen bg-dersu-black">
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

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-dersu-yellow">
        <Fade bottom distance={`24px`} delay={500}>
          <DersuLogoSymbol className="w-[95px] md:w-[170px]" />
        </Fade>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-between">
          <Fade bottom distance={`24px`} delay={1000}>
            <p className="text-dersu-white text-dersu-xs text-center md:text-dersu-md pt-[60px] w-1/2 md:w-auto">
              Dersu conecta a las personas con las montañas
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

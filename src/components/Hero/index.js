import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

import DersuLogoWithText from '../../styles/assets/dersu-logo-with-text.svg'

import IndicatorSlide from '../IndicatorSlide'
import Container from '../Container'

const Hero = ({ imageUrl }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
  }
  return (
    <div className="Hero">
      <div className="min-h-screen bg-cover bg-center" style={style}>
        <Container className="min-h-screen">
          <div className="flex flex-col min-h-screen">
            <div className="text-dersu-yellow pt-10">
              <Fade bottom distance={`24px`}>
                <DersuLogoWithText width="100%" />
              </Fade>
            </div>
            <div className="flex-grow flex flex-col justify-center text-center">
              <Fade bottom distance={`24px`}>
                <p className="text-dersu-white text-dersu-xs leading-dersu-xs md:text-dersu-md md:leading-dersu-md">
                  Disfruta de la montaña,
                  <br /> aprendiendo a tu ritmo
                </p>
              </Fade>
            </div>
            <div className="pb-8 md:pb-10">
              <IndicatorSlide />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

Hero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default Hero

import PropTypes from 'prop-types'

import Container from '../Container'

import DersuLogoWithText from '../../styles/assets/dersu-logo-with-text.svg'

const Hero = ({ imageUrl }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
  }
  return (
    <div className="Hero" style={style}>
      <Container>
        <div className="Hero__logo">
          <DersuLogoWithText width="100%" />
        </div>
        <div className="Hero__caption">
          Disfruta de la montaña,
          <br /> aprendiendo a tu ritmo
        </div>
      </Container>
    </div>
  )
}

Hero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default Hero

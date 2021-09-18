/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import Image from 'next/image'
import Container from '../Container'

import HighlightsSeparator01 from '../../styles/assets/highlights-separator-01.svg'
import HighlightsSeparator02 from '../../styles/assets/highlights-separator-02.svg'
import HighlightsSeparator03 from '../../styles/assets/highlights-separator-03.svg'
import HighlightsSeparator04 from '../../styles/assets/highlights-separator-04.svg'

export const COLOR_SCHEMES = {
  BROWN: 'BROWN',
  YELLOW: 'YELLOW',
  GREEN: 'GREEN',
  PINK: 'PINK',
}

export const ALIGN_MODES = {
  LEFT: 'LEFT',
  CENTER: 'CENTER',
}

const colorSchemeDependantClasses = {
  BROWN: 'bg-dersu-brown text-dersu-blue',
  YELLOW: 'bg-dersu-yellow text-dersu-brown',
  GREEN: 'bg-dersu-dark-green text-dersu-light-green',
  PINK: 'bg-dersu-pink text-dersu-brown',
}

export const Separators = {
  Lines: HighlightsSeparator01,
  ExclamationMark: HighlightsSeparator02,
  Icons: HighlightsSeparator03,
  Waves: HighlightsSeparator04,
}

const ModuleHighlights = ({
  title,
  subtitle,
  text,
  imageUrl,
  alignMode,
  colorScheme,
  separatorName,
}) => {
  const Separator = Separators[separatorName]
  return (
    <div className="ModuleHighlights">
      <div className={`${colorSchemeDependantClasses[colorScheme]}`}>
        <Container>
          <div className="md:flex">
            <div
              className={`flex-grow flex flex-col py-16 md:w-6/12 text-center
                ${alignMode === ALIGN_MODES.LEFT ? 'md:text-left' : ''}
              `}
            >
              <p className="font-sans uppercase pb-5 tracking-widest">
                {subtitle}
              </p>

              <h2
                className={`text-dersu-lg md:text-dersu-xl px-8
                  ${
                    alignMode === ALIGN_MODES.LEFT ? 'md:text-left md:pl-0' : ''
                  }
                `}
              >
                {title}
              </h2>

              <Separator
                width="100%"
                className={`flex-grow ${colorSchemeDependantClasses[colorScheme]}`}
              />

              <p
                className={`text-dersu-md ${
                  alignMode === ALIGN_MODES.LEFT ? 'md:pr-16' : ''
                }`}
              >
                {text}
              </p>
            </div>

            <div className="md:h-[900px]">
              <img src={imageUrl} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

ModuleHighlights.defaultProps = {
  colorScheme: COLOR_SCHEMES.BROWN,
  alignMode: ALIGN_MODES.CENTER,
  separatorName: 'Waves',
}

ModuleHighlights.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  colorScheme: PropTypes.oneOf(Object.values(COLOR_SCHEMES)),
  alignMode: PropTypes.oneOf(Object.values(ALIGN_MODES)),
  separatorName: PropTypes.oneOf(Object.keys(Separators)),
}

export default ModuleHighlights

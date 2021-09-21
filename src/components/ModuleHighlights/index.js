/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

import Container from '@/components/Container'

import {
  ALIGN_MODES,
  COLOR_SCHEMES,
  colorSchemeClasses,
} from '@/constants/theme'

import HighlightsSeparator01 from '../../styles/assets/highlights-separator-01.svg'
import HighlightsSeparator02 from '../../styles/assets/highlights-separator-02.svg'
import HighlightsSeparator03 from '../../styles/assets/highlights-separator-03.svg'
import HighlightsSeparator04 from '../../styles/assets/highlights-separator-04.svg'

export const SEPARATORS = {
  LINES: 'LINES',
  EXCLAMATION_MARK: 'EXCLAMATION_MARK',
  ICONS: 'ICONS',
  WAVES: 'WAVES',
}

const SeparatorComponents = {
  LINES: HighlightsSeparator01,
  EXCLAMATION_MARK: HighlightsSeparator02,
  ICONS: HighlightsSeparator03,
  WAVES: HighlightsSeparator04,
}

const ModuleHighlights = ({
  title,
  subtitle,
  text,
  imageUrl,
  alignMode,
  colorScheme,
  separator,
}) => {
  const SeparatorComponent = SeparatorComponents[separator]
  return (
    <div className="ModuleHighlights">
      <div
        className={`${colorSchemeClasses[colorScheme].background} ${colorSchemeClasses[colorScheme].color}`}
      >
        <Container>
          <Fade right>
            <div className="md:flex">
              <div className=" md:w-6/12 flex">
                <div
                  className={`flex flex-col py-16 text-center
                ${alignMode === ALIGN_MODES.LEFT ? 'md:text-left' : ''}
              `}
                >
                  <p className="font-sans font-bold text-dersu-2xs md:text-dersu-xs uppercase pb-5 px-8 tracking-widest">
                    {subtitle}
                  </p>

                  <h2
                    className={`text-dersu-xl md:text-dersu-2xl px-8
                  ${alignMode === ALIGN_MODES.LEFT ? 'md:text-left' : ''}
                `}
                  >
                    {title}
                  </h2>

                  <div
                    className={`h-32 my-6 md:h-auto flex-grow flex items-center
                    ${colorSchemeClasses[colorScheme].background}
                    ${colorSchemeClasses[colorScheme].color}`}
                  >
                    <SeparatorComponent width="100%" />
                  </div>

                  <p
                    className={`text-dersu-md px-8 ${
                      alignMode === ALIGN_MODES.LEFT ? 'md:pr-16' : ''
                    }`}
                  >
                    {text}
                  </p>
                </div>
              </div>

              <div className="md:h-[900px] md:w-6/12 flex items-center">
                {Array.isArray(imageUrl) ? (
                  <div className="grid grid-cols-2 gap-3 p-4 md:pr-10 md:pt-36 md:pl-0 md:pb-0">
                    {imageUrl.map((image, i) => (
                      <img key={i} className="w-full" src={image} />
                    ))}
                  </div>
                ) : (
                  <img className="w-full h-full object-cover" src={imageUrl} />
                )}
              </div>
            </div>
          </Fade>
        </Container>
      </div>
    </div>
  )
}

ModuleHighlights.defaultProps = {
  colorScheme: COLOR_SCHEMES.BROWN,
  alignMode: ALIGN_MODES.CENTER,
  separator: SEPARATORS.WAVES,
}

ModuleHighlights.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  colorScheme: PropTypes.oneOf(Object.values(COLOR_SCHEMES)),
  alignMode: PropTypes.oneOf(Object.values(ALIGN_MODES)),
  separator: PropTypes.oneOf(Object.values(SEPARATORS)),
}

export default ModuleHighlights

/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

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

const colSpanClass = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  6: 'md:col-span-6',
  7: 'md:col-span-7',
  8: 'md:col-span-8',
  9: 'md:col-span-9',
  10: 'md:col-span-10',
  11: 'md:col-span-11',
  12: 'md:col-span-12',
}

const ModuleHighlights = ({
  title,
  subtitle,
  text,
  imageUrl,
  columnsForImage,
  alignMode,
  colorScheme,
  separator,
}) => {
  const SeparatorComponent = SeparatorComponents[separator]
  const columnsForContent = 12 - columnsForImage

  return (
    <div className="ModuleHighlights">
      <div
        className={`${colorSchemeClasses[colorScheme].background} ${colorSchemeClasses[colorScheme].color}`}
      >
        <Fade right>
          <div className="md:grid grid-cols-12">
            <div className={`${colSpanClass[columnsForContent]} flex`}>
              <div
                className={`flex flex-col pt-16 pb-16 md:pb-32 text-center w-full
                ${
                  alignMode === ALIGN_MODES.LEFT
                    ? 'md:text-left 2xl:text-center'
                    : ''
                }
              `}
              >
                <p
                  className="font-sans font-bold text-dersu-2xs md:text-dersu-2xs lg:text-dersu-xs uppercase pb-5 px-10 tracking-widest
                    md:first-letter:ml-0.5 xl:first-letter:ml-0.5"
                >
                  {subtitle}
                </p>

                <h2
                  className={`text-dersu-xl md:text-dersu-xl lg:text-dersu-2xl xl:text-dersu-3xl xl:max-w-3xl xl:mx-auto px-10
                    md:first-letter:-ml-0.5 xl:first-letter:-ml-1
                  ${
                    alignMode === ALIGN_MODES.LEFT
                      ? 'md:text-left 2xl:text-center'
                      : ''
                  }
                `}
                >
                  {title}
                </h2>

                <div
                  className={`py-16 md:py-0 md:h-auto flex-grow flex items-center
                    ${colorSchemeClasses[colorScheme].background}
                    ${colorSchemeClasses[colorScheme].color}`}
                >
                  <SeparatorComponent width="100%" />
                </div>

                <p
                  className={`text-dersu-sm lg:text-dersu-md px-10 xl:mx-auto xl:max-w-3xl ${
                    alignMode === ALIGN_MODES.LEFT
                      ? 'md:pr-16 2xl:text-center'
                      : ''
                  }`}
                >
                  {text}
                </p>
              </div>
            </div>

            <div
              className={`${colSpanClass[columnsForImage]} flex items-center relative md:h-[600px] lg:h-[700px] xl:h-[800px]`}
            >
              {Array.isArray(imageUrl) ? (
                <div className="grid grid-cols-2 gap-3 p-4 md:pr-10 md:pt-0 lg:py-36 xl:py-24 md:pl-0 md:pb-0">
                  {imageUrl.map((image, i) => (
                    <img key={i} className="w-full" src={image} />
                  ))}
                </div>
              ) : (
                <div
                  className="h-full w-full flex bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
              )}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

ModuleHighlights.defaultProps = {
  columnsForImage: 6,
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
  columnsForImage: PropTypes.number,
  colorScheme: PropTypes.oneOf(Object.values(COLOR_SCHEMES)),
  alignMode: PropTypes.oneOf(Object.values(ALIGN_MODES)),
  separator: PropTypes.oneOf(Object.values(SEPARATORS)),
}

export default ModuleHighlights

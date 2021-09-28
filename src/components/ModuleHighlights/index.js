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

const ModuleHighlights = ({
  title,
  subtitle,
  text,
  imageUrl,
  webpImageUrl,
  framedImage,
  alignMode,
  colorScheme,
  separator,
  overlapsPreviousModule,
}) => {
  const SeparatorComponent = SeparatorComponents[separator]

  const singleImage = Array.isArray(imageUrl) === false

  return (
    <div className="ModuleHighlights">
      <div
        className={`
          ${colorSchemeClasses[colorScheme].background}
          ${colorSchemeClasses[colorScheme].color}
          ${
            overlapsPreviousModule ? 'mt-[-37vw] pt-[37vw] md:mt-0 md:pt-0' : ''
          }
        `}
      >
        <Fade right>
          <div className="md:flex">
            <div
              className={`flex ${singleImage ? 'md:w-[55%]' : 'md:w-[49%]'}`}
            >
              <div
                className={`flex flex-col pt-16 pb-16 md:pb-32 w-full
                ${
                  alignMode === ALIGN_MODES.LEFT
                    ? 'text-left 2xl:text-center'
                    : 'text-center'
                }
                ${framedImage ? 'md:pr-10' : ''}
              `}
              >
                <p
                  className="font-sans font-bold text-dersu-2xs md:text-dersu-2xs lg:text-dersu-xs uppercase pb-5 px-5 md:px-10 tracking-widest
                    md:first-letter:ml-0.5 xl:first-letter:ml-0.5"
                >
                  {subtitle}
                </p>

                <h2
                  className={`text-dersu-xl md:text-dersu-xl lg:text-dersu-2xl xl:text-dersu-3xl xl:max-w-3xl xl:mx-auto px-5 md:px-10
                    md:first-letter:-ml-0.5 xl:first-letter:-ml-1
                  ${
                    alignMode === ALIGN_MODES.LEFT
                      ? 'text-left 2xl:text-center'
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
                  className={`text-dersu-sm lg:text-dersu-md xl:mx-auto xl:max-w-3xl px-5 md:px-10 ${
                    alignMode === ALIGN_MODES.LEFT
                      ? 'text-left md:pr-16 2xl:text-center'
                      : ''
                  }`}
                >
                  {text}
                </p>
              </div>
            </div>

            <div
              className={`${
                singleImage ? 'md:w-[45%]' : 'md:w-[51%]'
              } flex items-center relative md:h-[600px] lg:h-[700px] xl:h-[800px]`}
            >
              {singleImage ? (
                <picture
                  className={`flex w-full h-full ${
                    framedImage
                      ? 'pl-5 pr-5 pb-5 md:pl-0 md:pt-10 md:pr-10 md:pb-10'
                      : ''
                  }`}
                >
                  {webpImageUrl && (
                    <source type="image/webp" srcSet={webpImageUrl} />
                  )}
                  <source type="image/jpeg" srcSet={imageUrl} />
                  <img
                    className="flex-grow object-cover"
                    src={imageUrl}
                    alt={title}
                  />
                </picture>
              ) : (
                <div className="grid grid-cols-2 gap-3 p-4 md:pr-10 md:pt-0 lg:py-36 xl:py-24 md:pl-0 md:pb-0">
                  {imageUrl.map((image, i) => (
                    <picture key={i} className="flex w-full h-full">
                      {webpImageUrl && webpImageUrl[i] && (
                        <source type="image/webp" srcSet={webpImageUrl[i]} />
                      )}
                      <source type="image/jpeg" srcSet={imageUrl} />
                      <img
                        className="flex-grow object-cover"
                        src={imageUrl}
                        alt={title}
                      />
                    </picture>
                  ))}
                </div>
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
  framedImage: false,
  overlapsPreviousModule: false,
}

ModuleHighlights.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  webpImageUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  framedImage: PropTypes.bool,
  colorScheme: PropTypes.oneOf(Object.values(COLOR_SCHEMES)),
  alignMode: PropTypes.oneOf(Object.values(ALIGN_MODES)),
  separator: PropTypes.oneOf(Object.values(SEPARATORS)),
  overlapsPreviousModule: PropTypes.bool,
}

export default ModuleHighlights

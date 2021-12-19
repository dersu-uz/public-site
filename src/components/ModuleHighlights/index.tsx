import { FC } from 'react'
import Fade from 'react-reveal/Fade'

import {
  ALIGN_MODES,
  COLOR_SCHEMES,
  colorSchemeClasses,
} from '@/constants/theme'

type Props = {
  title: string
  subtitle: string
  text: string
  imageUrl: string | string[]
  webpImageUrl: string | string[]
  framedImage?: boolean
  alignMode?: keyof typeof ALIGN_MODES
  colorScheme?: keyof typeof COLOR_SCHEMES
  overlapsPreviousModule?: boolean
}

const ModuleHighlights: FC<Props> = ({
  title,
  subtitle,
  text,
  imageUrl,
  webpImageUrl,
  framedImage,
  alignMode,
  colorScheme,
  overlapsPreviousModule,
}) => {
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
                  className={`text-dersu-xl md:text-dersu-xl lg:text-dersu-3xl xl:text-dersu-4xl xl:max-w-3xl xl:mx-auto px-5 md:px-10
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
                    <source type="image/webp" srcSet={webpImageUrl as string} />
                  )}
                  <source type="image/jpeg" srcSet={imageUrl as string} />
                  <img
                    className="flex-grow object-cover"
                    src={imageUrl as string}
                    alt={title}
                  />
                </picture>
              ) : (
                <div className="grid grid-cols-2 gap-3 p-4 md:pr-10 md:pt-0 lg:py-36 xl:py-24 md:pl-0 md:pb-0">
                  {Array.isArray(imageUrl) &&
                    imageUrl.map((image, i) => (
                      <picture key={i} className="flex w-full h-full">
                        {webpImageUrl && webpImageUrl[i] && (
                          <source type="image/webp" srcSet={webpImageUrl[i]} />
                        )}
                        <source type="image/jpeg" srcSet={imageUrl[i]} />
                        <img
                          className="flex-grow object-cover"
                          src={imageUrl[i]}
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
  colorScheme: COLOR_SCHEMES.BROWN,
  alignMode: ALIGN_MODES.CENTER,
  framedImage: false,
  overlapsPreviousModule: false,
}

export default ModuleHighlights

/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import { colorSchemeClasses, COLOR_SCHEMES } from '@/constants/theme'

const PageHero = ({ title, imageUrl, webpImageUrl, colorScheme }) => {
  return (
    <div className="PageHero">
      <div className={`relative ${colorSchemeClasses[colorScheme].background}`}>
        <div className="absolute top-0 left-0 w-full h-full">
          {imageUrl && (
            <picture className="flex w-full h-full">
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
          )}
        </div>
        <div className="relative px-10 py-[240px] md:py-[278px]">
          <h1
            className={`
              ${
                imageUrl
                  ? colorSchemeClasses[colorScheme].monochromeColor
                  : colorSchemeClasses[colorScheme].color
              }
               text-dersu-lg  md:text-dersu-4xl text-center
               max-w-5xl mx-auto
              `}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}

PageHero.propTypes = {
  imageUrl: PropTypes.string,
  webpImageUrl: PropTypes.string,
  title: PropTypes.string,
  colorScheme: PropTypes.oneOf(Object.keys(COLOR_SCHEMES)),
}

export default PageHero

/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import { colorSchemeClasses, COLOR_SCHEMES } from '@/constants/theme'

const BlogPostHero = ({ title, imageUrl, webpImageUrl, colorScheme }) => {
  return (
    <div className="BlogPostHero">
      <div className="relative">
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
              ${colorSchemeClasses[colorScheme].monochromeColor}
               text-dersu-lg text-dersu-white md:text-dersu-4xl text-center
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

BlogPostHero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  webpImageUrl: PropTypes.string,
  title: PropTypes.string,
  colorScheme: PropTypes.oneOf(Object.keys(COLOR_SCHEMES)),
}

export default BlogPostHero

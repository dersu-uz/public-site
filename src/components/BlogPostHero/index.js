/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'

const BlogPostHero = ({ title, imageUrl, webpImageUrl }) => {
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
        <div className="relative p-10">
          <h2 className="text-dersu-lg text-dersu-white md:text-dersu-4xl text-center">
            {title}
          </h2>
        </div>
      </div>
    </div>
  )
}

BlogPostHero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  webpImageUrl: PropTypes.string,
  title: PropTypes.string,
}

export default BlogPostHero

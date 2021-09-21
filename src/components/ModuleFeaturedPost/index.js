import PropTypes from 'prop-types'
import Link from 'next/link'

import { COLOR_SCHEMES, colorSchemeClasses } from '@/constants/theme'

const ModuleFeaturedPost = ({
  title,
  tag,
  postDate,
  imageUrl,
  href,
  colorScheme,
}) => {
  return (
    <div className="ModuleFeaturedPost">
      <div className="relative h-[100vw] md:h-auto md:pt-[100%] overflow-hidden">
        <Link href={href} passHref>
          <a>
            <div
              className={`
                absolute top-0 left-0 w-full h-full transition-transform duration-500 transform hover:scale-125
                ${colorSchemeClasses[colorScheme].background}
            `}
              style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : null}
            ></div>

            <div
              className={`
                absolute top-0 left-0 w-full h-full p-10 flex flex-col justify-between
                md:absolute md:top-0 md:left-0 pointer-events-none
            `}
            >
              <h3 className="text-dersu-md md:text-dersu-lg text-dersu-white">
                {title}
              </h3>
              <div className="flex justify-between">
                <p
                  className={`font-sans font-bold text-dersu-xs uppercase ${colorSchemeClasses[colorScheme].color}`}
                >
                  {tag}
                </p>
                <p className="font-sans text-dersu-white text-dersu-xs">
                  {postDate}
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

ModuleFeaturedPost.defaultProps = {
  colorScheme: COLOR_SCHEMES.BROWN,
}

ModuleFeaturedPost.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string,
  postDate: PropTypes.string,
  imageUrl: PropTypes.string,
  href: PropTypes.string.isRequired,
  colorScheme: PropTypes.oneOf(Object.values(COLOR_SCHEMES)),
}

export default ModuleFeaturedPost

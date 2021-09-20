import PropTypes from 'prop-types'
import Link from 'next/link'

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
      <Link href={href} passHref>
        <a
          className="bg-dersu-brown text-dersu-white p-10 flex flex-col justify-between h-[600px] cursor-pointer"
          style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : null}
        >
          <h3 className="text-dersu-lg">{title}</h3>
          <div className="flex justify-between">
            <p className="font-sans font-bold text-dersu-xs uppercase">{tag}</p>
            <p className="font-sans text-dersu-xs">{postDate}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

ModuleFeaturedPost.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string,
  postDate: PropTypes.string,
  imageUrl: PropTypes.string,
  href: PropTypes.string.isRequired,
  // colorScheme: PropTypes.string,
}

export default ModuleFeaturedPost

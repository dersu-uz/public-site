import PropTypes from 'prop-types'

const BlogPostHero = ({ title, imageUrl }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
  }
  return (
    <div className="BlogPostHero">
      <div
        className="h-36 bg-cover bg-center flex flex-col content-center justify-center"
        style={style}
      >
        <h2 className="text-dersu-lg text-dersu-white md:text-dersu-3xl text-center">
          {title}
        </h2>
      </div>
    </div>
  )
}

BlogPostHero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default BlogPostHero

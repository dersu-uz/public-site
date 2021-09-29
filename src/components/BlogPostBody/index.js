import PropTypes from 'prop-types'
import Wrapper from '../Wrapper'
import MarkdownContent from '../MarkdownContent'
import VerticalDivision from '../VerticalDivision'

const BlogPostBody = ({ subtitle, htmlContent }) => {
  return (
    <div className="BlogPostBody">
      <div className="bg-dersu-cream">
        <Wrapper>
          <div className="max-w-4xl mx-auto pb-10 md:pb-24">
            <h2 className="text-dersu-lg md:text-dersu-3xl text-center pt-10 md:pt-24">
              {subtitle}
            </h2>
            <VerticalDivision />
            <MarkdownContent
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </Wrapper>
      </div>
    </div>
  )
}

BlogPostBody.propTypes = {
  subtitle: PropTypes.string.isRequired,
  htmlContent: PropTypes.string.isRequired,
}

export default BlogPostBody

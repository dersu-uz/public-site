import PropTypes from 'prop-types'
import MarkdownContent from '../MarkdownContent'

const IubendaContent = ({ content }) => {
  return <MarkdownContent dangerouslySetInnerHTML={{ __html: content }} />
}

IubendaContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default IubendaContent

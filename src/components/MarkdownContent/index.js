import PropTypes from 'prop-types'

const MarkdownContent = ({ children }) => {
  return <article className="MarkdownContent">{children}</article>
}

MarkdownContent.propTypes = {
  children: PropTypes.node,
}

export default MarkdownContent

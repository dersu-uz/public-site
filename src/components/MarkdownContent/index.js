import PropTypes from 'prop-types'

const MarkdownContent = props => {
  return (
    <article className="MarkdownContent" {...props}>
      {props.children}
    </article>
  )
}

MarkdownContent.propTypes = {
  children: PropTypes.node,
}

export default MarkdownContent

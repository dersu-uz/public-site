import React from 'react'
import PropTypes from 'prop-types'

const IubendaContent = ({ content }) => {
  return (
    <div
      className="IubendaContent"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

IubendaContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default IubendaContent

import PropTypes from 'prop-types'

const Wrapper = ({ children }) => {
  return <div className="Wrapper px-4 md:px-10">{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper

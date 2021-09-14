import PropTypes from 'prop-types'

const Wrapper = ({ children }) => {
  return <div className="Wrapper">{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.node,
}

export default Wrapper

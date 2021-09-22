import PropTypes from 'prop-types'

const Container = ({ className, children }) => (
  <div className={`Container 2xl:container ${className || ''}`}>{children}</div>
)

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Container.defaultProps = {}

export default Container

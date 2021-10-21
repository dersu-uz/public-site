import PropTypes from 'prop-types'

const Button = ({ type, disabled, onClick, children }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className="bg-dersu-black text-dersu-white text-dersu-sm hover:bg-dersu-blue hover:text-dersu-black px-6 py-2 rounded-md whitespace-nowrap"
  >
    {children}
  </button>
)

Button.defaultProps = {
  type: 'button',
  disabled: false,
  onClick: null,
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default Button

import { FC } from 'react'

type Props = {
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const Button: FC<Props> = ({ type, disabled, onClick, children }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className="hover:bg-dersu-black hover:text-dersu-white text-dersu-sm bg-dersu-blue text-dersu-black px-6 py-2 rounded-md whitespace-nowrap"
  >
    {children}
  </button>
)

export default Button

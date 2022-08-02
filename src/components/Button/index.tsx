import { FC, ReactNode } from 'react';

type Props = {
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  children: ReactNode
}

const Button: FC<Props> = ({ type, disabled, onClick, children }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className="font-sans text-dersu-xs bg-dersu-blue text-dersu-brown font-semibold py-4 px-16 rounded-md whitespace-nowrap hover:bg-dersu-cream"
  >
    {children}
  </button>
)

export default Button

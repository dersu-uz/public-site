import { FC } from 'react'

import styles from './styles.module.css'

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
    className={styles.component}
  >
    {children}
  </button>
)

export default Button

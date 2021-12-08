import { FC } from 'react'
import styles from './styles.module.css'

type Props = {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel'
  placeholder?: string
  name?: string
  required?: boolean
  defaultValue?: string
  disabled?: boolean
}

const InputText: FC<Props> = ({
  type,
  name,
  placeholder,
  required,
  defaultValue,
  disabled,
}) => {
  return (
    <div className={styles.component}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </div>
  )
}

export default InputText

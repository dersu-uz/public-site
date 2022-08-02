import { FC } from 'react';

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
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      defaultValue={defaultValue}
      disabled={disabled}
      className="font-sans text-lg px-4 py-3.5 rounded-md w-full"
    />
  )
}

export default InputText

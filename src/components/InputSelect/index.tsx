import { FC } from 'react'

import InputSelectDownArrow from '@/styles/assets/InputSelect-down-arrow.svg'

import styles from './styles.module.css'

type SelectOption = {
  label: string
  value: string
}

type Props = {
  id: string
  name: string
  labelText: string
  options: Array<SelectOption>
}

const InputSelect: FC<Props> = ({ id, name, labelText, options }) => {
  return (
    <div className={styles.component}>
      <label htmlFor={id} className="sr-only">
        {labelText}
      </label>
      <select id={id} name={name}>
        <option value="">{labelText}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <InputSelectDownArrow className={styles.component_downArrow} />
    </div>
  )
}

export default InputSelect

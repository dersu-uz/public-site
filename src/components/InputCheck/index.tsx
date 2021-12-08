import React, { FC, useState } from 'react'
import classNames from 'classnames'

import InputCheckCheckmark from '@/styles/assets/InputCheck-checkmark.svg'

import styles from './styles.module.css'

type Props = {
  id: string
  name: string
  value: string
  required?: boolean
  labelText: string | JSX.Element
}

const InputCheck: FC<Props> = ({ id, name, value, required, labelText }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className={styles.component}>
      <label htmlFor={id} className={styles.component_label}>
        <input
          id={id}
          name={name}
          type="checkbox"
          onChange={e => setIsChecked(e.target.checked)}
          value={value}
          required={required}
          checked={isChecked}
          className="sr-only"
        />
        <span className={styles.component_inputCheck}>
          <InputCheckCheckmark
            width="20"
            height="20"
            className={classNames(
              'text-dersu-blue absolute top-0 left-0',
              isChecked ? 'opacity-100' : 'opacity-0'
            )}
          />
        </span>
        <span className={styles.component_labelText}>{labelText}</span>
      </label>
    </div>
  )
}

export default InputCheck

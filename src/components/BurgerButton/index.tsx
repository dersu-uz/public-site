import { FC } from 'react'

import styles from './styles.module.css'

interface Props {
  isOpen: boolean
  onToggle: () => void
}

const BurgerButton: FC<Props> = ({ isOpen, onToggle }) => {
  return (
    <button
      type="button"
      aria-label="Open the main menu"
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-controls="main-menu"
      className={styles.BurgerButton}
      data-is-open={isOpen}
      onClick={() => onToggle()}
    >
      <div aria-hidden="true">
        <span className={styles.BurgerButton_line} data-line-id={1} />
        <span className={styles.BurgerButton_line} data-line-id={2} />
        <span className={styles.BurgerButton_line} data-line-id={3} />
      </div>
    </button>
  )
}

export default BurgerButton

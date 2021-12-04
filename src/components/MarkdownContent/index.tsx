import { FC } from 'react'

import styles from './styles.module.css'

type Props = {
  dangerouslySetInnerHTML?: { __html: string }
}

const MarkdownContent: FC<Props> = ({ dangerouslySetInnerHTML, children }) => {
  return (
    <article
      className={styles.component}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </article>
  )
}

export default MarkdownContent

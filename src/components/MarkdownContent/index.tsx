import { FC } from 'react'

import Wrapper from '@/components/Wrapper'

import styles from './styles.module.css'

type Props = {
  dangerouslySetInnerHTML?: { __html: string }
}

const MarkdownContent: FC<Props> = ({ dangerouslySetInnerHTML, children }) => {
  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto py-10 md:py-24">
        <article
          className={styles.component}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </article>
      </div>
    </Wrapper>
  )
}

export default MarkdownContent

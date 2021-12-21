import { FC } from 'react'

type Props = {
  dangerouslySetInnerHTML?: { __html: string }
}

const MarkdownContent: FC<Props> = ({ dangerouslySetInnerHTML, children }) => {
  return (
    <div
      className="prose prose-blockquote:border-dersu-pink sm:prose-xl"
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </div>
  )
}

export default MarkdownContent

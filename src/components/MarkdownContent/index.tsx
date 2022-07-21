import { FC, ReactNode } from 'react'

type Props = {
  dangerouslySetInnerHTML?: { __html: string }
  children?: ReactNode
}

const MarkdownContent: FC<Props> = ({ dangerouslySetInnerHTML, children }) => {
  return (
    <div
      className="prose prose-blockquote:border-dersu-pink sm:prose-xl prose-img:w-full"
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </div>
  )
}

export default MarkdownContent

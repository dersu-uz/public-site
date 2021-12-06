import { FC } from 'react'

import MarkdownContent from '@/components/MarkdownContent'

type Props = {
  content: string
}

const IubendaContent: FC<Props> = ({ content }) => {
  return <MarkdownContent dangerouslySetInnerHTML={{ __html: content }} />
}

export default IubendaContent

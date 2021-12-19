import { FC } from 'react'

import Wrapper from '@/components/Wrapper'
import MarkdownContent from '@/components/MarkdownContent'
import VerticalDivision from '@/components/VerticalDivision'

type Props = {
  subtitle: string
  author: string
  dateFormatted: string
  htmlContent: string
}

const Post: FC<Props> = ({ subtitle, author, dateFormatted, htmlContent }) => {
  return (
    <article className="bg-dersu-cream">
      <Wrapper>
        <div className="max-w-4xl mx-auto pb-10 md:pb-24">
          <h2 className="text-dersu-lg md:text-dersu-3xl text-center pt-10 md:pt-24">
            {subtitle}
          </h2>
          <VerticalDivision />
          <div className="pb-6">
            <p>
              <span className="text-dersu-xs font-bold pb-1">{author}</span> |{' '}
              <span className="text-dersu-2xs uppercase">{dateFormatted}</span>
            </p>
          </div>
          <MarkdownContent dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </Wrapper>
    </article>
  )
}

export default Post

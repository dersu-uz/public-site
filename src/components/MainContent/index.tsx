import { FC } from 'react'

import Wrapper from '@/components/Wrapper'

const MainContent: FC = ({ children }) => {
  return <Wrapper className="py-10 md:py-24">{children}</Wrapper>
}

export default MainContent

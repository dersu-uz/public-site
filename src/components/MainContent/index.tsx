import { FC, ReactNode } from 'react'

import Wrapper from '@/components/Wrapper'

interface IProps {
  children: ReactNode
}

const MainContent = (props: IProps) => {
  return <Wrapper className="py-10 md:py-24">{props.children}</Wrapper>
}

export default MainContent

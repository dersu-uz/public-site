import Wrapper from '@/components/Wrapper';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode
}

const MainContent = (props: IProps) => {
  return <Wrapper className="py-10 md:py-24">{props.children}</Wrapper>
}

export default MainContent

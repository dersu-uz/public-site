import { FC } from 'react'

import classNames from 'classnames'

type Props = {
  className?: string
}

const Wrapper: FC<Props> = ({ className, children }) => (
  <div className={classNames('px-4 md:px-10', className)}>{children}</div>
)

export default Wrapper

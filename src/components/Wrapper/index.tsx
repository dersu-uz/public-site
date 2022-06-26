import { FC } from 'react'

import classNames from 'classnames'

type Props = {
  className?: string
  limitedWidth?: boolean
}

const Wrapper: FC<Props> = ({ className, limitedWidth = false, children }) => {
  return (
    <div
      className={classNames(
        'px-4 md:px-10',
        limitedWidth ? 'max-w-7xl mx-auto' : null,
        className
      )}
    >
      {children}
    </div>
  )
}

export default Wrapper

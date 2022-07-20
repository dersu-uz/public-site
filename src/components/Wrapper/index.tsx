import { ReactNode } from 'react'

import classNames from 'classnames'

type Props = {
  className?: string
  limitedWidth?: boolean
  children: ReactNode
}

const Wrapper = (props: Props) => {
  return (
    <div
      className={classNames(
        'px-4 md:px-10',
        props.limitedWidth ? 'max-w-[1440px] mx-auto' : null,
        props.className
      )}
    >
      {props.children}
    </div>
  )
}

export default Wrapper

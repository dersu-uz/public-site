import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  selector: string
  children: ReactNode
}

const ClientOnlyPortal: FC<Props> = ({ selector, children }) => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted ? createPortal(children, ref.current) : null
}

export default ClientOnlyPortal

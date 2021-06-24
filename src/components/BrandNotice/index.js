import React, { useEffect, useState } from 'react'

const BrandNotice = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [text, setText] = useState('')

  // Show only on mount to avoid indexing
  useEffect(() => {
    let contentArray = []
    for (let index = 0; index < 40; index++) {
      contentArray.push('❊ temporary branding')
    }
    setText(contentArray.join(' '))
    setIsVisible(true)
  }, [])

  return isVisible ? (
    <div className="BrandNotice">
      <span>{text}</span>
    </div>
  ) : (
    <></>
  )
}

export default BrandNotice

import React, { useContext, useState } from 'react'
import TranslationsContext from '@/contexts/TranslationsContext'
import { useMount } from 'react-use'

const BrandNotice = () => {
  const { t } = useContext(TranslationsContext)
  const [isVisible, setIsVisible] = useState(true)
  const [text, setText] = useState('')

  // Show only on mount to avoid indexing
  useMount(() => {
    let contentArray = []
    for (let index = 0; index < 40; index++) {
      contentArray.push(`❊ ${t.common.temporaryBranding}`)
    }
    setText(contentArray.join(' '))
    setIsVisible(true)
  })

  return isVisible ? (
    <div className="BrandNotice">
      <span>{text}</span>
    </div>
  ) : (
    <></>
  )
}

export default BrandNotice

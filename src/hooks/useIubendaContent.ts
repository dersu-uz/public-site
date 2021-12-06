import { useEffect, useState } from 'react'
import axios from 'axios'

type UseIubendaContentType = {
  content: string
}

const useIubendaContent = (
  title: string,
  iubendaPageUrl: string,
  iubendaApiUrl: string
): UseIubendaContentType => {
  const initialContent = `<a href="${iubendaPageUrl}" title="${title}">${title}</a>`
  const [content, setContent] = useState(initialContent)

  useEffect(() => {
    async function fetchContent() {
      const newContent = (await axios.get(iubendaApiUrl)).data.content
      setContent(newContent)
    }
    fetchContent()
  }, [iubendaApiUrl])

  return { content }
}

export default useIubendaContent

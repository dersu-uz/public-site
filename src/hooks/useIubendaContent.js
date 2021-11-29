import { useEffect, useState } from 'react'
import axios from 'axios'

const useIubendaContent = (title, iubendaPageUrl, iubendaApiUrl) => {
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

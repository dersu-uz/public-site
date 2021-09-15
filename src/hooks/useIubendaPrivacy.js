import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  IUBENDA_PRIVACY_API_URL,
  IUBENDA_PRIVACY_LINK,
} from '@/constants/settings'

const useIubendaPrivacy = () => {
  const [content, setContent] = useState(IUBENDA_PRIVACY_LINK)

  useEffect(() => {
    async function fetchPrivacy() {
      const privacyPolicy = (await axios.get(IUBENDA_PRIVACY_API_URL)).data
        .content
      setContent(privacyPolicy)
    }
    fetchPrivacy()
  }, [])

  return { content }
}

export default useIubendaPrivacy

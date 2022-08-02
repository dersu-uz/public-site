import { COOKIES_ACCEPT_EXPIRE_DAYS, COOKIES_ACCEPT_NAME } from '@/constants/settings';
import { createContext, ReactNode } from 'react';
import { useCookie } from 'react-use';

type PrivacyContextType = {
  acceptCookies: boolean
  useHonestCookie: typeof useCookie
  handleUserAcceptCookies: () => void
}

const PrivacyContext = createContext<PrivacyContextType>(null)

interface IProps {
  children: ReactNode
}

const PrivacyContextProvider = (props: IProps) => {
  const [acceptCookies, updateAcceptCookies] = useCookie(COOKIES_ACCEPT_NAME)

  const handleUserAcceptCookies = () => {
    updateAcceptCookies('true', {
      expires: COOKIES_ACCEPT_EXPIRE_DAYS,
    })
  }

  // Wrapper for useCookies which only persist new cookie values
  // if the user has accepted privacy policy
  const useHonestCookie: typeof useCookie = cookieName => {
    const [cookieValue, setCookieValue, deleteCookieValue] =
      useCookie(cookieName)
    return [
      cookieValue,
      (value, options?) => {
        if (acceptCookies) {
          setCookieValue(value, options)
        }
      },
      deleteCookieValue,
    ]
  }

  const value: PrivacyContextType = {
    acceptCookies: acceptCookies === 'true' ? true : false,
    useHonestCookie,
    handleUserAcceptCookies,
  }

  return (
    <PrivacyContext.Provider value={value}>
      {props.children}
    </PrivacyContext.Provider>
  )
}

export { PrivacyContextProvider }
export default PrivacyContext

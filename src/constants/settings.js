/* global process*/

export const BASE_DOMAIN_URL = process.env.NEXT_PUBLIC_BASE_DOMAIN_URL
export const IUBENDA_ID = `82963742`
export const IUBENDA_PRIVACY_API_URL = `https://www.iubenda.com/api/privacy-policy/${IUBENDA_ID}/no-markup`
export const IUBENDA_PRIVACY_LINK = `<a href="https://www.iubenda.com/privacy-policy/${IUBENDA_ID}" class="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" title="Privacy Policy">Privacy Policy</a>`

export const COOKIES_ACCEPT_NAME = 'dersuAcceptCookies'
export const COOKIES_ACCEPT_EXPIRE_DAYS = 365
export const COOKIES_PREFERRED_LOCALE_NAME = 'dersuPreferredLocale'
export const COOKIES_PREFERRED_LOCALE_DAYS = 365

export const DEVELOPMENT_HELPERS =
  process.env.NEXT_PUBLIC_DEVELOPMENT_HELPERS === 'true'

export const ENABLE_PLAUSIBLE =
  process.env.NEXT_PUBLIC_ENABLE_PLAUSIBLE === 'true'

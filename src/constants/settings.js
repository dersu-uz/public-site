/* global process*/

export const BASE_DOMAIN_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_BASE_DOMAIN_URL

export const COOKIES_ACCEPT_NAME = 'dersuAcceptCookies'
export const COOKIES_ACCEPT_EXPIRE_DAYS = 365
export const COOKIES_PREFERRED_LOCALE_NAME = 'dersuPreferredLocale'
export const COOKIES_PREFERRED_LOCALE_DAYS = 365

export const DEVELOPMENT_HELPERS =
  process.env.NEXT_PUBLIC_DEVELOPMENT_HELPERS === 'true'

export const ENABLE_PLAUSIBLE =
  process.env.NEXT_PUBLIC_ENABLE_PLAUSIBLE === 'true'

export const PLAUSIBLE_DOMAIN = 'dersu.uz'

export const MAILCHIMP_SUBSCRIBE_URL =
  'https://Dersu.us5.list-manage.com/subscribe/post?u=09aa1f83820733bb99bd70605&id=85e6d8b7c4'

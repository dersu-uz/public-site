import paths from '@/constants/paths'
import { DEFAULT_LOCALE } from '@/constants/settings'
import { NextRequest, NextResponse } from 'next/server'

const pathMap = new Map<string, Record<string, string>>()

Object.values(paths).forEach(pathObj => {
  Object.keys(pathObj).forEach(key => {
    pathMap.set(pathObj[key], pathObj)
  })
})

const PUBLIC_FILE = /\.(.*)$/

export const middleware = (req: NextRequest) => {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(req.nextUrl.pathname) &&
    !req.nextUrl.pathname.includes('/api/') &&
    req.nextUrl.locale === 'default'

  const locale = req.nextUrl.locale

  if (shouldHandleLocale) {
    const url = req.nextUrl.clone()
    url.pathname = `/${DEFAULT_LOCALE}${req.nextUrl.pathname}`

    return NextResponse.redirect(url)
  }

  if (req.page.name) {
    const redirects = pathMap.get(req.page.name)

    const redirectPath = redirects?.[locale]

    if (!redirectPath || redirectPath === req.page.name) {
      return NextResponse.next()
    }

    let url = redirectPath

    if (req.page.params) {
      Object.keys(req.page.params).forEach(key => {
        url = url.replace(`[${key}]`, req.page.params[key] as string)
      })
    }

    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

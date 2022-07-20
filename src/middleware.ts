import paths from '@/constants/paths'
import { DEFAULT_LOCALE } from '@/constants/settings'
import { NextRequest, NextResponse } from 'next/server'
import 'urlpattern-polyfill'

const patternRecord = new Map<URLPattern, Record<string, string>>()
Object.values(paths).forEach(pathObj => {
  Object.keys(pathObj).forEach(key => {
    patternRecord.set(new URLPattern({ pathname: `/:locale${pathObj[key]}` }), {
      ...pathObj,
      match: pathObj[key],
    })
  })
})

const PUBLIC_FILE = /\.(.*)$/

const getPattern = (
  url: string
): { result: URLPatternResult; localePaths: Record<string, string> } | null => {
  const input = url.split('?')[0]

  for (const pattern of Array.from(patternRecord.keys())) {
    const result = pattern.exec(input)

    if (result !== null && result.pathname) {
      return { result, localePaths: patternRecord.get(pattern) }
    }
  }

  return null
}

export const middleware = (req: NextRequest) => {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(req.nextUrl.pathname) &&
    !req.nextUrl.pathname.includes('/api/') &&
    req.nextUrl.locale === 'default'

  if (shouldHandleLocale) {
    const url = req.nextUrl.clone()
    url.pathname = `/${DEFAULT_LOCALE}${req.nextUrl.pathname}`

    return NextResponse.redirect(url)
  }

  const locale = req.nextUrl.locale
  const pattern = getPattern(req.url)

  if (pattern) {
    const { result, localePaths } = pattern
    const redirectPath = localePaths?.[locale]

    if (!redirectPath || localePaths.match === redirectPath) {
      return NextResponse.next()
    }

    const url = req.nextUrl.clone()

    if (result.pathname.groups) {
      url.pathname = redirectPath

      Object.keys(result.pathname.groups).forEach(key => {
        url.pathname = url.pathname.replace(
          `:${key}`,
          result.pathname.groups[key] as string
        )
      })
    }

    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  runtime: 'experimental-edge',
}

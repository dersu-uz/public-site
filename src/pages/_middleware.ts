import paths from '@/constants/paths'
import { NextRequest, NextResponse } from 'next/server'

const pathMap = new Map<string, Record<string, string>>()

Object.values(paths).forEach(pathObj => {
  Object.keys(pathObj).forEach(key => {
    pathMap.set(pathObj[key], pathObj)
  })
})

export const middleware = (req: NextRequest) => {
  const locale = req.nextUrl.locale

  if (req.page.name) {
    const redirects = pathMap.get(req.page.name)

    const redirectPath = redirects?.[locale]

    if (!redirectPath || redirectPath === req.page.name) {
      return NextResponse.next()
    }

    let url = redirectPath

    if (req.page.params) {
      Object.keys(req.page.params).forEach(key => {
        url = url.replace(`[${key}]`, req.page.params[key])
      })
    }

    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

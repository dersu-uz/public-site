import { ITheme } from '@/types/theme'
import { Interpolation } from '@emotion/react'
import { CSSInterpolation } from '@emotion/serialize'

export const toEm = (...pxs: (number | string)[]) => {
  return pxs
    .map(px => (typeof px === 'number' ? `${(px / 16).toFixed(2)}em` : px))
    .join(' ')
}

export const toRem = (...pxs: (number | string)[]) => {
  return pxs
    .map(px => (typeof px === 'number' ? `${(px / 16).toFixed(2)}rem` : px))
    .join(' ')
}

export const expandInterpolation = (
  interpolation: Interpolation<ITheme>,
  theme: ITheme
): CSSInterpolation => {
  if (Array.isArray(interpolation)) {
    return interpolation.map(int => expandInterpolation(int, theme))
  }
  if (typeof interpolation === 'function')
    return expandInterpolation(interpolation(theme), theme)

  return interpolation
}

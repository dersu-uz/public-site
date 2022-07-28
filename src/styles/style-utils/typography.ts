import { css } from '@emotion/react'
import { CSSProperties } from 'react'
import { ITextStyle, ITheme } from '../../types/theme'
import { toRem } from '../utils'

export const textAlign = (align: CSSProperties['textAlign']) => css`
  text-align: ${align};
`

export interface ITypographyProps {
  style: keyof ITextStyle
  color?: keyof ITheme['palette']['text']
  weight?: number
  align?: CSSProperties['textAlign']
  display?: CSSProperties['display']
  textTransform?: CSSProperties['textTransform']
  decoration?: CSSProperties['textDecoration']
}

export const typography = (props: ITypographyProps) => (theme: ITheme) => {
  const t = theme.typography[props.style]

  return css({
    textAlign: props.align,
    fontSize: toRem(t.fontSize),
    fontFamily: t.fontFamily,
    lineHeight: t.lineHeight,
    color: theme.palette.text[props.color],
    weight: props.weight,
    textDecoration: props.decoration,
    textTransform: props.textTransform,
  })
}

export const textStyle =
  (style: ITypographyProps['style']) => (theme: ITheme) => {
    const t = theme.typography[style]

    return css({
      fontSize: toRem(t.fontSize),
      fontFamily: t.fontFamily,
      lineHeight: t.lineHeight,
    })
  }

export const textColor =
  (color: ITypographyProps['color']) => (theme: ITheme) => {
    return css({
      color: theme.palette.text[color],
    })
  }

import { Palette, Theme } from '@mui/material'
import { CSSProperties } from 'react'

interface IPalette {
  main: string
}

interface ITypographyTheme {
  fontSize: CSSProperties['fontSize']
  lineHeight: CSSProperties['lineHeight']
  fontFamily?: CSSProperties['fontFamily']
}

export interface IShadesPalette {
  lightGrey: string
  black: string
  white: string
  offWhite: string
  darkGreen: string
  lightGreen: string
  yellow: string
  blue: string
  brown: string
  cream: string
  purple: string
  pink: string
}

export interface IBackgroundPalette extends IShadesPalette {
  primary: string
}

export interface ITextPalette extends IShadesPalette {
  primary: string
}

export interface ITextStyle {
  '3xs': ITypographyTheme
  '2xs': ITypographyTheme
  'xs': ITypographyTheme
  'sm': ITypographyTheme
  'md': ITypographyTheme
  'lg': ITypographyTheme
  'xl': ITypographyTheme
  '2xl': ITypographyTheme
  '3xl': ITypographyTheme
  '4xl': ITypographyTheme
}

export interface IFontFamily {
  sans: string
  serif: string
}

export interface ISizes {
  screen2xl: number | string
  xl: string
}

export interface ITheme extends Theme {
  palette: Palette
}

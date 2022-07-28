import { createTheme, ThemeOptions } from '@mui/material'
import { toRem } from './utils'

export let defaultTheme = createTheme({
  spacing: (factor: number | string) =>
    typeof factor === 'string' ? factor : `${0.25 * factor}rem`,
  sizes: {
    screen2xl: 1536,
    xl: '36rem',
  },
  breakpoints: {
    values: {
      'xs': 0,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
      'mbs': 320,
      'mbm': 375,
      'mbl': 425,
      'tb': 768,
      'lp': 1024,
      'lpl': 1440,
    },
  },
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#fff',
    },
    shades: {
      lightGrey: '#818181',
      black: '#313131',
      white: '#f7f2f0',
      offWhite: '#F6F2F0',
      darkGreen: '#193830',
      lightGreen: '#89D181',
      yellow: '#fdda79',
      blue: '#44DCFF',
      brown: '#2f212a',
      cream: '#f4e9e6',
      purple: '#7d88be',
      pink: '#e3b0c2',
    },
  },
  fontFamily: {
    sans: [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ].join(','),
    serif: [
      'Recoleta',
      'ui-serif',
      'Georgia',
      'Cambria',
      '"Times New Roman"',
      'Times',
      'serif',
    ].join(','),
  },
  typography: {
    'htmlFontSize': 16,
    '3xs': {
      fontSize: toRem(12),
      lineHeight: toRem(18),
    },
    '2xs': {
      fontSize: toRem(14),
      lineHeight: toRem(20),
    },
    'xs': {
      fontSize: toRem(16),
      lineHeight: toRem(16),
    },
    'sm': {
      fontSize: toRem(18),
      lineHeight: toRem(24),
    },
    'md': {
      fontSize: toRem(22),
      lineHeight: toRem(28),
    },
    'lg': {
      fontSize: toRem(32),
      lineHeight: toRem(38),
    },
    'xl': {
      fontSize: toRem(36),
      lineHeight: toRem(44),
    },
    '2xl': {
      fontSize: toRem(42),
      lineHeight: toRem(38),
    },
    '3xl': {
      fontSize: toRem(56),
      lineHeight: toRem(62),
    },
    '4xl': {
      fontSize: toRem(65),
      lineHeight: toRem(60),
    },
  },
})

defaultTheme = createTheme(defaultTheme, {
  size: value =>
    typeof value === 'string'
      ? defaultTheme.sizes[value] ?? value
      : toRem(value),
  palette: {
    background: {
      primary: '#fff',
      ...defaultTheme.palette.shades,
    },
    text: {
      primary: 'black',
      ...defaultTheme.palette.shades,
    },
  },
} as ThemeOptions)

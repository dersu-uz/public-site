import '@mui/material/styles'
import {
  IBackgroundPalette,
  IFontFamily,
  IShadesPalette,
  ISizes,
  ITextPalette,
  ITextStyle,
} from './theme'

declare module '@mui/material/styles' {
  interface Palette {
    shades: IShadesPalette
  }

  interface PaletteOptions {
    shades?: IShadesPalette
  }

  interface TypeText extends ITextPalette {}

  interface TypeBackground extends IBackgroundPalette {}

  interface TypographyVariants extends ITextStyle {}

  interface TypographyVariantsOptions extends Partial<ITextStyle> {}

  interface ThemeOptions {
    fontFamily?: IFontFamily
    size?: (value: string | number) => string
    sizes?: ISizes
  }

  interface BreakpointOverrides {
    'mbs': true
    'mbm': true
    'mbl': true
    'tb': true
    'lp': true
    'lpl': true
    '2xl': true
  }

  interface Theme {
    fontFamily: IFontFamily
    spacing: Spacing | ((arg: string) => string)
    size: (value: string | number) => string
    sizes: ISizes
  }
}

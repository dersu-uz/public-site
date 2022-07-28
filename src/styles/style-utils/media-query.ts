import { css, Interpolation } from '@emotion/react'
import { Breakpoint } from '@mui/material'
import { ITheme } from '../../types/theme'
import { expandInterpolation } from '../utils'

export const mq = {
  up:
    (bp: Breakpoint, interpolation: Interpolation<ITheme>) =>
    (theme: ITheme) => {
      return css`
        ${theme.breakpoints.up(bp)} {
          ${expandInterpolation(interpolation, theme)}
        }
      `
    },
  down:
    (bp: Breakpoint, interpolation: Interpolation<ITheme>) =>
    (theme: ITheme) => {
      return css`
        ${theme.breakpoints.down(bp)} {
          ${expandInterpolation(interpolation, theme)}
        }
      `
    },
}

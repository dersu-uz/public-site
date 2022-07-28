import { ISizes, ITheme } from '@/types/theme'
import { css } from '@emotion/react'
import { CSSProperties } from 'react'
import { toRem } from '../utils'

export const size =
  (props: {
    h?: CSSProperties['height'] | keyof ISizes
    w?: CSSProperties['width'] | keyof ISizes
    maxH?: CSSProperties['maxHeight'] | keyof ISizes
    maxW?: keyof ISizes | CSSProperties['maxWidth']
  }) =>
  (theme: ITheme) => {
    return css({
      width: theme.size(props.w),
      height: theme.size(props.h),
      maxWidth: theme.size(props.maxW),
      maxHeight: theme.size(props.maxH),
    })
  }

interface IFlexProps {
  direction?: 'row' | 'column'
  inline?: boolean
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
}

export const flex = (p?: IFlexProps) => {
  return css({
    display: p?.inline ? 'inline-flex' : 'flex',
    flexDirection: p.direction,
    alignItems: p.align,
    justifyContent: p.justify,
  })
}

interface IGridBoxProps {
  direction?: 'row' | 'column'
  gap?: number
  inline?: boolean
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  columns?: string
  rows?: string
  rGap?: number
  cGap?: number
}

export const grid = (p?: IGridBoxProps) => {
  return css({
    display: p?.inline ? 'inline-grid' : 'grid',
    gridAutoFlow: p?.direction,
    columnGap: p.cGap ? toRem(p.cGap) : undefined,
    rowGap: p.rGap ? toRem(p.rGap) : undefined,
    gap: p.gap ? toRem(p.gap) : undefined,
    gridTemplateRows: p.rows,
    gridTemplateColumns: p.columns,
    alignItems: p.align,
    justifyContent: p.justify,
  })
}

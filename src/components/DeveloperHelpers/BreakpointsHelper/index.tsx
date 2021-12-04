import { FC } from 'react'
import { createBreakpoint } from 'react-use'
import { getTailwindConfig } from '@/utils/getTailwindConfig'

const {
  theme: { screens },
} = getTailwindConfig()

const breakpoints = { none: 0 }

Object.keys(screens)
  .filter(id => typeof screens[id] === 'string')
  .forEach(id => {
    breakpoints[id] = parseInt(screens[id].replace('px', ''))
  })

const useBreakpoint = createBreakpoint(breakpoints)

const BreakpointsHelper: FC = () => {
  const breakpoint = useBreakpoint()
  return (
    breakpoint !== 'none' && (
      <div className="BreakpointsHelper fixed top-3 right-3 bg-red-500/70 text-white font-sans p-2 pointer-events-none select-none z-50">
        <span className="text-lg font-bold">{breakpoint}</span>{' '}
        <span className="text-xs">(min-width: {screens[breakpoint]})</span>
      </div>
    )
  )
}

export default BreakpointsHelper

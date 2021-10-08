import path from 'path'
import resolveConfig from 'tailwindcss/resolveConfig'
import { createBreakpoint } from 'react-use'

/* global process */

const {
  theme: { screens },
} = resolveConfig(path.join(process.cwd(), 'tailwind.config.js'))

let breakpoints = {}
Object.keys(screens).forEach(id => {
  breakpoints[id] = parseInt(screens[id].replace('px', ''))
})
breakpoints['none'] = 0

const useBreakpoint = createBreakpoint(breakpoints)

const BreakpointsHelper = () => {
  const breakpoint = useBreakpoint()
  return (
    breakpoint !== 'none' && (
      <div className="BreakpointsHelper fixed top-3 left-3 bg-red-500/70 text-white font-sans p-2 ">
        breakpoint: {breakpoint} ({screens[breakpoint]})
      </div>
    )
  )
}

export default BreakpointsHelper

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

const useTailwindBreapoints = () => {
  const breakpoint = useBreakpoint()

  return {
    breakpoint,
    info: screens[breakpoint],
  }
}

export default useTailwindBreapoints

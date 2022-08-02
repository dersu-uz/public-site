import useTailwindBreapoints from '@/hooks/useTailwindBreakpoints';
import { FC } from 'react';

const BreakpointsHelper: FC = () => {
  const { breakpoint, info } = useTailwindBreapoints()

  return (
    breakpoint !== 'none' && (
      <div className="BreakpointsHelper fixed top-3 right-3 bg-red-500/70 text-white font-sans p-2 pointer-events-none select-none z-50">
        <span className="text-lg font-bold">{breakpoint}</span>{' '}
        <span className="text-xs">({info})</span>
      </div>
    )
  )
}

export default BreakpointsHelper

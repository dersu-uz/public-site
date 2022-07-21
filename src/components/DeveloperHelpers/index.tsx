import { ReactNode, useContext } from 'react'

import DeveloperContext from '@/contexts/DeveloperContext'

import BreakpointsHelper from '@/components/DeveloperHelpers/BreakpointsHelper'
import GridOverlayHelper from '@/components/DeveloperHelpers/GridOverlayHelper'

const DeveloperHelpers = (props: { children?: ReactNode }) => {
  const { showGrid, showBreakpoints } = useContext(DeveloperContext)
  return (
    <div className="z-50">
      {props.children}
      {showGrid && <GridOverlayHelper />}
      {showBreakpoints && <BreakpointsHelper />}
    </div>
  )
}

export default DeveloperHelpers

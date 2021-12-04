import { FC, useContext } from 'react'

import DeveloperContext from '@/contexts/DeveloperContext'

import GridOverlayHelper from '@/components/DeveloperHelpers/GridOverlayHelper'
import BreakpointsHelper from '@/components/DeveloperHelpers/BreakpointsHelper'

const DeveloperHelpers: FC = ({ children }) => {
  const { showGrid, showBreakpoints } = useContext(DeveloperContext)
  return (
    <div className="z-50">
      {children}
      {showGrid && <GridOverlayHelper />}
      {showBreakpoints && <BreakpointsHelper />}
    </div>
  )
}

export default DeveloperHelpers

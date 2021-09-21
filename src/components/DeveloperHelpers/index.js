import { useContext } from 'react'
import PropTypes from 'prop-types'

import DeveloperContext from '@/contexts/DeveloperContext'

import GridOverlayHelper from '@/components/GridOverlayHelper'
import BreakpointsHelper from '../BreakpointsHelper'

const DeveloperHelpers = ({ children }) => {
  const { showGrid, showBreakpoints } = useContext(DeveloperContext)
  return (
    <>
      {children}
      {showGrid && <GridOverlayHelper />}
      {showBreakpoints && <BreakpointsHelper />}
    </>
  )
}

DeveloperHelpers.propTypes = {
  children: PropTypes.node,
}

export default DeveloperHelpers

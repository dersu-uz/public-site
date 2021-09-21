import { createContext } from 'react'
import PropTypes from 'prop-types'
import { useKey, useToggle } from 'react-use'

const DeveloperContext = createContext()

// TODO: disable in production
const DeveloperContextProvider = ({ children }) => {
  const [showGrid, toggleShowGrid] = useToggle(false)
  const [showBreakpoints, toggleShowBreakpoints] = useToggle(false)

  useKey(
    e => e.key === 'g' && e.ctrlKey,
    () => toggleShowGrid()
  )

  useKey(
    e => e.key === 'b' && e.ctrlKey,
    () => toggleShowBreakpoints()
  )

  const value = {
    showGrid,
    showBreakpoints,
  }

  return (
    <DeveloperContext.Provider value={value}>
      {children}
    </DeveloperContext.Provider>
  )
}

DeveloperContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { DeveloperContextProvider }
export default DeveloperContext

import { createContext, FC } from 'react'
import { useKey, useToggle } from 'react-use'

type DeveloperContextType = {
  showGrid: boolean
  showBreakpoints: boolean
}

const DeveloperContext = createContext<DeveloperContextType>(null)

const DeveloperContextProvider: FC = ({ children }) => {
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

  const value: DeveloperContextType = {
    showGrid,
    showBreakpoints,
  }

  return (
    <DeveloperContext.Provider value={value}>
      {children}
    </DeveloperContext.Provider>
  )
}

export { DeveloperContextProvider }
export default DeveloperContext

import { useKey, useToggle } from 'react-use'

import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'

// TODO: disable in production
const GridOverlay = () => {
  const [showGrid, toggleShowGrid] = useToggle(false)
  useKey(
    e => e.key === 'g' && e.ctrlKey,
    () => toggleShowGrid()
  )
  const columns = new Array(12).fill(0)
  return (
    <>
      {showGrid && (
        <>
          <div className="GridOverlay fixed top-0 left-0 w-full min-h-screen z-50 pointer-events-none">
            <Container className="min-h-screen">
              <Wrapper>
                <div className="grid grid-cols-4 gap-6 md:grid-cols-12 md:gap-5 min-h-screen">
                  {columns.map((item, i) => (
                    <div
                      key={i}
                      className={`bg-pink-400 bg-opacity-20 md:block ${
                        i > 3 ? 'hidden' : ''
                      }`}
                    ></div>
                  ))}
                </div>
              </Wrapper>
            </Container>
          </div>
        </>
      )}
    </>
  )
}

GridOverlay.propTypes = {}

export default GridOverlay

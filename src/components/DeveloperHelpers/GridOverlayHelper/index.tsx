import { FC } from 'react'
import Wrapper from '@/components/Wrapper'

import { generateArrayOfNumbers } from '@/utils/generateArrayOfNumbers'

const GridOverlay: FC = () => {
  const columns = generateArrayOfNumbers(12)
  return (
    <div className="GridOverlay fixed top-0 left-0 w-full min-h-screen pointer-events-none">
      <div className="min-h-screen">
        <Wrapper>
          <div className="grid grid-cols-12 gap-1 lg:gap-5 min-h-screen">
            {columns.map(item => (
              <div key={item} className="bg-pink-400 bg-opacity-20" />
            ))}
          </div>
        </Wrapper>
      </div>
    </div>
  )
}

export default GridOverlay

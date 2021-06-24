import React from 'react'

import DersuQuotes from '../../styles/assets/dersu-quotes.svg'

const DersuLogo = () => {
  return (
    <h1 className="DersuLogo">
      <DersuQuotes className="DersuLogo__quotes" />
      <span className="DersuLogo__text">Dersu</span>
    </h1>
  )
}

export default DersuLogo

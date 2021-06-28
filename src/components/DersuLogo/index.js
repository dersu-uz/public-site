import React from 'react'
import Link from 'next/link'
import DersuQuotes from '../../styles/assets/dersu-quotes.svg'

const DersuLogo = () => {
  return (
    <h1 className="DersuLogo">
      <Link href="/">
        <a className="DersuLogo__link">
          <DersuQuotes className="DersuLogo__quotes" />
          <span className="DersuLogo__text">Dersu</span>
        </a>
      </Link>
    </h1>
  )
}

export default DersuLogo

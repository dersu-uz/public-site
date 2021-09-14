import { useContext } from 'react'
import Link from 'next/link'
import DersuQuotes from '../../styles/assets/dersu-quotes.svg'
import TranslationsContext from '@/contexts/TranslationsContext'

const DersuLogo = () => {
  const { currentLocale } = useContext(TranslationsContext)
  return (
    <h1 className="DersuLogo">
      <Link href={`/${currentLocale}`}>
        <a className="DersuLogo__link">
          <DersuQuotes className="DersuLogo__quotes" />
          <span className="DersuLogo__text">Dersu</span>
        </a>
      </Link>
    </h1>
  )
}

export default DersuLogo

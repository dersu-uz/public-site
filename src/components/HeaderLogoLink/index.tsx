import { FC, useContext } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import DersuLogoWithText from '../../styles/assets/dersu-logo-with-text.svg'
import TranslationsContext from '@/contexts/TranslationsContext'

type Props = {
  negativeColor?: boolean
}

const HeaderLogoLink: FC<Props> = ({ negativeColor = false }) => {
  const { currentLocale } = useContext(TranslationsContext)

  return (
    <Link href={`/${currentLocale}`}>
      <a title="Dersu" className="block">
        <DersuLogoWithText
          className={classNames(
            'h-5 -mt-1.5 md:h-6 transition-colors',
            negativeColor ? 'text-dersu-white' : 'text-dersu-black'
          )}
        />
      </a>
    </Link>
  )
}

export default HeaderLogoLink

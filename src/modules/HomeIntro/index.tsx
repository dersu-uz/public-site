/* eslint-disable @next/next/no-img-element */
import { FC, useContext } from 'react'
import Fade from 'react-reveal/Fade'

import TranslationsContext from '@/contexts/TranslationsContext'

import VerticalDivision from '@/components/VerticalDivision'
import Wrapper from '@/components/Wrapper'

import styles from './styles.module.css'

const HomeIntro: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className="HomeIntro">
      <Wrapper>
        <div>
          <Fade bottom distance={`24px`}>
            <h2 className={styles.heading}>{t.moduleHomeIntro.tagLine}</h2>
          </Fade>
          <VerticalDivision />
        </div>
      </Wrapper>
    </div>
  )
}

export default HomeIntro

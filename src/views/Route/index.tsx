import Header from '@/components/Header'
import Picture from '@/components/Picture'
import StoreButtons from '@/components/StoreButtones'
import TranslationsContext from '@/contexts/TranslationsContext'
import s from '@/styles/style-utils'
import { css } from '@emotion/react'
import { useContext } from 'react'

const Route = () => {
  const { t } = useContext(TranslationsContext)

  return (
    <div css={[s.bg('blue'), s.size({ h: '100vh', w: '100%' })]}>
      <Header />
      <div
        css={[
          s.flex({ direction: 'column', justify: 'center', align: 'center' }),
          s.padding.all(16, 8),
          s.margin.all('auto'),
          s.size({ maxW: 'screen2xl' }),
          s.mq.up('md', s.flex({ direction: 'row', justify: 'space-between' })),
        ]}
      >
        <div>
          <p
            css={[
              s.typography({ style: 'xl', align: 'center', color: 'brown' }),
              s.mq.up('lg', s.textStyle('3xl')),
              s.mq.up('md', [
                s.typography({ style: '2xl', align: 'left' }),
                s.size({ w: 'xl' }),
              ]),
              css({
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '2rem',
              }),
            ]}
          >
            {t.routeFallback.message}
          </p>
          <StoreButtons />
        </div>

        <div>
          <Picture
            alt="Dersu App"
            path="/images/views/route-fallback"
            imageName="picture-1"
            imageType="png"
            densities={[1, 2]}
            imgClassName=""
          />
        </div>
      </div>
    </div>
  )
}

export default Route

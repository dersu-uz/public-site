import { FC, useContext } from 'react'
import TranslationsContext from '@/contexts/TranslationsContext'
import useIubendaContent from '@/hooks/useIubendaContent'
import DefaultLayout from '@/layouts/DefaultLayout'
import IubendaContent from '@/components/IubendaContent'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      locale: 'es',
      title: 'Política de privacidad',
      description: 'Política de privacidad de Dersu.uz',
    },
  }
}

const PrivacyPage: FC = props => {
  const { t } = useContext(TranslationsContext)
  const { content } = useIubendaContent(
    'Política de privacidad',
    t.common.privacyIubendaPageUrl,
    t.common.privacyIubendaApiUrl
  )

  return (
    <DefaultLayout {...props}>
      <IubendaContent content={content} />
    </DefaultLayout>
  )
}

export default PrivacyPage

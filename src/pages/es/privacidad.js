import { useContext } from 'react'
import TranslationsContext from '@/contexts/TranslationsContext'
import useIubendaContent from '@/hooks/useIubendaContent'
import DefaultLayout from '@/layouts/DefaultLayout'
import IubendaContent from '@/components/IubendaContent'

export async function getStaticProps() {
  return {
    props: {
      locale: 'es',
      title: 'Política de privacidad',
      description: 'Política de privacidad de Dersu.uz',
    },
  }
}

const PrivacyPage = props => {
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

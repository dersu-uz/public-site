import { useContext } from 'react'
import TranslationsContext from '@/contexts/TranslationsContext'
import useIubendaContent from '@/hooks/useIubendaContent'
import DefaultLayout from '@/layouts/DefaultLayout'
import IubendaContent from '@/components/IubendaContent'

export async function getStaticProps() {
  return {
    props: {
      locale: 'es',
      title: 'Condiciones de uso',
      description: 'Condiciones de uso de Dersu.uz',
    },
  }
}

const TermsPage = props => {
  const { t } = useContext(TranslationsContext)
  const { content } = useIubendaContent(
    'Condiciones de uso',
    t.common.termsIubendaPageUrl,
    t.common.termsIubendaApiUrl
  )
  return (
    <DefaultLayout {...props}>
      <IubendaContent content={content} />
    </DefaultLayout>
  )
}

export default TermsPage

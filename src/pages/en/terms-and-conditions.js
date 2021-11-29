import { useContext } from 'react'
import TranslationsContext from '@/contexts/TranslationsContext'
import useIubendaContent from '@/hooks/useIubendaContent'
import DefaultLayout from '@/layouts/DefaultLayout'
import IubendaContent from '@/components/IubendaContent'

export async function getStaticProps() {
  return {
    props: {
      locale: 'en',
      title: 'Terms and Conditions',
      description: 'Terms and Conditions of Dersu.uz',
    },
  }
}

const TermsPage = props => {
  const { t } = useContext(TranslationsContext)
  const { content } = useIubendaContent(
    'Terms and Conditions',
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

import { useContext } from 'react'
import TranslationsContext from '@/contexts/TranslationsContext'
import useIubendaContent from '@/hooks/useIubendaContent'
import DefaultLayout from '@/layouts/DefaultLayout'
import IubendaContent from '@/components/IubendaContent'

export async function getStaticProps() {
  return {
    props: {
      locale: 'en',
      title: 'Privacy Policy',
      description: 'Privacy Policy of Dersu.uz',
    },
  }
}

const PrivacyPage = props => {
  const { t } = useContext(TranslationsContext)
  const { content } = useIubendaContent(
    'Privacy Policy',
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

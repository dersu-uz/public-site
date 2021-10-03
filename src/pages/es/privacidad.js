import DefaultLayout from '@/layouts/DefaultLayout'
import IubendaContent from '@/components/IubendaContent'
import useIubendaPrivacy from '@/hooks/useIubendaPrivacy'

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
  const { content } = useIubendaPrivacy()

  return (
    <DefaultLayout {...props}>
      <IubendaContent content={content} />
    </DefaultLayout>
  )
}

export default PrivacyPage

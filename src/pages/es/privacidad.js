import DefaultLayout from '@/components/DefaultLayout'
import IubendaContent from '@/components/IubendaContent'
import useIubendaPrivacy from '@/hooks/useIubendaPrivacy'

export const getStaticProps = async () => {
  return {
    props: {
      locale: 'es',
      title: 'Política de privacidad',
      description: 'Política de privacidad de Dersu.uz',
    },
  }
}

function PrivacyPage() {
  const { content } = useIubendaPrivacy()

  return (
    <DefaultLayout>
      <IubendaContent content={content} />
    </DefaultLayout>
  )
}

export default PrivacyPage

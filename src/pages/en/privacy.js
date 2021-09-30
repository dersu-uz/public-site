import DefaultLayout from '@/layouts/DefaultLayout'
import IubendaContent from '@/components/IubendaContent'
import useIubendaPrivacy from '@/hooks/useIubendaPrivacy'

export const getStaticProps = async () => {
  return {
    props: {
      locale: 'en',
      title: 'Privacy Policy',
      description: 'Privacy Policy of Dersu.uz',
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

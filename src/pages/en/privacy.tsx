import { FC, useContext } from 'react'
import { GetStaticProps } from 'next'

import TranslationsContext from '@/contexts/TranslationsContext'

import useIubendaContent from '@/hooks/useIubendaContent'

import DefaultLayout from '@/layouts/DefaultLayout'
import IubendaContent from '@/components/IubendaContent'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      locale: 'en',
      title: 'Privacy Policy',
      description: 'Privacy Policy of Dersu.uz',
    },
  }
}

const PrivacyPage: FC = props => {
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

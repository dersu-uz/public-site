import { FC, useContext } from 'react'
import { GetStaticProps } from 'next'

import TranslationsContext from '@/contexts/TranslationsContext'

import useIubendaContent from '@/hooks/useIubendaContent'

import DefaultLayout from '@/layouts/DefaultLayout'

import MainContent from '@/components/MainContent'
import MarkdownContent from '@/components/MarkdownContent'

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
      <MainContent>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: content }} />
      </MainContent>
    </DefaultLayout>
  )
}

export default PrivacyPage

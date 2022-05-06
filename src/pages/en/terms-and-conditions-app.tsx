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
      locale: 'en',
      title: 'Terms and Conditions',
      description: 'Terms and Conditions of Dersu.uz',
    },
  }
}

const TermsPage: FC = props => {
  const { t } = useContext(TranslationsContext)
  const { content } = useIubendaContent(
    'Terms and Conditions',
    t.common.termsIubendaPageUrlApp,
    t.common.termsIubendaApiUrlApp
  )
  return (
    <DefaultLayout {...props}>
      <MainContent>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: content }} />
      </MainContent>
    </DefaultLayout>
  )
}

export default TermsPage

import { FC, useContext } from 'react'
import { GetStaticProps } from 'next'

import TranslationsContext from '@/contexts/TranslationsContext'

import useIubendaContent from '@/hooks/useIubendaContent'

import DefaultLayout from '@/layouts/DefaultLayout'

import MainContent from '@/components/MainContent'
import MarkdownContent from '@/components/MarkdownContent'
import { getTranslations, LocaleShortCode } from '@/services/i18nService'

export const getStaticProps: GetStaticProps = async ctx => {
  const t = getTranslations(ctx.locale as LocaleShortCode)

  if (!t) return { notFound: true }

  return {
    props: {
      title: t.privacy.title,
      description: t.privacy.description,
    },
  }
}

const PrivacyPage: FC = props => {
  const { t } = useContext(TranslationsContext)
  const { content } = useIubendaContent(
    'Privacy Policy',
    t.common.privacyIubendaPageUrlApp,
    t.common.privacyIubendaApiUrlApp
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

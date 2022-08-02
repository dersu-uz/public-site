import MainContent from '@/components/MainContent';
import MarkdownContent from '@/components/MarkdownContent';
import TranslationsContext from '@/contexts/TranslationsContext';
import useIubendaContent from '@/hooks/useIubendaContent';
import DefaultLayout from '@/layouts/DefaultLayout';
import { getTranslations, LocaleShortCode } from '@/services/i18nService';
import { GetStaticProps } from 'next';
import { FC, useContext } from 'react';

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
    t.common.privacyIubendaPageUrlWeb,
    t.common.privacyIubendaApiUrlWeb
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

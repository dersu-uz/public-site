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
      title: t.tAndC.title,
      description: t.tAndC.description,
    },
  }
}

const TermsPage: FC = props => {
  const { t } = useContext(TranslationsContext)
  const { content } = useIubendaContent(
    'Terms and Conditions',
    t.common.termsIubendaPageUrlWeb,
    t.common.termsIubendaApiUrlWeb
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

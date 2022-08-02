import { getTranslations, LocaleShortCode } from '@/services/i18nService';
import Article from '@/views/Learning';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const t = getTranslations(ctx.locale as LocaleShortCode)

  if (!t) return { notFound: true }

  return {
    props: {
      title: t.articleFallback.title,
    },
  }
}

const ArticlePage = () => {
  return <Article />
}

export default ArticlePage

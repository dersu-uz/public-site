import { getTranslations, LocaleShortCode } from '@/services/i18nService'
import ArticleFallback from '@/views/Article'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ctx => {
  const t = getTranslations(ctx.locale as LocaleShortCode)

  return {
    props: {
      title: t.articleFallback.title,
    },
  }
}

const ArticleFallbackPage = () => {
  return <ArticleFallback />
}

export default ArticleFallbackPage

import { getTranslations, LocaleShortCode } from '@/services/i18nService';
import Route from '@/views/Route';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const t = getTranslations(ctx.locale as LocaleShortCode)

  if (!t) return { notFound: true }

  return {
    props: {
      title: t.routeFallback.title,
    },
  }
}

const RoutePage = () => {
  return <Route />
}

export default RoutePage

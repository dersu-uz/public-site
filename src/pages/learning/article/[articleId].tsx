import Header from '@/components/Header'
import Picture from '@/components/Picture'
import StoreButtons from '@/components/StoreButtones'
import TranslationsContext from '@/contexts/TranslationsContext'
import { getTranslations, LocaleShortCode } from '@/services/i18nService'
import { GetServerSideProps } from 'next'
import { useContext } from 'react'

export const getServerSideProps: GetServerSideProps = async ctx => {
  const t = getTranslations(ctx.locale as LocaleShortCode)

  if (!t) return { notFound: true }

  return {
    props: {
      title: t.articleFallback.title,
    },
  }
}

const Article = () => {
  const { t } = useContext(TranslationsContext)

  return (
    <div className="w-[100%] h-[100vh] bg-dersu-blue">
      <Header />
      <div className="flex flex-col md:flex-row pt-16 px-8 justify-center md:justify-between m-auto  items-center max-w-screen-2xl">
        <div className="text-dersu-brown">
          <p className="text-dersu-xl text-center md:text-left mb-8 mx-auto text-dersu-lg lg:text-dersu-3xl md:text-dersu-2xl md:max-w-xl">
            {t.articleFallback.message}
          </p>
          <StoreButtons />
        </div>

        <div>
          <Picture
            alt="Dersu App"
            path="/images/views/route-fallback"
            imageName="picture-1"
            imageType="png"
            densities={[1, 2]}
            imgClassName=""
          />
        </div>
      </div>
    </div>
  )
}

export default Article

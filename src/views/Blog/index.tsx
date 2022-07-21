import { FC, useContext } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import MarkdownContent from '@/components/MarkdownContent'
import PostsList from '@/components/PostsList'
import Wrapper from '@/components/Wrapper'
import TranslationsContext from '@/contexts/TranslationsContext'
import DefaultLayout from '@/layouts/DefaultLayout'
import Link from 'next/link'

type Props = {
  title: string
  description: string
  latestPosts: Array<BlogPost>
}

const Blog: FC<Props> = props => {
  const { t } = useContext(TranslationsContext)

  if (!props.latestPosts.length) {
    return (
      <DefaultLayout {...props}>
        <MainContent>
          <MarkdownContent>
            {t.blog.workingOn}{' '}
            <Link href="/blog" locale="es">
              <a>{t.blog.spanishVersion}</a>
            </Link>{' '}
            {t.blog.available}
          </MarkdownContent>
        </MainContent>
      </DefaultLayout>
    )
  }

  return (
    <>
      <Header />

      <div className="ModuleFeaturedPosts">
        <Wrapper>
          <div className="flex items-end justify-between">
            <h2 className="text-dersu-lg md:text-dersu-3xl lg:text-dersu-4xl mt-16">
              Blog
            </h2>
          </div>
          <PostsList posts={props.latestPosts} />
        </Wrapper>
      </div>
      <Footer />
    </>
  )
}

export default Blog

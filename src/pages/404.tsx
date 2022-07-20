import { FC } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import DefaultLayout from '@/layouts/DefaultLayout'

import MainContent from '@/components/MainContent'
import MarkdownContent from '@/components/MarkdownContent'

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      locale: 'es',
      title: '404',
      description: 'Página no encontrada / Page not found',
    },
  }
}

const Page404: FC = props => {
  return (
    <DefaultLayout {...props}>
      <MainContent>
        <MarkdownContent>
          <h2>Página no encontrada / Page not found</h2>
          <p>No encontramos la página que buscas.</p>
          <p>We cannot find the page you are looking for.</p>
          <p>
            <Link href="/" locale="es">
              Español
            </Link>{' '}
            -{' '}
            <Link href="/" locale="en">
              English
            </Link>{' '}
            -{' '}
            <Link href="/" locale="fr">
              Français
            </Link>
          </p>
        </MarkdownContent>
      </MainContent>
    </DefaultLayout>
  )
}

export default Page404

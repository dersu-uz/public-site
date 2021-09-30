import Link from 'next/link'

import DefaultLayout from '@/layouts/DefaultLayout'
import MarkdownContent from '@/components/MarkdownContent'

export const getStaticProps = () => {
  return {
    props: {
      locale: 'es',
      title: '404',
      description: 'Página no encontrada / Page not found',
    },
  }
}

function Page404() {
  return (
    <DefaultLayout>
      <MarkdownContent>
        <h2>Página no encontrada / Page not found</h2>
        <p>No encontramos la página que buscas.</p>
        <p>We cannot find the page you are looking for.</p>
        <p>
          <Link href="/es">Versión en Español</Link> -{' '}
          <Link href="/en">English version</Link>
        </p>
      </MarkdownContent>
    </DefaultLayout>
  )
}

export default Page404

import React from 'react'
import Link from 'next/link'

import DefaultLayout from '@/components/DefaultLayout'
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
        <p>
          La página que intentas alcanzar, ha caído en una grieta del glaciar.
        </p>
        <p>
          The page you are trying to reach has fallen into a crevasse in the
          glacier.
        </p>
        <p>
          <Link href="/es">Versión en Español</Link> -{' '}
          <Link href="/en">English version</Link>
        </p>
      </MarkdownContent>
    </DefaultLayout>
  )
}

export default Page404

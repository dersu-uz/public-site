import React from 'react'
import Link from 'next/link'

import DefaultLayout from '@/components/DefaultLayout'
import MarkdownContent from '@/components/MarkdownContent'

export const getStaticProps = () => {
  return {
    props: {
      lang: 'es',
      title: '404',
      description: 'Página no encontrada',
    },
  }
}

function Page404() {
  return (
    <DefaultLayout>
      <MarkdownContent>
        <h2>Página no encontrada</h2>
        <p>
          La página que intentas alcanzar, ha caído en una grieta del glaciar.
          Prueba con la <Link href="/">página principal</Link>
        </p>
      </MarkdownContent>
    </DefaultLayout>
  )
}

export default Page404

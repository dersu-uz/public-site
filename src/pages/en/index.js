import React from 'react'

import DefaultLayout from '@/components/DefaultLayout'
import MarkdownContent from '@/components/MarkdownContent'

export const getStaticProps = () => {
  return {
    props: {
      lang: 'en',
      description: 'Your assistant in the mountain',
    },
  }
}

function HomePage() {
  return (
    <DefaultLayout>
      <MarkdownContent>
        <blockquote>
          <p>A linking point between people and mountains</p>
        </blockquote>
        <p>
          Dersu nace con la intención de convertirse en un punto de enlace entre
          las personas y las montañas. Esta relación puede tener muchas formas,
          pero siempre ha de asentarse en una serie de pilares fundamentales
          como el respeto, la seguridad y la sostenibilidad.
        </p>
        <p>
          Vemos la montaña como una forma (una más) de entender lo que es la
          vida y aprender a transitar por ella. Nos exige y nos premia, nos
          protege y amenaza, nos enseña a estar solos y en compañía, nos enseña
          lo que es el respeto, el esfuerzo, el compañerismo. Nos enseña también
          cuán grande y pequeño es el ser humano.
        </p>
        <p>
          La relación que cada uno crea con la naturaleza es personal y
          diferente, cambiante con el tiempo. Dersu pretende convertirse en un
          compañero para ese viaje; que apoye, descubra, pregunte, advierta. De
          forma que cada cual encuentre su propio camino.
        </p>
      </MarkdownContent>
    </DefaultLayout>
  )
}

export default HomePage

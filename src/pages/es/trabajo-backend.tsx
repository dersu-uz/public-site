import { FC } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import DefaultLayout from '@/layouts/DefaultLayout'

import MarkdownContent from '@/components/MarkdownContent'
import MainContent from '@/components/MainContent'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      locale: 'es',
      title: 'Trabaja con Dersu',
      description:
        'Buscamos una persona con foco de trabajo en backend e infraestructura.',
    },
  }
}

const Backend: FC = props => {
  return (
    <DefaultLayout {...props}>
      <MainContent>
        <MarkdownContent>
          <h2>¿Qué es Dersu?</h2>
          <p>
            Dersu es un servicio enfocado en facilitar que las personas
            disfruten de una relación sana con las montañas. Queremos crear un
            conjunto de herramientas que ayuden en la evaluación y mejora
            progresiva, la formación en una correcta metodología de toma de
            decisiones y el soporte en tiempo real de rutas en la montaña y la
            naturaleza. Más información en{' '}
            <Link href="/es/trabaja-con-dersu">
              la página general de trabajo con Dersu
            </Link>
            .
          </p>

          <p>
            Buscamos una persona con foco de trabajo en backend e
            infraestructura.
          </p>

          <p>Algunas de las funciones del backend y servicios de Dersu:</p>

          <ul>
            <li>
              Aglutinar fuentes de datos heterogéneas de metereología,
              nivología, aludes, etc. y ofrecerlas de una forma coherente a la
              aplicación móvil a través de una API única.
            </li>
            <li>
              Monitorizar esas fuentes de datos para proveer soporte en tiempo
              real a las expediciones que estén en marcha informando
              proactivamente de cambios relevantes.
            </li>
            <li>
              Un gestor de contenidos para alimentar tanto la web pública (blog,
              páginas específicas para localizaciones) como para el repositorio
              interno de rutas y puntos críticos.
            </li>
            <li>
              Gestión de perfiles de deportistas incluyendo herramientas de
              auto-evaluación y progresión técnica.
            </li>
            <li>Gestión de expediciones para guías de montaña.</li>
            <li>
              Integración con servicios de terceros como Strava, iOS Health Kit,
              etc.
            </li>
          </ul>
          <p></p>
          <p>
            Aunque hay cierta flexibilidad a la hora de elegir tecnología y
            framework tenemos preferencia por Express/Nest + Typescript, Google
            Cloud + Terraform y Strapi como CMS.
          </p>

          <h2>¿Qué ofrecemos?</h2>

          <p>Trabajo en remoto mientras haya compatibilidad con GMT+1.</p>

          <p>
            Inicialmente contrato autónomo en torno a ~€4.500/mes, flexibilidad
            de horarios, foco en resultados y objetivos calculados en torno a
            una semana laboral de 40 horas o menos (estamos abiertos a medias
            jornadas, 4 días a la semana o similares).
          </p>

          <p>
            Respeto por las personas, sus individualidades y su derecho a vida
            privada fuera del horario laboral. Un equipo pequeño con vocación de
            ser diverso e inclusivo.
          </p>

          <p>
            Si te interesa, quieres saber más o tienes alguna duda por favor no
            dudes en ponerte en contacto a través de{' '}
            <Link href="mailto:work@dersu.uz">work@dersu.uz</Link>.
          </p>

          <p>Gracias : )</p>
        </MarkdownContent>
      </MainContent>
    </DefaultLayout>
  )
}

export default Backend

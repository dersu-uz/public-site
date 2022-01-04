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
        'Buscamos una persona que nos ayude con nuestra applicación Flutter.',
    },
  }
}

const Flutter: FC = props => {
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

          <h2>¿Qué buscamos?</h2>

          <p>Buscamos una persona que nos ayude con la applicación Flutter.</p>

          <p>
            La aplicación móvil es el punto central de la relación de los
            usuarios con Dersu. Desde ella les montañistes pueden:
          </p>

          <ul>
            <li>
              Planificar expediciones consultando partes meteorológicos y de
              nivología.
            </li>
            <li>Crear o formar parte de grupos para las expediciones.</li>
            <li>
              Recibir soporte en tiempo real durante las expediciones (avisos de
              puntos críticos, alertas meteorológicas, etc.).
            </li>
            <li>
              Definir su perfil de niveles tanto técnicos, como físico y de
              psicológico.
            </li>
            <li>Y un montón de cosas más : )</li>
          </ul>
          <p>
            La arquitectura actual de la aplicación está basada en{' '}
            <Link href="https://bloclibrary.dev/">Bloc</Link> junto con otras
            liberías estándar dentro del ecosistema Flutter como{' '}
            <Link href="https://github.com/fluttercommunity/get_it">GetIt</Link>{' '}
            o <Link href="https://docs.hivedb.dev">Hive</Link>.
          </p>

          <p>
            <strong>IMPORTANTE:</strong> somos un equipo pequeño pero
            internacional, el día a día del equipo de desarollo es en Inglés,
            tanto hablado como escrito.
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

export default Flutter

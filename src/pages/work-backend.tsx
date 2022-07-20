import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FC } from 'react'

import DefaultLayout from '@/layouts/DefaultLayout'

import MainContent from '@/components/MainContent'
import MarkdownContent from '@/components/MarkdownContent'
import usePreferredLocale from '@/hooks/usePreferredLocale'
import { getTranslations, LocaleShortCode } from '@/services/i18nService'

export const getStaticProps: GetStaticProps = async ctx => {
  const t = getTranslations(ctx.locale as LocaleShortCode)

  return {
    props: {
      title: t.work.title,
      description: t.tAndC.descriptionBackend,
    },
  }
}

const content = {
  en: (
    <MarkdownContent>
      <h2>What is Dersu?</h2>
      <p>
        Dersu is a service focused on helping people having a lasting, healthy
        relationship with the mountains. We want to create a set of tools to
        help with self-assessment, progressive improvement, methodology,
        decision making and real time support of expeditions in the mountains.
        More information in the general{' '}
        <Link href="/en/work-with-dersu">work with Dersu page</Link>.
      </p>
      <p>We are looking for someone focused on backend work.</p>
      <p>Some of the expected functionality for Dersu backend services:</p>
      <ul>
        <li>
          Combine several heterogeneous data sources for weather, nivology, etc.
          and provide them as a coherent, single API to the mobile app.
        </li>
        <li>
          Monitor said data sources in order to provide real time support to
          on-going expeditions proactively warning of relevant changes.
        </li>
        <li>
          A CMS to both feed content to the public site (blog, specific location
          pages) and the app.
        </li>
        <li>
          Management of user profiles including self-assesment and progression
          tools.
        </li>
        <li>Expedition management tools for mountain guides.</li>
        <li>
          Integration with 3rd party services such as Strava, Garmin,
          Apple&apos;s HealthKit, etc
        </li>
      </ul>
      <p>
        Even though there is flexibility when choosing the technical stack and
        frameworks our current services are built using NestJS + Typescript and
        Google Cloud + Terraform.
      </p>
      <h2>What do we offer?</h2>
      <p>Remote work as long as there is compatibility with GMT+1.</p>
      <p>
        An initial freelance contract for ~€4.500/month, flexible schedule,
        focus on results and objectives calculated around a working week of 40
        hours or less (we are open to part time contracts, 4 day weeks or
        similar).
      </p>
      <p>
        Respect for people, their individualities and their right to a private
        life outside of work. A small team aiming to be diverse and inclusive.
      </p>
      <p>
        If you are interested, want to know more or have any doubt please do not
        hesitate to reach out through{' '}
        <Link href="mailto:work@dersu.uz">work@dersu.uz</Link>.
      </p>
      <p>Thanks : )</p>
    </MarkdownContent>
  ),
  es: (
    <MarkdownContent>
      <h2>¿Qué es Dersu?</h2>
      <p>
        Dersu es un servicio enfocado en facilitar que las personas disfruten de
        una relación sana con las montañas. Queremos crear un conjunto de
        herramientas que ayuden en la evaluación y mejora progresiva, la
        formación en una correcta metodología de toma de decisiones y el soporte
        en tiempo real de rutas en la montaña y la naturaleza. Más información
        en{' '}
        <Link href="/es/trabaja-con-dersu">
          la página general de trabajo con Dersu
        </Link>
        .
      </p>

      <p>Buscamos una persona con foco de trabajo en backend.</p>

      <p>Algunas de las funciones del backend y servicios de Dersu:</p>

      <ul>
        <li>
          Aglutinar fuentes de datos heterogéneas de metereología, nivología,
          etc. y ofrecerlas de una forma coherente a la aplicación móvil a
          través de una API única.
        </li>
        <li>
          Monitorizar esas fuentes de datos para proveer soporte en tiempo real
          a las expediciones que estén en marcha informando proactivamente de
          cambios relevantes.
        </li>
        <li>
          Un gestor de contenidos para alimentar tanto la web pública (blog,
          páginas específicas para localizaciones) como para el repositorio
          interno de rutas y puntos críticos.
        </li>
        <li>
          Gestión de perfiles de deportistas incluyendo herramientas de
          auto-evaluación y progresión.
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
        frameworks nuestros servicios actuales usan NestJS + Typescript y Google
        Cloud + Terraform.
      </p>

      <p>
        <strong>IMPORTANTE:</strong> somos un equipo pequeño pero internacional,
        el día a día del equipo de desarollo es en Inglés, tanto hablado como
        escrito.
      </p>

      <h2>¿Qué ofrecemos?</h2>

      <p>Trabajo en remoto mientras haya compatibilidad con GMT+1.</p>

      <p>
        Inicialmente contrato autónomo en torno a ~€4.500/mes, flexibilidad de
        horarios, foco en resultados y objetivos calculados en torno a una
        semana laboral de 40 horas o menos (estamos abiertos a medias jornadas,
        4 días a la semana o similares).
      </p>

      <p>
        Respeto por las personas, sus individualidades y su derecho a vida
        privada fuera del horario laboral. Un equipo pequeño con vocación de ser
        diverso e inclusivo.
      </p>

      <p>
        Si te interesa, quieres saber más o tienes alguna duda por favor no
        dudes en ponerte en contacto a través de{' '}
        <Link href="mailto:work@dersu.uz">work@dersu.uz</Link>.
      </p>

      <p>Gracias : )</p>
    </MarkdownContent>
  ),
  fr: (
    <MarkdownContent>
      <h2>What is Dersu?</h2>
      <p>
        Dersu is a service focused on helping people having a lasting, healthy
        relationship with the mountains. We want to create a set of tools to
        help with self-assessment, progressive improvement, methodology,
        decision making and real time support of expeditions in the mountains.
        More information in the general{' '}
        <Link href="/en/work-with-dersu">work with Dersu page</Link>.
      </p>
      <p>We are looking for someone focused on backend work.</p>
      <p>Some of the expected functionality for Dersu backend services:</p>
      <ul>
        <li>
          Combine several heterogeneous data sources for weather, nivology, etc.
          and provide them as a coherent, single API to the mobile app.
        </li>
        <li>
          Monitor said data sources in order to provide real time support to
          on-going expeditions proactively warning of relevant changes.
        </li>
        <li>
          A CMS to both feed content to the public site (blog, specific location
          pages) and the app.
        </li>
        <li>
          Management of user profiles including self-assesment and progression
          tools.
        </li>
        <li>Expedition management tools for mountain guides.</li>
        <li>
          Integration with 3rd party services such as Strava, Garmin,
          Apple&apos;s HealthKit, etc
        </li>
      </ul>
      <p>
        Even though there is flexibility when choosing the technical stack and
        frameworks our current services are built using NestJS + Typescript and
        Google Cloud + Terraform.
      </p>
      <h2>What do we offer?</h2>
      <p>Remote work as long as there is compatibility with GMT+1.</p>
      <p>
        An initial freelance contract for ~€4.500/month, flexible schedule,
        focus on results and objectives calculated around a working week of 40
        hours or less (we are open to part time contracts, 4 day weeks or
        similar).
      </p>
      <p>
        Respect for people, their individualities and their right to a private
        life outside of work. A small team aiming to be diverse and inclusive.
      </p>
      <p>
        If you are interested, want to know more or have any doubt please do not
        hesitate to reach out through{' '}
        <Link href="mailto:work@dersu.uz">work@dersu.uz</Link>.
      </p>
      <p>Thanks : )</p>
    </MarkdownContent>
  ),
}

const Backend: FC = props => {
  const { locale } = usePreferredLocale()

  return (
    <DefaultLayout {...props}>
      <MainContent>{content[locale] ?? content.es}</MainContent>
    </DefaultLayout>
  )
}

export default Backend

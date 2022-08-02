import MainContent from '@/components/MainContent';
import MarkdownContent from '@/components/MarkdownContent';
import usePreferredLocale from '@/hooks/usePreferredLocale';
import DefaultLayout from '@/layouts/DefaultLayout';
import { getTranslations, LocaleShortCode } from '@/services/i18nService';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';

export const getStaticProps: GetStaticProps = async ctx => {
  const t = getTranslations(ctx.locale as LocaleShortCode)

  if (!t) return { notFound: true }

  return {
    props: {
      title: t.work.title,
      description: t.tAndC.description,
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
      </p>

      <h2>What are we looking for?</h2>

      <p>
        We prefer people more motivated by solving user problems than whatever
        their craft (design, development, etc). Pragmatic people with a
        preference for reducing uncertainty by releasing small incremental
        updates to their users. People willing to get involved in the whole
        lifecycle of a digital product: research, concepts, strategy, analysis,
        software development, testing, infrastructure, analytics, observability,
        etc.
      </p>

      <p>
        Previous experience certainly will be appreciated but we are also open
        to working with people relatively early in their careers (1 or 2 years,
        depending on the profile).
      </p>

      <h2>What do we offer?</h2>

      <p>Remote work as long as there’s compatibility with GMT+1.</p>

      <p>
        An initial contract as a freelance, flexible schedule, focus on results
        and objectives calculated around a working week of 40 hours or less
        (we’re open to part time contracts, 4 day weeks or similar).
      </p>

      <p>
        Respect for people, their individualities and their right to a private
        life outside of work. A small team aiming to be diverse and inclusive.
      </p>

      <h2>Who are we?</h2>

      <p>
        Dersu is a service in its infancy, we have everything to do. The
        uncertainty around how to provide and care for people when up in the
        mountains is only comparable to our excitement around finding how to do
        it!
      </p>

      <p>
        The founding team comprises{' '}
        <Link href="https://twitter.com/mariarenilla">María Renilla</Link>{' '}
        (operations),{' '}
        <Link href="https://instagram.com/fernando_errekalde">
          Fernando Errekalde
        </Link>{' '}
        (mountain guide and product),{' '}
        <Link href="https://twitter.com/borjadelgado">Borja Delgado</Link>{' '}
        (product and design) and{' '}
        <Link href="https://twitter.com/wadus">Juan Delgado</Link> (technology).
      </p>

      <p>
        If you are interested, want to know more or have questions please do not
        hesitate to get in touch via{' '}
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
        en tiempo real de rutas en la montaña y la naturaleza.
      </p>

      <h2>¿Qué buscamos?</h2>

      <p>
        Preferimos personas más motivadas por resolver los problemas de nuestros
        usuarios que por su especialidad en concreto (llámese diseño, tecnología
        o lo que se quiera). Personas pragmáticas con preferencia por reducir la
        incertidumbre a base de pequeñas iteraciones en producción. Personas
        quen se quieran involucrar en el ciclo completo de desarrollo de un
        producto: investigación, conceptualización, estrategia, análisis,
        programación, diseño, testing, infraestructura, analítica,
        observabilidad, etc, etc.
      </p>

      <p>
        Aunque se valorará experiencia previa, estamos abiertos a personas que
        estén en los primeros años de su carrera (1 o 2 años de experiencia,
        dependiendo del caso).
      </p>

      <h2>¿Qué ofrecemos?</h2>

      <p>Trabajo en remoto mientras haya compatibilidad con GMT+1.</p>

      <p>
        Inicialmente contrato autónomo, flexibilidad de horarios, foco en
        resultados y objetivos calculados en torno a una semana laboral de 40
        horas o menos (estamos abiertos a medias jornadas, 4 días a la semana o
        similares).
      </p>

      <p>
        Respeto por las personas, sus individualidades y su derecho a vida
        privada fuera del horario laboral. Un equipo pequeño con vocación de ser
        diverso e inclusivo.
      </p>

      <h2>¿Quiénes somos?</h2>

      <p>
        Dersu es un servicio que está dando sus primeros pasos y donde está todo
        por hacer. La incertidumbre sobre cuál es la mejor forma de proveer a
        practicantes de actividades de montaña del mejor de los servicios es
        sólo comparable a la ilusión de hacerlo.
      </p>

      <p>
        El equipo fundador está compuesto por{' '}
        <Link href="https://twitter.com/mariarenilla">María Renilla</Link>{' '}
        (operaciones),{' '}
        <Link href="https://instagram.com/fernando_errekalde">
          Fernando Errekalde
        </Link>{' '}
        (guía de montaña y producto),{' '}
        <Link href="https://twitter.com/borjadelgado">Borja Delgado</Link>{' '}
        (producto y diseño) y{' '}
        <Link href="https://twitter.com/wadus">Juan Delgado</Link> (tecnología).
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
      </p>

      <h2>What are we looking for?</h2>

      <p>
        We prefer people more motivated by solving user problems than whatever
        their craft (design, development, etc). Pragmatic people with a
        preference for reducing uncertainty by releasing small incremental
        updates to their users. People willing to get involved in the whole
        lifecycle of a digital product: research, concepts, strategy, analysis,
        software development, testing, infrastructure, analytics, observability,
        etc.
      </p>

      <p>
        Previous experience certainly will be appreciated but we are also open
        to working with people relatively early in their careers (1 or 2 years,
        depending on the profile).
      </p>

      <h2>What do we offer?</h2>

      <p>Remote work as long as there’s compatibility with GMT+1.</p>

      <p>
        An initial contract as a freelance, flexible schedule, focus on results
        and objectives calculated around a working week of 40 hours or less
        (we’re open to part time contracts, 4 day weeks or similar).
      </p>

      <p>
        Respect for people, their individualities and their right to a private
        life outside of work. A small team aiming to be diverse and inclusive.
      </p>

      <h2>Who are we?</h2>

      <p>
        Dersu is a service in its infancy, we have everything to do. The
        uncertainty around how to provide and care for people when up in the
        mountains is only comparable to our excitement around finding how to do
        it!
      </p>

      <p>
        The founding team comprises{' '}
        <Link href="https://twitter.com/mariarenilla">María Renilla</Link>{' '}
        (operations),{' '}
        <Link href="https://instagram.com/fernando_errekalde">
          Fernando Errekalde
        </Link>{' '}
        (mountain guide and product),{' '}
        <Link href="https://twitter.com/borjadelgado">Borja Delgado</Link>{' '}
        (product and design) and{' '}
        <Link href="https://twitter.com/wadus">Juan Delgado</Link> (technology).
      </p>

      <p>
        If you are interested, want to know more or have questions please do not
        hesitate to get in touch via{' '}
        <Link href="mailto:work@dersu.uz">work@dersu.uz</Link>.
      </p>

      <p>Thanks : )</p>
    </MarkdownContent>
  ),
}

const WorkWithDersuPage: FC = props => {
  const { locale } = usePreferredLocale()

  return (
    <DefaultLayout {...props}>
      <MainContent>{content[locale] ?? content.es}</MainContent>
    </DefaultLayout>
  )
}

export default WorkWithDersuPage

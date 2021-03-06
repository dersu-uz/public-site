import MainContent from '@/components/MainContent';
import MarkdownContent from '@/components/MarkdownContent';
import usePreferredLocale from '@/hooks/usePreferredLocale';
import DefaultLayout from '@/layouts/DefaultLayout';
import { getTranslations } from '@/services/i18nService';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';

export const getStaticProps: GetStaticProps = async ctx => {
  const t = getTranslations(ctx.locale)

  if (!t) return { notFound: true }

  return {
    props: {
      title: t.work.title,
      description: t.work.descriptionMobile,
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
      <h2>What are we looking for?</h2>
      <p>We are looking for someone to help us with our Flutter app.</p>

      <p>
        The mobile app is the key to the relationship of our users with Dersu.
        From the mobile app our users can:
      </p>

      <ul>
        <li>Plan expeditions looking up weather and nivology reports.</li>
        <li>Create or be part of groups for the expeditions.</li>
        <li>
          Receive real time support during expeditions (critical waypoint
          warnings, weather alerts, etc.).
        </li>
        <li>
          Define their profile by setting their technical, physical and
          psychological levels.
        </li>
        <li>And so much more to come : )</li>
      </ul>
      <p>
        The current architecture is based on{' '}
        <Link href="https://bloclibrary.dev/">Bloc</Link> alongside other
        standard libraries from the Flutter ecosystem such as{' '}
        <Link href="https://github.com/fluttercommunity/get_it">GetIt</Link> or{' '}
        <Link href="https://docs.hivedb.dev">Hive</Link>.
      </p>

      <h2>What do we offer?</h2>
      <p>Remote work as long as there is compatibility with GMT+1.</p>
      <p>
        An initial freelance contract for ~???4.500/month, flexible schedule,
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
      <h2>??Qu?? es Dersu?</h2>
      <p>
        Dersu es un servicio enfocado en facilitar que las personas disfruten de
        una relaci??n sana con las monta??as. Queremos crear un conjunto de
        herramientas que ayuden en la evaluaci??n y mejora progresiva, la
        formaci??n en una correcta metodolog??a de toma de decisiones y el soporte
        en tiempo real de rutas en la monta??a y la naturaleza. M??s informaci??n
        en{' '}
        <Link href="/es/trabaja-con-dersu">
          la p??gina general de trabajo con Dersu
        </Link>
        .
      </p>

      <h2>??Qu?? buscamos?</h2>

      <p>Buscamos una persona que nos ayude con la applicaci??n Flutter.</p>

      <p>
        La aplicaci??n m??vil es el punto central de la relaci??n de los usuarios
        con Dersu. Desde ella les monta??istes pueden:
      </p>

      <ul>
        <li>
          Planificar expediciones consultando partes meteorol??gicos y de
          nivolog??a.
        </li>
        <li>Crear o formar parte de grupos para las expediciones.</li>
        <li>
          Recibir soporte en tiempo real durante las expediciones (avisos de
          puntos cr??ticos, alertas meteorol??gicas, etc.).
        </li>
        <li>
          Definir su perfil de niveles tanto t??cnicos, como f??sico y de
          psicol??gico.
        </li>
        <li>Y un mont??n de cosas m??s : )</li>
      </ul>
      <p>
        La arquitectura actual de la aplicaci??n est?? basada en{' '}
        <Link href="https://bloclibrary.dev/">Bloc</Link> junto con otras
        liber??as est??ndar dentro del ecosistema Flutter como{' '}
        <Link href="https://github.com/fluttercommunity/get_it">GetIt</Link> o{' '}
        <Link href="https://docs.hivedb.dev">Hive</Link>.
      </p>

      <p>
        <strong>IMPORTANTE:</strong> somos un equipo peque??o pero internacional,
        el d??a a d??a del equipo de desarollo es en Ingl??s, tanto hablado como
        escrito.
      </p>

      <h2>??Qu?? ofrecemos?</h2>

      <p>Trabajo en remoto mientras haya compatibilidad con GMT+1.</p>

      <p>
        Inicialmente contrato aut??nomo en torno a ~???4.500/mes, flexibilidad de
        horarios, foco en resultados y objetivos calculados en torno a una
        semana laboral de 40 horas o menos (estamos abiertos a medias jornadas,
        4 d??as a la semana o similares).
      </p>

      <p>
        Respeto por las personas, sus individualidades y su derecho a vida
        privada fuera del horario laboral. Un equipo peque??o con vocaci??n de ser
        diverso e inclusivo.
      </p>

      <p>
        Si te interesa, quieres saber m??s o tienes alguna duda por favor no
        dudes en ponerte en contacto a trav??s de{' '}
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
      <h2>What are we looking for?</h2>
      <p>We are looking for someone to help us with our Flutter app.</p>

      <p>
        The mobile app is the key to the relationship of our users with Dersu.
        From the mobile app our users can:
      </p>

      <ul>
        <li>Plan expeditions looking up weather and nivology reports.</li>
        <li>Create or be part of groups for the expeditions.</li>
        <li>
          Receive real time support during expeditions (critical waypoint
          warnings, weather alerts, etc.).
        </li>
        <li>
          Define their profile by setting their technical, physical and
          psychological levels.
        </li>
        <li>And so much more to come : )</li>
      </ul>
      <p>
        The current architecture is based on{' '}
        <Link href="https://bloclibrary.dev/">Bloc</Link> alongside other
        standard libraries from the Flutter ecosystem such as{' '}
        <Link href="https://github.com/fluttercommunity/get_it">GetIt</Link> or{' '}
        <Link href="https://docs.hivedb.dev">Hive</Link>.
      </p>

      <h2>What do we offer?</h2>
      <p>Remote work as long as there is compatibility with GMT+1.</p>
      <p>
        An initial freelance contract for ~???4.500/month, flexible schedule,
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

const Flutter: FC = props => {
  const { locale } = usePreferredLocale()

  return (
    <DefaultLayout {...props}>
      <MainContent>{content[locale] ?? content.es}</MainContent>
    </DefaultLayout>
  )
}

export default Flutter

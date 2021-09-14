import Link from 'next/link'

import DefaultLayout from '@/components/DefaultLayout'
import MarkdownContent from '@/components/MarkdownContent'

export const getStaticProps = () => {
  return {
    props: {
      locale: 'es',
      title: 'Trabaja con Dersu',
      description:
        'Buscamos personas que nos ayuden con la primera implementación del servicio',
    },
  }
}

function WorkWithDersuPage() {
  return (
    <DefaultLayout>
      <MarkdownContent>
        <h2>¿Qué es Dersu?</h2>
        <p>
          Dersu es un servicio enfocado en facilitar que las personas disfruten
          de una relación sana con las montañas. Queremos crear un conjunto de
          herramientas que ayuden en la evaluación y mejora progresiva, la
          formación en una correcta metodología de toma de decisiones y el
          soporte en tiempo real de rutas en la montaña y la naturaleza.
        </p>

        <h2>¿Qué buscamos?</h2>

        <p>
          Buscamos personas que nos ayuden con la primera implementación del
          servicio. Actualmente Dersu tiene en estado inicial:
        </p>

        <ul>
          <li>Una visión clara, con un equipo fundador muy experimentado.</li>
          <li>
            Una propuesta de valor que nos gustaría confirmar cuanto antes con
            usuarios reales.
          </li>
          <li>Una primera definición funcional del servicio.</li>
          <li>
            Estamos trabajando en una primera aproximación a temas de branding,
            comunicación, etc.
          </li>
          <li>Una aplicación móvil para Android y iOS en Flutter.</li>
          <li>
            Un backend con Express/Nest + TypeScript que aglutina y da
            coherencia a distintas fuentes de datos con los que alimentar a la
            aplicación móvil.
          </li>
          <li>Un gestor de contenidos con Strapi.</li>
          <li>
            Una web pública con información tanto comercial como contenido
            propio en NextJS.
          </li>
          <li>
            Google Cloud, Terraform y Github Actions para la infraestructura
            necesaria.
          </li>
        </ul>

        <p>
          Buscamos personas que puedan contribuir en una o varias de las áreas
          mencionadas, tanto a tiempo completo como con colaboraciones
          puntuales.
        </p>

        <p>
          Preferimos personas más motivadas por resolver los problemas de
          nuestros usuarios que por su especialidad en concreto (llámese diseño,
          tecnología o lo que se quiera). Personas pragmáticas con preferencia
          por reducir la incertidumbre a base de pequeñas iteraciones en
          producción. Personas quen se quieran involucrar en el ciclo completo
          de desarrollo de un producto: investigación, conceptualización,
          estrategia, análisis, programación, diseño, testing, infraestructura,
          analítica, observabilidad, etc, etc.
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
          horas o menos (estamos abiertos a medias jornadas, 4 días a la semana
          o similares).
        </p>

        <p>
          Respeto por las personas, sus individualidades y su derecho a vida
          privada fuera del horario laboral. Un equipo pequeño con vocación de
          ser diverso e inclusivo.
        </p>

        <h2>¿Quiénes somos?</h2>

        <p>
          Dersu es un servicio que está dando sus primeros pasos y donde está
          todo por hacer. La incertidumbre sobre cuál es la mejor forma de
          proveer a practicantes de actividades de montaña del mejor de los
          servicios es sólo comparable a la ilusión de hacerlo.
        </p>

        <p>
          El equipo fundador está compuesto (por ahora) por{' '}
          <Link href="https://instagram.com/fernando_errekalde">
            Fernando Errekalde
          </Link>{' '}
          (guía de montaña y producto),{' '}
          <Link href="https://twitter.com/borjadelgado">Borja Delgado</Link>{' '}
          (producto, diseño y operaciones) y{' '}
          <Link href="https://twitter.com/wadus">Juan Delgado</Link> (producto y
          tecnología).
        </p>

        <p>
          Si te interesa, quieres saber más o tienes alguna duda por favor no
          dudes en ponerte en contacto a través de{' '}
          <Link href="mailto:work@dersu.uz">work@dersu.uz</Link>.
        </p>

        <p>Gracias : )</p>
      </MarkdownContent>
    </DefaultLayout>
  )
}

export default WorkWithDersuPage

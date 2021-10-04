import Link from 'next/link'

import DefaultLayout from '@/layouts/DefaultLayout'
import MarkdownContent from '@/components/MarkdownContent'

export async function getStaticProps() {
  return {
    props: {
      locale: 'en',
      title: 'Work with Dersu',
      description:
        'We are looking for people that can help us with the first implementation of the service and tools',
    },
  }
}

const WorkWithDersuPage = props => {
  return (
    <DefaultLayout {...props}>
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
          We are looking for people that can help us with the first
          implementation of the service and tools. Currently Dersu has in early
          stages of development:
        </p>

        <ul>
          <li>A mission to help us stay focused.</li>
          <li>
            A value proposition that we would like to validate as soon as
            possible with real users.
          </li>
          <li>A functional definition of the service and its touch points.</li>
          <li>A brand and comms strategy.</li>
          <li>A mobile app for Android and iOS built in Flutter.</li>
          <li>
            A backend built in Express/Nest + Typescript to bring together
            different data sources for the mobile app.
          </li>
          <li>A CMS built with Strapi.</li>
          <li>
            A public website with commercial information and own content using
            NextJS.
          </li>
          <li>
            Google Cloud, Terraform and Github Actions for infrastructure.
          </li>
        </ul>

        <p>
          We are looking for people that can contribute in one or several of the
          areas above, both full time and as external collaborators.
        </p>

        <p>
          We prefer people more motivated by solving user problems than whatever
          their craft (design, development, etc). Pragmatic people with a
          preference for reducing uncertainty by releasing small incremental
          updates to their users. People willing to get involved in the whole
          lifecycle of a digital product: research, concepts, strategy,
          analysis, software development, testing, infrastructure, analytics,
          observability, etc.
        </p>

        <p>
          Previous experience certainly will be appreciated but we are also open
          to working with people relatively early in their careers (1 or 2
          years, depending on the profile).
        </p>

        <h2>What do we offer?</h2>

        <p>Remote work as long as there’s compatibility with GMT+1.</p>

        <p>
          An initial contract as a freelance, flexible schedule, focus on
          results and objectives calculated around a working week of 40 hours or
          less (we’re open to part time contracts, 4 day weeks or similar).
        </p>

        <p>
          Respect for people, their individualities and their right to a private
          life outside of work. A small team aiming to be diverse and inclusive.
        </p>

        <h2>Who are we?</h2>

        <p>
          Dersu is a service in its infancy, we have everything to do. The
          uncertainty around how to provide and care for people when up in the
          mountains is only comparable to our excitement around finding how to
          do it!
        </p>

        <p>
          The founding team comprises{' '}
          <Link href="https://instagram.com/fernando_errekalde">
            Fernando Errekalde
          </Link>{' '}
          (mountain guide and product),{' '}
          <Link href="https://twitter.com/borjadelgado">Borja Delgado</Link>{' '}
          (product, design and operations) and{' '}
          <Link href="https://twitter.com/wadus">Juan Delgado</Link> (product
          and technology).
        </p>

        <p>
          If you are interested, want to know more or have questions please do
          not hesitate to get in touch via{' '}
          <Link href="mailto:work@dersu.uz">work@dersu.uz</Link>.
        </p>

        <p>Thanks : )</p>
      </MarkdownContent>
    </DefaultLayout>
  )
}

WorkWithDersuPage.propTypes = {}

export default WorkWithDersuPage

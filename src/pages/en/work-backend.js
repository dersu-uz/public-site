import Link from 'next/link'

import DefaultLayout from '@/components/DefaultLayout'
import MarkdownContent from '@/components/MarkdownContent'

export const getStaticProps = () => {
  return {
    props: {
      locale: 'es',
      title: 'Work with Dersu',
      description:
        'We are looking for someone focused on backend and infrastructure work.',
    },
  }
}

function Backend() {
  return (
    <DefaultLayout>
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
        <p>
          We are looking for someone focused on backend and infrastructure work.
        </p>
        <p>Some of the expected functionality for Dersu backend services:</p>
        <ul>
          <li>
            Combine several heterogeneous data sources for weather, nivology,
            avalanche reports, etc and provide them as a coherent, single API to
            the mobile app.
          </li>
          <li>
            Monitor said data sources in order to provide real time support to
            on-going expeditions proactively warning of relevant changes.
          </li>
          <li>
            A CMS to both feed content to the public site (blog, specific
            location pages) and serve as an internal waypoint and route
            repository.
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
          frameworks we have a preference for Express/Nest + Typescript, Google
          Cloud + Terraform and Strapi as a CMS.
        </p>
        <h2>What do we offer?</h2>
        <p>Remote work as long as there’s compatibility with GMT+1.</p>
        <p>
          An initial freelance contract for ~€4.500/month, flexible schedule,
          focus on results and objectives calculated around a working week of 40
          hours or less (we’re open to part time contracts, 4 day weeks or
          similar).
        </p>
        <p>
          Respect for people, their individualities and their right to a private
          life outside of work. A small team aiming to be diverse and inclusive.
        </p>
        <p>
          If you are interested, want to know more or have any doubt please do
          not hesitate to reach out through{' '}
          <Link href="mailto:work@dersu.uz">work@dersu.uz</Link>.
        </p>
        <p>Thanks : )</p>
      </MarkdownContent>
    </DefaultLayout>
  )
}

export default Backend

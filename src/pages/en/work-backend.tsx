import { FC } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import DefaultLayout from '@/layouts/DefaultLayout'

import MarkdownContent from '@/components/MarkdownContent'
import MainContent from '@/components/MainContent'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      locale: 'en',
      title: 'Work with Dersu',
      description: 'We are looking for someone focused on backend.',
    },
  }
}

const Backend: FC = props => {
  return (
    <DefaultLayout {...props}>
      <MainContent>
        <MarkdownContent>
          <h2>What is Dersu?</h2>
          <p>
            Dersu is a service focused on helping people having a lasting,
            healthy relationship with the mountains. We want to create a set of
            tools to help with self-assessment, progressive improvement,
            methodology, decision making and real time support of expeditions in
            the mountains. More information in the general{' '}
            <Link href="/en/work-with-dersu">work with Dersu page</Link>.
          </p>
          <p>We are looking for someone focused on backend work.</p>
          <p>Some of the expected functionality for Dersu backend services:</p>
          <ul>
            <li>
              Combine several heterogeneous data sources for weather, nivology,
              etc. and provide them as a coherent, single API to the mobile app.
            </li>
            <li>
              Monitor said data sources in order to provide real time support to
              on-going expeditions proactively warning of relevant changes.
            </li>
            <li>
              A CMS to both feed content to the public site (blog, specific
              location pages) and the app.
            </li>
            <li>
              Management of user profiles including self-assesment and
              progression tools.
            </li>
            <li>Expedition management tools for mountain guides.</li>
            <li>
              Integration with 3rd party services such as Strava, Garmin,
              Apple&apos;s HealthKit, etc
            </li>
          </ul>
          <p>
            Even though there is flexibility when choosing the technical stack
            and frameworks our current services are built using NestJS +
            Typescript and Google Cloud + Terraform.
          </p>
          <h2>What do we offer?</h2>
          <p>Remote work as long as there is compatibility with GMT+1.</p>
          <p>
            An initial freelance contract for ~€4.500/month, flexible schedule,
            focus on results and objectives calculated around a working week of
            40 hours or less (we are open to part time contracts, 4 day weeks or
            similar).
          </p>
          <p>
            Respect for people, their individualities and their right to a
            private life outside of work. A small team aiming to be diverse and
            inclusive.
          </p>
          <p>
            If you are interested, want to know more or have any doubt please do
            not hesitate to reach out through{' '}
            <Link href="mailto:work@dersu.uz">work@dersu.uz</Link>.
          </p>
          <p>Thanks : )</p>
        </MarkdownContent>
      </MainContent>
    </DefaultLayout>
  )
}

export default Backend

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
      description:
        'We are looking for someone to help us with our Flutter app.',
    },
  }
}

const Flutter: FC = props => {
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
          <h2>What are we looking for?</h2>
          <p>We are looking for someone to help us with our Flutter app.</p>

          <p>
            The mobile app is the key to the relationship of our users with
            Dersu. From the mobile app our users can:
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
            <Link href="https://github.com/fluttercommunity/get_it">GetIt</Link>{' '}
            or <Link href="https://docs.hivedb.dev">Hive</Link>.
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

export default Flutter

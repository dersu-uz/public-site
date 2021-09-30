import DefaultLayout from '@/layouts/DefaultLayout'
import MarkdownContent from '@/components/MarkdownContent'

export const getStaticProps = () => {
  return {
    props: {
      locale: 'en',
      description: 'Linking people and mountains',
    },
  }
}

const HomePage = () => (
  <DefaultLayout>
    <MarkdownContent>
      <blockquote>
        <p>A link between people and mountains</p>
      </blockquote>
      <p>
        Dersu aims to become a link between people and mountains. This
        relationship can take many shapes and forms, but should always be built
        on top of fundamentals such as respect, security and sustainability.
      </p>
      <p>
        We understand the mountains as a means (one of many) to understand life
        and the journey through it. It is demanding and rewarding, it protects
        and threatens, it teaches us how to be alone and with company, respect,
        effort, comradeship. It also teaches us how big and how small human
        beings are.
      </p>
      <p>
        Every one has a different, personal relationship with the mountains that
        changes over time. Dersu aims to become a partner through that journey;
        supporting, discovering, asking, warning. So every one can find their
        own path.
      </p>
    </MarkdownContent>
  </DefaultLayout>
)

export default HomePage

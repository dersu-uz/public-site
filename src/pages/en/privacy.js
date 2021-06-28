import React from 'react'

import DefaultLayout from '@/components/DefaultLayout'
import IubendaContent from '@/components/IubendaContent'
import { useIubendaPrivacy } from '@/hooks/iubendaHooks'

export const getStaticProps = async () => {
  return {
    props: {
      lang: 'en',
      title: 'Privacy Policy',
      description: 'Privacy Policy of Dersu.uz',
    },
  }
}

function PrivacyPage() {
  const { content } = useIubendaPrivacy()
  return (
    <DefaultLayout>
      <IubendaContent content={content} />
    </DefaultLayout>
  )
}

export default PrivacyPage
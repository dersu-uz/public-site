import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { IUBENDA_API_URL } from '@/constants/settings'

import DefaultLayout from '@/components/DefaultLayout'
import IubendaContent from '@/components/IubendaContent'

export const getStaticProps = async () => {
  const privacyPolicyContent = (await axios.get(IUBENDA_API_URL)).data.content
  return {
    props: {
      lang: 'en',
      title: 'Privacy Policy',
      description: 'Privacy Policy of Dersu.uz',
      privacyPolicyContent,
    },
  }
}

function PrivacyPage({ privacyPolicyContent }) {
  return (
    <DefaultLayout>
      <IubendaContent content={privacyPolicyContent} />
    </DefaultLayout>
  )
}

PrivacyPage.propTypes = {
  privacyPolicyContent: PropTypes.string.isRequired,
}

export default PrivacyPage

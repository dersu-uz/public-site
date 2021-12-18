import { FC, useContext } from 'react'
import Fade from 'react-reveal/Fade'

import Wrapper from '@/components/Wrapper'
import MailchimpForm from '@/components/MailchimpForm'
import TranslationsContext from '@/contexts/TranslationsContext'

const SignupForBeta: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <>
      <div className="SignupForBeta bg-dersu-brown">
        <Wrapper>
          <div className="py-16 md:py-20 max-w-4xl mx-auto">
            <Fade bottom distance={`24px`}>
              <h2 className="text-dersu-blue text-dersu-lg mb-8 md:text-dersu-lg xl:text-dersu-xl md:w-10/12">
                {t.moduleSignupForBeta.title}
              </h2>
            </Fade>
            <MailchimpForm />
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default SignupForBeta

import { FC, useContext } from 'react'
import Fade from 'react-reveal/Fade'

import Wrapper from '@/components/Wrapper'
import MailchimpForm from '@/components/MailchimpForm'
import TranslationsContext from '@/contexts/TranslationsContext'
import { ENABLE_BETA_SIGNUP } from '@/constants/settings'

const Signup: FC = () => {
  const { t } = useContext(TranslationsContext)
  return (
    <div className="bg-dersu-brown">
      <Wrapper>
        <Fade bottom>
          <div className="pt-14 pb-3 max-w-[700px] mx-auto md:pt-24 md:pb-20">
            <h2 className="text-dersu-blue text-dersu-lg mb-8">
              {ENABLE_BETA_SIGNUP ? (
                <>{t.moduleSignup.signupForBeta}</>
              ) : (
                <>{t.moduleSignup.signupForNewsletter}</>
              )}
            </h2>
            <div className="max-w-lg">
              <MailchimpForm />
            </div>
          </div>
        </Fade>
      </Wrapper>
    </div>
  )
}

export default Signup

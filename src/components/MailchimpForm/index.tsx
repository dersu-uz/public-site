import { FC, useContext } from 'react'

import { MAILCHIMP_SUBSCRIBE_URL } from '@/constants/settings'

import TranslationsContext from '@/contexts/TranslationsContext'

import Button from '@/components/Button'
import InputText from '@/components/InputText'
import InputCheck from '@/components/InputCheck'
import InputSelect from '@/components/InputSelect'

const MailchimpForm: FC = () => {
  const { t, currentLocale } = useContext(TranslationsContext)

  return (
    <form action={MAILCHIMP_SUBSCRIBE_URL} method="post">
      <div className="mb-5">
        <InputText
          type="email"
          name="EMAIL"
          required={true}
          defaultValue=""
          placeholder={t.mailchimpForm.emailPlaceholder}
        />
      </div>

      <div className="mb-5">
        <InputSelect
          id="mce-OCCUPATION"
          name="OCCUPATION"
          labelText={t.mailchimpForm.occupationLabel}
          options={[
            {
              label: t.mailchimpForm.occupationOptionMountainGuide,
              value: t.mailchimpForm.occupationOptionMountainGuide,
            },
            {
              label: t.mailchimpForm.occupationOptionMedia,
              value: t.mailchimpForm.occupationOptionMedia,
            },
            {
              label: t.mailchimpForm.occupationOptionNotPro,
              value: t.mailchimpForm.occupationOptionNotPro,
            },
          ]}
        />
      </div>

      <div className="mb-8">
        <Button type="submit">{t.mailchimpForm.subscribeMe}</Button>
      </div>
      <div className="mb-5">
        <InputCheck
          id="gdpr_28962"
          name="gdpr[28962]"
          value="Y"
          required={true}
          labelText={
            <span className="text-dersu-blue font-sans font-semibold">
              {t.mailchimpForm.acceptThe}{' '}
              <a
                href={`/${currentLocale}/${t.common.privacySlug}/`}
                rel="noreferrer"
                target="_blank"
                className="underline"
              >
                {t.mailchimpForm.privacyPolicy}
              </a>
            </span>
          }
        />
      </div>
      <div
        style={{
          position: 'absolute',
          left: '-5000px',
        }}
      >
        <input
          type="text"
          name="b_09aa1f83820733bb99bd70605_85e6d8b7c4"
          tabIndex={-1}
          defaultValue=""
        />
      </div>
    </form>
  )
}

export default MailchimpForm

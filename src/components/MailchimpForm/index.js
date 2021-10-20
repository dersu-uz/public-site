import { useContext } from 'react'

import { MAILCHIMP_SUBSCRIBE_URL } from '@/constants/settings'

import TranslationsContext from '@/contexts/TranslationsContext'

import Button from '@/components/Button'

export const MailchimpForm = () => {
  const { t, currentLocale } = useContext(TranslationsContext)

  return (
    <form
      action={MAILCHIMP_SUBSCRIBE_URL}
      method="post"
      className="w-full md:w-6/12 md:max-w-[500px]"
    >
      <div className="flex gap-5">
        <input
          type="email"
          name="EMAIL"
          placeholder="Email"
          required={true}
          defaultValue=""
          className="text-dersu-sm p-2 flex-grow"
        />
        <Button type="submit">Me apunto</Button>
      </div>
      <p className="mt-3 flex">
        <input
          className="mr-2 mt-1"
          type="checkbox"
          id="gdpr_28962"
          name="gdpr[28962]"
          value="Y"
          required={true}
        />
        <label htmlFor="accept-privacy" className="flex-grow">
          Para poder enviarte el newsletter has de aceptar nuestra{' '}
          <a
            href={`/${currentLocale}/${t.common.privacySlug}`}
            rel="noreferrer"
            target="_blank"
            className="underline"
          >
            política de privacidad
          </a>
        </label>
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
      </p>
    </form>
  )
}

export default MailchimpForm

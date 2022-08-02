import { COOKIES_PREFERRED_LOCALE_DAYS } from '@/constants/settings';
import PrivacyContext from '@/contexts/PrivacyContext';
import { LocaleShortCode } from '@/services/i18nService';
import { useRouter } from 'next/router';
import { useCallback, useContext } from 'react';

type UsePreferredLocale = {
  changeLocale: (newLocale: LocaleShortCode) => void;
  locale: LocaleShortCode;
};

const usePreferredLocale = (): UsePreferredLocale => {
  const { push, asPath, locale } = useRouter();
  const { acceptCookies, useHonestCookie } = useContext(PrivacyContext);
  const [preferredLocale, updatePreferredLocale] = useHonestCookie('NEXT_LOCALE');

  const changeLocale = useCallback(
    (newLocale: LocaleShortCode) => {
      if (acceptCookies && preferredLocale !== newLocale) {
        updatePreferredLocale(newLocale, {
          expires: COOKIES_PREFERRED_LOCALE_DAYS,
        });
      }

      push(asPath, undefined, { locale: newLocale });
    },
    [acceptCookies, preferredLocale, updatePreferredLocale, push, asPath]
  );

  return {
    changeLocale,
    locale: locale as LocaleShortCode,
  };
};

export default usePreferredLocale;

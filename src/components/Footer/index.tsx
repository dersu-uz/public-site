import { FC, useContext } from 'react'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'

import TranslationsContext from '@/contexts/TranslationsContext'

import Wrapper from '@/components/Wrapper'

import DersuLogoWithText from '../../styles/assets/dersu-logo-with-text.svg'

const Footer: FC = () => {
  const { t, currentLocale } = useContext(TranslationsContext)
  const plausible = usePlausible()

  return (
    <footer className="Footer">
      <Wrapper limitedWidth>
        <div className="font-sans text-sm border-t border-dersu-brown border-opacity-50 pb-4 mt-10 md:pb-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="py-10 md:order-2 flex flex-wrap gap-10 md:mr-10">
              <div className='grid grid-cols-2 gap-9 md:gap-11'>
                <ul className='w-full md:w-auto font-bold leading-9'>
                  <li>
                    <Link href={`/${currentLocale}/blog`}>Blog</Link>
                  </li>
                  <li>
                    <Link href="http://eepurl.com/hI63hX">
                      <a
                        target="_blank"
                        onClick={() =>
                          plausible('CTA Newsletter', {
                            props: { method: 'Footer' },
                          })
                        }
                      >
                        Newsletter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${currentLocale}/${t.partners.href}`}>
                      <a>{t.headerMenu.partners}</a>
                    </Link>
                  </li>

                  {(currentLocale === 'en' || currentLocale === 'es') && (
                    <li>
                      <Link
                        href={`/${currentLocale}/${t.common.workWithDersuSlug}`}
                      >
                        {t.common.workWithDersu}
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link href={`/${currentLocale}/${t.common.privacySlug}`}>
                      {t.common.privacy}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${currentLocale}/${t.common.termsSlug}`}>
                      {t.common.terms}
                    </Link>
                  </li>
                </ul>

                <ul className='w-2/3 md:w-auto font-bold gap-9 md:gap-11 leading-9'>
                  <li>
                    <Link href="https://www.instagram.com/dersu_uz/">
                      <a
                        target="_blank"
                        onClick={() =>
                          plausible('CTA Instagram', {
                            props: { method: 'Footer' },
                          })
                        }
                      >
                        Instagram
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/DersuMendia/">
                      <a
                        target="_blank"
                        onClick={() =>
                          plausible('CTA Facebook', {
                            props: { method: 'Footer' },
                          })
                        }
                      >
                        Facebook
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/dersu">
                      <a
                        target="_blank"
                        onClick={() =>
                          plausible('CTA LinkedIn', {
                            props: { method: 'Footer' },
                          })
                        }
                      >
                        LinkedIn
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/dersu_uz">
                      <a
                        target="_blank"
                        onClick={() =>
                          plausible('CTA Twitter', {
                            props: { method: 'Footer' },
                          })
                        }
                      >
                        Twitter
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="w-full md:w-auto flex flex-col gap-4">
                <p className="mt-2">{t.common.downloadTheApp}</p>
                <p className="flex md:flex-col gap-3">
                  <a
                    href="https://apps.apple.com/us/app/dersu/id1596941542"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={t.common.downloadAppApple}
                    className="block"
                  >
                    <img
                      src={`/images/common/icon-app-store-dark.${currentLocale}.svg`}
                      alt={t.common.downloadAppApple}
                      className="h-12 md:h-10 rounded-[10px] md:rounded-[6px]"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=uz.dersu"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={t.common.downloadAppGoogle}
                    className="block"
                  >
                    <img
                      src={`/images/common/icon-play-store-dark.${currentLocale}.svg`}
                      alt={t.common.downloadAppGoogle}
                      className="h-12 md:h-10 rounded-[10px] md:rounded-[6px]"
                      loading="lazy"
                    />
                  </a>
                </p>
              </div>
            </div>
            <div className="py-10 md:order-1 w-4/5 md:w-5/12 md:py-28 max-w-2xl">
              <DersuLogoWithText width="100%" />
            </div>
          </div>
          <div className="text-dersu-light-gray leading-5 md:flex">
            <p className="md:order-1">
              {t.common.allRightsReserved}. Dersu ® {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer

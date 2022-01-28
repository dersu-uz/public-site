import { FC, useContext } from 'react'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'
import Fade from 'react-reveal/Fade'

import TranslationsContext from '@/contexts/TranslationsContext'

import Wrapper from '@/components/Wrapper'

import DersuLogoWithText from '../../styles/assets/dersu-logo-with-text.svg'

const Footer: FC = () => {
  const { t, currentLocale } = useContext(TranslationsContext)
  const plausible = usePlausible()

  return (
    <footer className="Footer">
      <Wrapper>
        <div className="font-sans text-sm border-t border-dersu-brown border-opacity-50 pb-4 mt-10 md:pb-10">
          <div className="md:flex md:items-center">
            <div className="py-10 md:order-2 md:mx-auto">
              <Fade bottom>
                <ul className="w-2/3 md:w-auto font-bold columns-2 gap-9 md:gap-11 leading-9">
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
                    <Link
                      href={`/${currentLocale}/${t.common.workWithDersuSlug}`}
                    >
                      {t.common.workWithDersu}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${currentLocale}/${t.common.privacySlug}`}>
                      {t.common.privacy}
                    </Link>
                  </li>

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
              </Fade>
            </div>
            <div className="py-10 md:order-1 w-4/5 md:w-1/2 md:py-28 max-w-2xl">
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

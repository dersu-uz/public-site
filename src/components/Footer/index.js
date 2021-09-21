import Link from 'next/link'
import { useContext } from 'react'
import Fade from 'react-reveal/Fade'

import TranslationsContext from '@/contexts/TranslationsContext'

import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'

import DersuLogoWithText from '../../styles/assets/dersu-logo-with-text.svg'

const Footer = () => {
  const { t, currentLocale } = useContext(TranslationsContext)

  return (
    <footer className="Footer">
      <Container>
        <Wrapper>
          <div className="font-sans text-sm border-t border-dersu-brown border-opacity-50 pb-4 mt-10 md:pb-10">
            <Fade bottom>
              <div className="md:flex md:items-center">
                <div className="w-2/3 py-10 md:order-2 md:w-2/12 md:mx-auto">
                  <ul className="font-bold col-count-2 leading-9">
                    <li>
                      <Link href="https://www.instagram.com/dersu_uz/">
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/company/dersu">
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/dersu_uz">Twitter</Link>
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
                  </ul>
                </div>
                <div className="py-10 md:order-1 md:w-1/2 md:py-28">
                  <DersuLogoWithText width="100%" />
                </div>
              </div>
              <div className="text-dersu-light-gray leading-5 md:flex">
                <p className="md:order-1">
                  Todos los derechos reservados. Dersu ® 2021
                </p>
              </div>
            </Fade>
          </div>
        </Wrapper>
      </Container>
    </footer>
  )
}

export default Footer

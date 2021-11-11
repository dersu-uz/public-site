/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

import Wrapper from '@/components/Wrapper'
import VerticalDivision from '@/components/VerticalDivision'

const ModuleIntro = ({ tagline }) => {
  return (
    <div className="ModuleIntro">
      <Wrapper>
        <div>
          <Fade bottom distance={`24px`}>
            <h2 className="text-dersu-lg md:text-dersu-4xl text-center py-32 md:py-48 xl:py-32 2xl:py-20 2xl:max-w-5xl 2xl:m-auto">
              {tagline}
            </h2>
          </Fade>
          <Fade bottom cascade>
            <ul className="flex flex-col md:flex-row gap-5 2xl:w-10/12 2xl:mx-auto">
              <li className="w-2/4 md:w-3/12">
                <picture className="w-full">
                  <source type="image/webp" srcSet="/images/intro/01.webp" />
                  <source type="image/jpeg" srcSet="/images/intro/01.jpg" />
                  <img
                    src="/images/intro/01.jpg"
                    alt="Intro 1"
                    className="w-full"
                  />
                </picture>
              </li>
              <li className="w-full md:w-6/12">
                <picture className="w-full">
                  <source type="image/webp" srcSet="/images/intro/02.webp" />
                  <source type="image/jpeg" srcSet="/images/intro/02.jpg" />
                  <img
                    src="/images/intro/02.jpg"
                    alt="Intro 2"
                    className="w-full"
                  />
                </picture>
              </li>
              <li className="w-3/4 md:w-3/12 self-end md:self-auto md:pt-20">
                <picture className="w-full">
                  <source type="image/webp" srcSet="/images/intro/03.webp" />
                  <source type="image/jpeg" srcSet="/images/intro/03.jpg" />
                  <img
                    src="/images/intro/03.jpg"
                    alt="Intro 3"
                    className="w-full"
                  />
                </picture>
              </li>
            </ul>
          </Fade>
          <VerticalDivision />
        </div>
      </Wrapper>
    </div>
  )
}

ModuleIntro.propTypes = {
  tagline: PropTypes.string,
}

export default ModuleIntro

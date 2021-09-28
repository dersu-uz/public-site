/* eslint-disable @next/next/no-img-element */
import Fade from 'react-reveal/Fade'

import Wrapper from '@/components/Wrapper'

const ModuleIntro = () => {
  return (
    <div className="ModuleIntro">
      <Wrapper>
        <div>
          <Fade bottom distance={`24px`}>
            <h2 className="text-dersu-lg md:text-dersu-3xl text-center py-32 md:py-48 xl:py-32 2xl:py-20 2xl:max-w-5xl 2xl:m-auto">
              Conoce, explora y crece
            </h2>
          </Fade>
          <Fade bottom cascade>
            <ul className="flex flex-col md:flex-row gap-5 2xl:w-10/12 2xl:mx-auto">
              <li className="w-2/4 md:w-3/12">
                <picture className="w-full">
                  <source type="image/webp" srcSet="/images/intro/01.webp" />
                  <source type="image/jpeg" srcSet="/images/intro/01.jpg" />
                  <img src="/images/intro/01.jpg" alt="Intro 1" />
                </picture>
              </li>
              <li className="w-full md:w-6/12">
                <picture className="w-full">
                  <source type="image/webp" srcSet="/images/intro/02.webp" />
                  <source type="image/jpeg" srcSet="/images/intro/02.jpg" />
                  <img src="/images/intro/02.jpg" alt="Intro 2" />
                </picture>
              </li>
              <li className="w-3/4 md:w-3/12 self-end md:self-auto md:pt-20">
                <picture className="w-full">
                  <source type="image/webp" srcSet="/images/intro/03.webp" />
                  <source type="image/jpeg" srcSet="/images/intro/03.jpg" />
                  <img src="/images/intro/03.jpg" alt="Intro 3" />
                </picture>
              </li>
            </ul>
          </Fade>
          <div className="text-center py-14">
            <span className="inline-block w-0.5 h-32 from-dersu-black to-transparent bg-gradient-to-b"></span>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default ModuleIntro

/* eslint-disable @next/next/no-img-element */
import Fade from 'react-reveal/Fade'
import Container from '@/components/Container'
import Wrapper from '../Wrapper'

const ModuleIntro = () => {
  return (
    <div className="ModuleIntro">
      <Container>
        <Wrapper>
          <div>
            <Fade bottom distance={`24px`}>
              <h2 className="text-dersu-lg md:text-dersu-2xl text-center py-32 md:py-48">
                Dersu te ayuda a disfrutar de la montaña, aprendiendo a tu ritmo
              </h2>
            </Fade>
            <Fade bottom cascade>
              <ul className="flex flex-col md:flex-row gap-5">
                <li className="w-2/4 md:w-3/12">
                  <img className="w-full" src="/images/intro/01.jpg" />
                </li>
                <li className="w-full md:w-6/12">
                  <img className="w-full" src="/images/intro/02.jpg" />
                </li>
                <li className="w-3/4 md:w-3/12 self-end md:self-auto md:pt-20">
                  <img className="w-full" src="/images/intro/03.jpg" />
                </li>
              </ul>
            </Fade>
            <div className="text-center py-14">
              <span className="inline-block w-0.5 h-32 from-dersu-black to-transparent bg-gradient-to-b"></span>
            </div>
          </div>
        </Wrapper>
      </Container>
    </div>
  )
}

export default ModuleIntro

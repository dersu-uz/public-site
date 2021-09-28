import Fade from 'react-reveal/Fade'

import Wrapper from '@/components/Wrapper'
import { usePlausible } from 'next-plausible'

const ModuleBetaAnnouncement = () => {
  const plausible = usePlausible()

  return (
    <>
      <div className="ModuleBetaAnnouncement bg-dersu-cream">
        <Wrapper>
          <div className="py-16 md:py-20 lg:py-36">
            <Fade bottom distance={`24px`}>
              <h2 className="text-dersu-lg mb-10 md:mb-16 md:text-dersu-xl lg:text-dersu-2xl xl:text-dersu-3xl md:w-9/12">
                Nuestro plan es sacar una primera versión de prueba de la App en
                diciembre, a la que iremos dando acceso a la gente poco a poco,
                por invitación.
              </h2>
              <p className="text-dersu-sm md:text-dersu-md xl:text-dersu-lg font-light md:w-8/12">
                Si quieres apuntarte a la beta y suscribirte a nuestra
                newsletter, déjanos{' '}
                <a
                  href="http://eepurl.com/hI63hX"
                  target="_blank"
                  rel="noreferrer"
                  className="underline font-normal cursor-pointer"
                  onClick={() =>
                    plausible('CTA Newsletter', {
                      props: { method: 'Home' },
                    })
                  }
                >
                  aquí
                </a>{' '}
                tu email y te mantendremos al tanto.
              </p>
            </Fade>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

ModuleBetaAnnouncement.propTypes = {}

export default ModuleBetaAnnouncement

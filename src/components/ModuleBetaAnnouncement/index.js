import Fade from 'react-reveal/Fade'

import Wrapper from '@/components/Wrapper'
import MailchimpForm from '@/components/MailchimpForm'

const ModuleBetaAnnouncement = () => {
  return (
    <>
      <div className="ModuleBetaAnnouncement bg-dersu-cream">
        <Wrapper>
          <div className="py-16 md:py-20 lg:py-36">
            <Fade bottom distance={`24px`}>
              <h2 className="text-dersu-lg mb-6 md:mb-8 md:text-dersu-xl lg:text-dersu-3xl xl:text-dersu-4xl md:w-9/12">
                Nuestro plan es sacar una primera versión de prueba de la App en
                diciembre, a la que iremos dando acceso a la gente poco a poco,
                por invitación.
              </h2>
              <p className="text-dersu-sm mb-6 md:mb-8 md:text-dersu-md xl:text-dersu-lg font-light md:w-8/12">
                Si quieres apuntarte a la beta y suscribirte a nuestra
                newsletter, déjanos aquí tu email y te mantendremos al tanto.
              </p>
            </Fade>
            <MailchimpForm />
          </div>
        </Wrapper>
      </div>
    </>
  )
}

ModuleBetaAnnouncement.propTypes = {}

export default ModuleBetaAnnouncement

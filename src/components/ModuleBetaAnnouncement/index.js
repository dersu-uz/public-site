import Container from '../Container'
import Fade from 'react-reveal/Fade'

const ModuleBetaAnnouncement = () => (
  <div className="ModuleBetaAnnouncement bg-dersu-cream">
    <Container>
      <div className="py-16 md:py-36">
        <Fade bottom distance={`24px`}>
          <h2 className="text-dersu-lg mb-10 md:mb-16 md:text-dersu-2xl md:w-9/12">
            Nuestro plan es sacar una primera versión de prueba de la App en
            diciembre de este año (2021); a la que iremos dando acceso a la
            gente poco a poco, por invitación.
          </h2>
          <p className="text-dersu-sm md:text-dersu-lg font-light md:w-8/12">
            Si quieres apuntarte a la beta y suscribirte a nuestra newsletter,
            déjanos{' '}
            <a href="#" className="underline font-normal">
              aquí
            </a>{' '}
            tu email y te mantendremos al tanto.
          </p>
        </Fade>
      </div>
    </Container>
  </div>
)

ModuleBetaAnnouncement.propTypes = {}

export default ModuleBetaAnnouncement

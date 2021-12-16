import Picture from '@/components/Picture'
import Wrapper from '../Wrapper'

const HomeHero = () => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute w-full h-full">
        <Picture
          className="flex-grow object-cover"
          alt="background"
          imageName="hero-01"
          path="/images/home/hero"
          imageType="jpg"
          webpEnabled
        />
      </div>

      <div className="absolute w-full h-full">
        <Wrapper>
          <h1 className="text-dersu-4xl text-dersu-white">
            Dersu conecta a las personas con las montañas.
          </h1>
          <p className="text-dersu-md font-semibold text-dersu-blue">
            Apúntate a la beta y prueba la primera versión de Dersu.
          </p>
        </Wrapper>
      </div>
    </div>
  )
}

export default HomeHero

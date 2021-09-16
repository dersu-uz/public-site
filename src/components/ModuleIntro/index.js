import Container from '@/components/Container'

const ModuleIntro = () => {
  return (
    <div className="ModuleIntro">
      <Container>
        <h2 className="text-dersu-lg md:text-dersu-xl">
          Dersu te ayuda a disfrutar de la montaña, aprendiendo a tu ritmo
        </h2>
        <div className="md:flex">
          <div className="">
            <img src="/images/intro/01.jpg" />
          </div>
          <div className="">
            <img src="/images/intro/02.jpg" />
          </div>
          <div className="">
            <img src="/images/intro/03.jpg" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ModuleIntro

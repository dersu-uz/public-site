import Container from '@/components/Container'

const ModuleIntro = () => {
  return (
    <div className="ModuleIntro">
      <Container>
        <div className="py-5">
          <h2 className="text-dersu-lg md:text-dersu-xl text-center py-32 md:py-48">
            Dersu te ayuda a disfrutar de la montaña, aprendiendo a tu ritmo
          </h2>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="">
              <img src="/images/intro/01.jpg" />
            </div>
            <div className="">
              <img src="/images/intro/02.jpg" />
            </div>
            <div className="self-end md:self-auto md:pt-20">
              <img src="/images/intro/03.jpg" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ModuleIntro

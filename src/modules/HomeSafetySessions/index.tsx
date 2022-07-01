import { FC } from 'react'
import Link from 'next/link'

import Picture from '@/components/Picture'
import Wrapper from '@/components/Wrapper'

const HomeSafetySessions: FC = () => {
  return (
    <div className="relative h-[750px] flex justify-center items-center">
      <header className="text-dersu-white">
        <div className="absolute top-0 left-0 w-full z-10">
          <Wrapper>
            <div className="py-10 text-right">
              <p className="font-sans text-sm font-semibold">#CAMINAYAPRENDE</p>
            </div>
          </Wrapper>
        </div>
      </header>

      {/* Hero background (desktop) */}
      <div className="absolute inset-0 w-full h-full">
        <Picture
          path="/images/modules/home-safety-sessions"
          imageName="cover"
          imageType="jpg"
          alt="Jornadas de seguridad en montaña"
          imgClassName="w-full h-full object-cover"
        />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />

      {/* Hero content */}
      <div className="relative px-10 text-center text-white">
        <p className="font-sans text-dersu-xs md:text-2xl mb-4">
          Julio/Agosto 2022
        </p>
        <h1 className="text-dersu-lg mb-12  md:text-dersu-4xl text-center max-w-5xl mx-auto">
          Jornadas gratuitas para la seguridad en montaña
        </h1>
        <Link href="/es/jornadas-seguridad">
          <a
            href=""
            className="font-sans text-dersu-xs bg-dersu-blue text-dersu-brown font-semibold py-4 px-16 rounded-md whitespace-nowrap hover:bg-dersu-cream"
          >
            Más info
          </a>
        </Link>
      </div>
    </div>
  )
}

export default HomeSafetySessions

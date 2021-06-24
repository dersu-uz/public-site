import React from 'react'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'

const Footer = () => {
  return (
    <footer className="Footer">
      <Wrapper>
        <p>Equipo Dersu</p>
        <ul className="Footer__social-links">
          <li>
            <Link href="/">Dersu.uz</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/dersu">LinkedIn</Link>
          </li>
          <li>
            <Link href="https://twitter.com/dersu_uz">Twitter</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/dersu_uz/">Instagram</Link>
          </li>
          <li>
            <Link href="/es/trabaja-con-dersu">Trabaja con Dersu</Link>
          </li>
          <li>
            <Link href="/es/privacidad">Privacidad</Link>
          </li>
        </ul>
      </Wrapper>
    </footer>
  )
}

export default Footer

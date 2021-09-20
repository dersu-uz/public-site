import PropTypes from 'prop-types'

import Header from '@/components/Header'
import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'
import Footer from '@/components/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Wrapper>{children}</Wrapper>
        </Container>
      </main>
      <Footer />
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
}

export default DefaultLayout

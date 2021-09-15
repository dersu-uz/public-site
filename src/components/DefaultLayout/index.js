import PropTypes from 'prop-types'

import Header from '@/components/Header'
import Container from '@/components/Container'
import Footer from '@/components/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
}

export default DefaultLayout

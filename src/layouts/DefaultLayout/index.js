import PropTypes from 'prop-types'

import Header from '@/components/Header'
import Wrapper from '@/components/Wrapper'
import Footer from '@/components/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Wrapper>{children}</Wrapper>
      </main>
      <Footer />
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
}

export default DefaultLayout

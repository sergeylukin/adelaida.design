/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from "prop-types"
import { Container } from 'theme-ui'

import Link from './link'

const Layout = ({ children }) => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}>
      <main
        sx={{
          zIndex: 1,
          display: 'flex',
          flex: 1,
        }}>{children}</main>
      <footer
        sx={{
          fontSize: 1,
          position: 'fixed',
          left: 0,
          bottom: [2, 3, 4],
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <p><Link to="https://adelaida.design">adelaida.design</Link></p>
        <p sx={{
          ml: 2
        }}>{new Date().getFullYear()}</p>
      </footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from "prop-types"
import { Container } from 'theme-ui'

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
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import PropTypes from "prop-types"

import { Container } from 'theme-ui'

const Layout = ({ children }) => {
  return (
    <Container sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}>
      <main
        sx={{
          zIndex: 1,
        }}>{children}</main>
      <footer
        sx={{
          position: 'absolute',
          bottom: 2,
          width: '100%',
          textAlign: 'center',
        }}>
        <a href="https://adelaida.design">adelaida.design</a>
        {` `}
        {new Date().getFullYear()}
      </footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

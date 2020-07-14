/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Logo from "../components/logo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      sx={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div
        sx={{
          width: '60%',
          maxWidth: '300px',
        }}>
        <Logo />
      </div>
    </div>
    <Navigation />
  </Layout>
)

export default IndexPage

/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"

const IndexPage = () => (
  <Layout>
    <SEO title="Works" />
    <Navigation />
  </Layout>
)

export default IndexPage

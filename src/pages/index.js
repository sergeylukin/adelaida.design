/** @jsx jsx */
import { jsx } from 'theme-ui'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Logo from "../components/logo"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Adelaida - Graphic Designer" />
    <div
      sx={{
        position: 'fixed',
        left: 0,
        bottom: [2, 3, 4],
        width: '100%',
        textAlign: 'center',
      }}>
      <Footer />
    </div>
    <div
      sx={{
        position: 'fixed',
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div
        sx={{
          width: '60%',
          maxWidth: '300px',
        }}>
        <Logo animation />
      </div>
    </div>
    <Navigation />
  </Layout>
)

export default IndexPage

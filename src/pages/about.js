/** @jsx jsx */
import { jsx } from 'theme-ui'

import Logo from "../components/logo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import avatar from "../images/avatar.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}>
      <div
        sx={{
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div
          sx={{
            width: '50%',
            maxWidth: '100px',
          }}>
          <Logo />
        </div>
      </div>
      <div
        sx={{
          mt: 3,
          display: 'flex',
          flexDirection: ['column', null, 'row'],
          justifyContent: 'center',
          textAlign: ['center', null, 'left'],
          px: [4, 2, 1],
          mb: 5,
        }}>
        <p sx={{ pl: [null, null, 5], fontSize: 5, fontWeight: 100 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div sx={{ mx: [null, null, 5], mt: [null, null, 6] }}>
          <img src={avatar} />
        </div>
        <p sx={{ pr: [null, null, 5], fontSize: 5, fontWeight: 100 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    <Navigation selected="about" />
  </Layout>
)

export default IndexPage

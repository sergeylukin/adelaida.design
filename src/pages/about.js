/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import Logo from "../components/logo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Link from "../components/link"
import avatar from "../images/avatar.jpg"

const showUp = keyframes`
  0%  { opacity: 0; }
  100%    { opacity: 1; }
`;

const ShowUp = styled.nav`
  animation: ${showUp} 1s ease-in;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <ShowUp
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
          <Link to="/"><Logo /></Link>
        </div>
      </div>
      <div
        sx={{
          mt: 3,
          display: ['flex', null, 'grid'],
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)',
          flexDirection: ['column', null, 'row'],
          justifyContent: 'center',
          textAlign: ['center', null, 'left'],
          px: [4, 2, 1],
          mb: 5,
        }}>
        <p sx={{ pl: [null, null, 5], fontSize: 5, fontWeight: 100 }}>
          <p>{"Hi! :)"}</p>
          <p>{"I'm Alina, a passionate graphic designer with an eye for colors from Tel Aviv"}</p>
          <p>{"I'm  always looking for appropriate design language"}</p>
          <p>{"Speaking fluent Figma & Sketch"}</p>
        </p>
        <div sx={{ mx: [null, null, 5], mt: [null, null, 6], textAlign: 'center' }}>
          <img
            sx={{
              maxWidth: ['200px', null, '150px'],
              filter: 'grayscale(100%)',
              border: '1px solid white',
              borderRadius: '50%'
            }}
            src={avatar} />
        </div>
        <p sx={{ pr: [null, null, 5], fontSize: 5, fontWeight: 100 }}>
        </p>
      </div>
    </ShowUp>
    <Navigation selected="about" />
  </Layout>
)

export default IndexPage

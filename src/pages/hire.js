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
    <SEO title="Hire me" />
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
          display: ['flex', null, null],
          flexDirection: ['column', null, 'row'],
          justifyContent: 'center',
          textAlign: ['center', null, 'left'],
          px: [4, 2, 1],
          mb: 5,
        }}>
        <p sx={{ pl: [null, null, 5], fontSize: 5, fontWeight: 100 }}>
          <p>{"Let's work together! :)"}</p>
          <p>
            {"Have a one-time project? - order "}
            <Link to="https://www.fiverr.com/adelaida_design" sx={{ textDecoration: 'underline' }}>{"my services on Fiverr!"}</Link>
          </p>
          <p>{"Looking for a full-time designer? Great, I'm looking for my dream job :)"}</p>
          <p><Link to="/cv.pdf" sx={{ textDecoration: 'underline' }}>{"Check out my CV"}</Link></p>
          <p>{"Whether you have a one-time project or a full-time position, I'd be glad to meet."}</p>
          <p>{"Feel free to contact me via "}<a href="mailto:contact@adelaida.design?subject=Job%20offer" sx={{textDecoration: 'underline',color: 'white'}}>contact@adelaida.design</a></p>
        </p>
        <div sx={{ mx: [null, null, 5], mt: [null, null, 5], textAlign: 'center' }}>
          <img
            sx={{
              maxWidth: ['100px', null, '150px'],
              filter: 'grayscale(100%)',
              border: '1px solid white',
              borderRadius: '50%'
            }}
            src={avatar} />
        </div>
      </div>
    </ShowUp>
    <Navigation selected="hire" />
  </Layout>
)

export default IndexPage

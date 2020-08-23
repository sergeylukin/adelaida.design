/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Link from "../components/link"

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
    <ShowUp>
      <div sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}>
      <div 
        sx={{
          mt: 3,
          display: ['flex', null, null],
          flexDirection: ['column', null, 'row'],
          justifyContent: 'center',
          textAlign: ['center', null, 'left'],
          mb: 5,
        }}>
          <p sx={{ pl: [null, null, 5], fontSize: 5, fontWeight: 100 }}>
            <p>{"Let's work together! :)"}</p>
            <p>
              {"Have a one-time project? - order "}
              <a href="https://www.fiverr.com/adelaida_design" sx={{textDecoration: 'underline', color: 'primary'}}>
                {"my services on Fiverr!"}
              </a>
            </p>
            <p>{"Looking for a full-time designer? Great, I'm looking for my dream job :)"}</p>
            <p><Link to="/cv.pdf" sx={{ textDecoration: 'underline', color: 'primary' }}>{"Check out my CV"}</Link></p>
            <p>{"Whether you have a one-time project or a full-time position, I'd be glad to meet."}</p>
            <p>{"Feel free to contact me via "}<a href="mailto:contact@adelaida.design?subject=Job%20offer" sx={{textDecoration: 'underline',color: 'primary'}}>contact@adelaida.design</a></p>
          </p>
        </div>
      </div>
    </ShowUp>
    <Navigation selected="hire" />
  </Layout>
)

export default IndexPage

/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Link from "../components/link"
import avatar from "../images/avatar.jpg"
import { SocialLinks, SocialLink } from '../components/sociallinks'

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
    <ShowUp sx={{
        display: 'flex',
        alignItems: 'center',
      minHeight: '100vh',
    }}>
      <div sx={{
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
          <p sx={{ order: [2, null, 1], pl: [null, null, 5], fontSize: 5, fontWeight: 100, lineHeight: 1.5, }}>
            <p>{"Hello! I'm Alina, a mother for my lovely son and a passionate graphic designer with an eye for colors and simplicity from Tel Aviv - nice to meet you! :)"}</p>
            <p>{"I'm  always looking for appropriate design language"}</p>
            <p>{"Speaking fluent Figma & Sketch"}</p>
            <p>{"Feel free to say hi via "}<a href="mailto:contact@adelaida.design?subject=Hi!" sx={{textDecoration: 'underline', color: 'primary'}}>contact@adelaida.design</a></p>
            <p><Link to="/cv.pdf" sx={{ textDecoration: 'underline', color: 'primary' }}>{"Download my CV"}</Link></p>
          </p>
          <div sx={{ order: [1, null, 2], mx: [null, null, 5], mt: 5, textAlign: 'center' }}>
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
        <div
          sx={{
            display: 'grid',
            flexDirection: 'column',
            placeItems: 'center',
            pt: [2, 5, null],
            pb: 4,
          }}>
          <SocialLinks>
            <SocialLink><a href="https://instagram.com/adelaida_design" sx={{color: 'primary'}}>Instagram</a></SocialLink>
            <SocialLink><a href="https://twitter.com/adelaida_design" sx={{color: 'primary'}}>Twitter</a></SocialLink>
            <SocialLink><a href="https://www.behance.net/adelaida_design" sx={{color: 'primary'}}>Behance</a></SocialLink>
            <SocialLink><a href="https://dribbble.com/adelaida_design" sx={{color: 'primary'}}>Dribbble</a></SocialLink>
          </SocialLinks>
        </div>
      </div>
    </ShowUp>
    <Navigation selected="about" />
  </Layout>
)

export default IndexPage

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
      <div sx={{ mt: 5, textAlign: 'center' }}>
        <img
          sx={{
            maxWidth: ['100px', null, '150px'],
            filter: 'grayscale(100%)',
            border: '1px solid white',
            borderRadius: '50%'
          }}
          src={avatar} />
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', null, 'row'],
          justifyContent: 'center',
          textAlign: ['center', null, 'left'],
          px: [4, 2, 4],
          mb: 5,
        }}>
        <SocialLinks
          sx={{
            pt: [null, null, 5],
            order: [2, null, 1],
          }}>
          <SocialLink><a href="https://instagram.com/adelaida_design" sx={{color: 'white'}}>Instagram</a></SocialLink>
          <SocialLink
            sx={{
              mt: [2, null, 4]
            }}><a href="https://twitter.com/adelaida_design" sx={{color: 'white'}}>Twitter</a></SocialLink>
        </SocialLinks>
        <p sx={{ px: [null, null, 6], order: [1, null, 2], fontSize: 5, fontWeight: 100 }}>
          <p>{"Hello! I'm Alina, a mother for my lovely son and a passionate graphic designer with an eye for colors and simplicity from Tel Aviv - nice to meet you! :)"}</p>
          <p>{"I'm  always looking for appropriate design language"}</p>
          <p>{"Speaking fluent Figma & Sketch"}</p>
          <p>{"Feel free to say hi via "}<a href="mailto:contact@adelaida.design?subject=Hi!" sx={{textDecoration: 'underline',color: 'white'}}>contact@adelaida.design</a></p>
          <p><Link to="/cv.pdf" sx={{ textDecoration: 'underline' }}>{"Download my CV"}</Link></p>
        </p>
        <SocialLinks
          sx={{
            pt: [2, null, 5],
            order: [3, null, null],
          }}
        >
          <SocialLink><a href="https://www.behance.net/adelaida_design" sx={{color: 'white'}}>Behance</a></SocialLink>
          <SocialLink
            sx={{
              mt: [2, null, 4]
            }}><a href="https://dribbble.com/adelaida_design" sx={{color: 'white'}}>Dribbble</a></SocialLink>
        </SocialLinks>
      </div>
    </ShowUp>
    <Navigation selected="about" />
  </Layout>
)

export default IndexPage

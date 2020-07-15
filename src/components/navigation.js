/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import Link from "./link"

const flicker = keyframes`
  0%  { opacity: 0; }
  100%    { opacity: 1; }
`;

const FadedNav = styled.nav`
  animation: ${flicker} 1s ease-in;
`

const Navigation = () => {
  return (
    <FadedNav>
      <ul
        sx={{
          listStyleType: 'none',
          fontSize: [5, 6, null],
        }}>
        <li
          sx={{
            position: 'absolute',
            top: 2,
            left: 0,
            width: '100%',
            textAlign: 'center',
          }}><Link to="/works">Works</Link></li>
        <li
          sx={{
            position: 'fixed',
            right: [2, 3, 4],
            bottom: 2
          }}><Link to="/contact">Contact</Link></li>
        <li
          sx={{
            position: 'fixed',
            left: [2, 3, 4],
            bottom: 2,
          }}
        ><Link to="/about">About</Link></li>
      </ul>
    </FadedNav>
  )
}

export default Navigation

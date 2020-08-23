/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from "prop-types"
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { useThemeUI } from 'theme-ui'

import Link from "./link"

const showUp = keyframes`
  0%  { opacity: 0; }
  100%    { opacity: 1; }
`;

const FadedNav = styled.nav`
  animation: ${showUp} 1s ease-in;
  position: absolute;
  width: 100%;
  z-index: 2;
`

const Navigation = ({ selected }) => {
  const context = useThemeUI()
  const { theme } = context
  return (
    <FadedNav>
      <ul
        sx={{
          listStyleType: 'none',
          fontSize: [5, 6, null],
        }}>
        {!selected && 
          <li
          sx={{
            position: 'absolute',
            top: [3, null, 4],
            left: 0,
            width: '100%',
            textAlign: 'center',
            color: 'primary',
          }}><Link to="/works">Works</Link></li>
        }
        {selected === 'works' && 
          <li
            sx={{
              position: 'absolute',
              top: [3, null, 4],
              left: 0,
              width: '100%',
              display: 'flex',
            }}
          >
            <Link to="/" sx={{ margin: 'auto' }}>
            <div
              sx={{
                mb: 2,
                width: 0,
                height: 0,
                borderLeft: '1.3rem solid transparent',
                borderRight: '1.3rem solid transparent',
                borderBottom: `2rem solid ${theme.colors.primary}`
              }} />
            </Link>
          </li>
        }
        {!selected && 
          <li
            sx={{
              position: 'fixed',
              right: [3, null, 4],
              bottom: [3, null, 4],
              color: 'primary',
            }}><Link to="/hire">Hire me!</Link></li>
        }
        {selected === 'hire' && 
          <li
            sx={{
              position: 'fixed',
              right: [3, null, 4],
              bottom: [3, null, 4],
            }}
          >
            <Link to="/">
            <div
              sx={{
                mr: [2, null, 4], // TODO: replace this with more generic solution
                mb: 2,
                width: 0,
                height: 0,
                borderLeft: '1.3rem solid transparent',
                borderRight: '1.3rem solid transparent',
                borderBottom: `2rem solid ${theme.colors.primary}`
              }} />
            </Link>
          </li>
        }
        {!selected && 
          <li
            sx={{
              position: 'fixed',
              left: [3, null, 4],
              bottom: [3, null, 4],
              color: 'primary',
            }}
          ><Link to="/about">About</Link></li>
        }
        {selected === 'about' && 
          <li
            sx={{
              position: 'fixed',
              left: [3, null, 4],
              bottom: [3, null, 4],
            }}
          >
            <Link to="/">
            <div
              sx={{
                ml: [2, null, 4], // TODO: replace this with more generic solution
                mb: 2,
                width: 0,
                height: 0,
                borderLeft: '1.3rem solid transparent',
                borderRight: '1.3rem solid transparent',
                borderBottom: `2rem solid ${theme.colors.primary}`
              }} />
            </Link>
          </li>
        }
      </ul>
    </FadedNav>
  )
}

Navigation.propTypes = {
  selected: PropTypes.string
};

export default Navigation

import React from "react";
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import {useSpring, animated} from 'react-spring'

const spin = keyframes({
  '0%': {
    strokeDasharray: '4000',
    strokeDashoffset: '4000',
  },
  '45%': {
    strokeDasharray: '4000',
    strokeDashoffset: '4000',
  },
  '100%': {
    strokeDasharray: '4000',
    strokeDashoffset: '0',
  }
})

const StyledLogo = styled.svg(props => ({
  fill: 'transparent',
  '.myPath': {
    'animation': props.animateIt ? `${spin} 3s ease-in` : '',
  }
}))


function Logo({ animateIt }) {
  const props = useSpring({config: { duration: 1000 }, opacity: 1, from: {opacity: 0}})
  return (
    <animated.div style={props}>
      <StyledLogo
        width="100%"
        viewBox="0 0 904 744"
        animateIt={animateIt}
      >
        <path fill="#fff" d="M0 0H904V744H0z"></path>
        <path
          stroke="#cf011b"
          className="myPath"
          strokeWidth="15"
          d="M372.512 643.571H17.958S428.341 33.134 442.854 15.008c4.988-6.231 444.865 717.59 444.865 717.59H.607M229.914 484H526M439.711 171.773L731.343 647.81"
        ></path>
      </StyledLogo>
    </animated.div>
  );
}

Logo.propTypes = {
  animateIt: PropTypes.bool
}

export default Logo;

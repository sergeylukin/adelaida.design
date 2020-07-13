/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"

import Link from "./link"

const Navigation = () => {
  return (
    <nav
      sx={{
      }}>
      <ul
        sx={{
          listStyleType: 'none',
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
            position: 'absolute',
            right: 2,
            bottom: 2
          }}><Link to="/about">About</Link></li>
        <li
          sx={{
            position: 'absolute',
            left: 2,
            bottom: 2,
          }}
        ><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation

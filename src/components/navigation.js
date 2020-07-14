/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"

import Link from "./link"

const Navigation = () => {
  return (
    <nav
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}>
      <ul
        sx={{
          listStyleType: 'none',
          fontSize: 4,
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
    </nav>
  )
}

export default Navigation

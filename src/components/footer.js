/** @jsx jsx */
import { jsx } from 'theme-ui'

import Link from './link'

const Footer = () => {
  return (
      <footer
        sx={{
          fontSize: 1,
          display: 'flex',
          justifyContent: 'center',
        }}>
        <p><Link to="https://adelaida.design">adelaida.design</Link></p>
        <p sx={{
          ml: 2
        }}>{new Date().getFullYear()}</p>
      </footer>
  )
}

export default Footer

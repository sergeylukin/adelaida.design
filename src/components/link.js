/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
let link = props =>
  <Link
    {...props}
    activeClassName='active'
    sx={{
      color: 'inherit',
      textDecoration: 'none',
      '&.active': {
        textDecoration: 'underline',
      }
    }}
  />
export default link

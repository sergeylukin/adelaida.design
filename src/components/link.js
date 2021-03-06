/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { isReturningVisitorContext } from '../hooks/isReturningVisitorProvider'

let link = props =>
  <isReturningVisitorContext.Consumer>
    {context => (
      <Link
        {...props}
        activeClassName='active'
        onClick={() => context.setReturningVisitor()}
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          '&.active': {
            textDecoration: 'underline',
          }
        }}
      />
    )}
  </isReturningVisitorContext.Consumer>
export default link

/** @jsx jsx */
import { jsx } from 'theme-ui'

export const SocialLinks = props => (
  <ul
    {...props}
    sx={{
      fontSize: 5,
      fontWeight: 100,
      whiteSpace: 'nowrap',
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      lignItems: 'center',
      pl: 0,
      my: 0
    }}
  />
)

export const SocialLink = props => (
  <li
    {...props}
    sx={{
      px: 2,
      "a": {
        textDecoration: ['underline', null, 'none'],
      }
    }}
  />
)

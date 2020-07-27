/** @jsx jsx */
import { jsx } from 'theme-ui'

export const SocialLinks = props => (
  <ul
    {...props}
    sx={{
      display: ['inline', null, 'block'],
      flexDirection: 'column',
      fontSize: 5,
      fontWeight: 100,
      whiteSpace: 'nowrap',
      listStyle: 'none',
      pl: 0,
      my: 0
    }}
  />
)

export const SocialLink = props => (
  <li
    {...props}
    sx={{
      pl: [0, null, 4],
      position: 'relative',
      "::before": {
        display: ['none', null, 'block'],
        position: 'absolute',
        content: '""',
        bottom: '.7rem',
        left: 0,
        borderLeft: '.4rem solid transparent',
        borderRight: '.4rem solid transparent',
        borderBottom: '.8rem solid white',
        width: 0,
        height: 0,
      },
      "a": {
        textDecoration: ['underline', null, 'none'],
      }
    }}
  />
)

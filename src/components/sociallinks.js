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
      flexDirection: ['column', 'row', null],
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
      py: [2, 0, null],
      display: ['block', 'inline', null],
      "a": {
        textDecoration: ['underline', null, 'none'],
      }
    }}
  />
)

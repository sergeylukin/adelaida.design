/* eslint-disable */
/** @jsx jsx */
import { jsx, useThemeUI, Box } from 'theme-ui';
import { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

import Layout from '../components/layout';
import SEO from '../components/seo';
import Navigation from '../components/navigation';
import Link from '../components/link';
import avatar from "../images/avatar.jpg"
import workSergeylukinUI from "../images/work-sergeylukin-ui.png"
import workSergeylukinLogo from "../images/work-sergeylukin-logo.png"
import workAdelaidaLogo from "../images/work-adelaida-logo.png"
import workQuotesLogo from "../images/work-quotes-logo.png"
import workEnlivenedLogo from "../images/work-enlivened-logo.png"
import workYayUI from "../images/work-yay-ui.png"
import workPretendyLogo from "../images/work-pretendy-logo.png"
import workSolelozLogo from "../images/work-soleloz-logo.png"

const cards = [
  {src: workPretendyLogo, bg: 'white'},
  {src: workEnlivenedLogo, bg: 'black'},
  {src: workSergeylukinUI, bg: 'white'},
  {src: workSergeylukinLogo, bg: 'white'},
  {src: workYayUI, bg: 'white'},
  {src: workSolelozLogo, bg: 'white'},
  {src: workQuotesLogo, bg: 'white'},
  {src: workAdelaidaLogo, bg: '#cf011b'},
]

const swipe = keyframes({
  '0%': {
     transform: 'translateX(160px)',
  },
  '20%': {
     transform: 'translateX(160px)',
  },
  '100%': {
     transform: 'translateX(0)',
  }
})

const circles = keyframes({
  '0%': {
    opacity: 0,
  },
  '33%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  }
})

const SwipeHint = styled.div(props => ({
  border: '2px solid ' + (props.color ? props.color : '#aae'),
  borderRadius: '50%',
  marginTop: '100px',
  height: '30px',
  width: '30px',
  'animation': `${swipe} 1.25s ease-out infinite, ${circles} 1.25s ease-out infinite`,
}))

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const Works = () => {
  const context = useThemeUI()
  const { theme } = context
  const [didGesture, setGesture] = useState(false);
  const [lastInsertedIndex, setLastInsertedIndex] = useState(null)

  var [gone,updateGone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  var [myArr, setMyArr] = useState([])
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    setGesture(true)
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right

    if (!down && trigger) {
      gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      setLastInsertedIndex(index)
      setMyArr([...myArr, index])
    }
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => {
      gone.clear() || set(i => to(i))
      setMyArr([])
    }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)




  return (
    <Layout>
      <SEO title="Works" />
      <Navigation selected='works' />
      <div
        sx={{
          position: 'fixed',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          left: '-1%',
          zIndex: 1,
          '> div.card': {
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            willChange: 'transform',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },

          '> div.card > div': {
            backgroundColor: 'white',
            backgroundSize: ['auto 75%', null, 'auto 85%'],
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            width: ['55vw', null, '45vh'],
            maxWidth: '300px',
            minWidth: '200px',
            height: ['60vh', null, '85vh'],
            maxHeight: '470px',
            willChange: 'transform',
            borderRadius: '10px',
            boxShadow: '0 12.5px 100px -10px rgba(0, 0, 0, 0.2), 0 10px 10px -10px rgba(0, 0, 0, 0.3)',
          }
        }}>
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div key={i} className="card" style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundColor: cards[i].bg, backgroundImage: `url(${cards[i].src})` }} />
          </animated.div>
        ))}
        <Box sx={{
          display: didGesture ? 'none' : 'block',
          position: 'absolute',
          marginLeft: '-100px',
          marginTop: '-15px',
          background: 'fff',
          left: '50%',
          top: '50%',
          width: '200px',
          height: '50px',
        }}>
          <SwipeHint color={'white'} />
        </Box>
      </div>
      {myArr.length > 0 && (
        <div sx={{
          height: '100vh',
          width: '100vw',
          textAlign: 'center',
        }}>
          <a sx={{
            color: theme.colors.primary,
            fontSize: 6,
            position: 'fixed',
            bottom: 2,
            marginLeft: '-45px',
            cursor: 'default',
            zIndex: 5,
          }}
            onClick={() => {
              if (myArr.length === 0) return
              let lastEl = myArr[myArr.length-1]
              setMyArr([...myArr.slice(0, -1)])
              gone.delete(lastEl)
              updateGone(() => gone)
              set(i => {
                if (lastEl !== i) return
                return to(i)
              })
          }}>Undo</a>
        </div>
      )}
    </Layout>
  )
}

export default Works;

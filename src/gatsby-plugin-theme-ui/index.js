export default {
  breakpoints: [
    '40em', '56em', '64em',
  ],
  colors: {
    text: "#333",
    background: "#fff", // cf011b
    primary: "#cf011b",
    secondary: "#fff",
  },
  fonts: {
    body: "'Yanone Kaffeesatz', system-ui, sans-serif",
    heading: "'Yanone Kaffeesatz', system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 300,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: 1200,
  },
  styles: {
    a: {
      color: 'primary',
    },
    root: {
      // uses the theme values provided above
      fontFamily: 'body',
      fontWeight: 'body',
    },
  },
}

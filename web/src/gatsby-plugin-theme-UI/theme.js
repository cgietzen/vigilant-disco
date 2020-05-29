export const theme = {
  colors: {
    black: "#171819",
    yellow: "#ffef00",
    white: "#ffffff",
  },
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Oakes Grotesk Medium", serif',
    monospace: "Menlo, monospace",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [11, 13, 16, 20, 26, 33, 48, 60, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  links: {
    nav: {
      fontSize: 6,
      textDecoration: "none",
      p: [2, null, null],
    },
    footerNav: {
      fontSize: 5,
      textDecoration: "none",
      py: 4,
    },
  },
  breakpoints: ["40em", "56em", "64em"],
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "heading",
      fontWeight: "body",
      bg: "black",
      color: "white",
    },
  },
}

import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Roboto',
    fontWeight: 400,
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  button: {
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Roboto',
    fontSize: '1rem',
  }
})
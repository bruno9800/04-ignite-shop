import { styled } from "../../styles"

export const HeaderContainer = styled('header', {
  padding: '2rem 0rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',

  img: {
    cursor: 'pointer',
  },

  button: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 0,
    color: '#8D8D99',
    background: '$gray800',
    borderRadius: 6,
    padding: '0.75rem',

    outline: 'none',
    border: 0,
    cursor: 'pointer',

    div: {
      visibility: 'hidden',
    },

    '&:hover': {
      color: '$gray300',

      div: {
        visibility: 'visible',
      },
    }
  }
})


export const CardBeforeContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  height: 27,
  width: 27,
  right: -7,
  top: -7,
  background: '$green500',
  borderRadius: '100%',
  border: '3px solid $gray900',
  color: '$white',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  lineHeight: 1,
  fontFamily: 'Roboto',
})
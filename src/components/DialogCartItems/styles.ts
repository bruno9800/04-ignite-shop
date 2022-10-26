import { keyframes, styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";

const CartTranslation = keyframes({
  "0%": {
    transform: "translateX(110%)",
  },
  "100%": {
    transform: "translateX(0)",
  }
})

export const Overlay = styled(Dialog.Overlay , {
    backgroundColor: 'transparent',
    position: 'fixed',
    inset: 0,
})

export const DialogContent = styled(Dialog.Content, {
    position: 'fixed',
    backgroundColor: '$gray800',
    boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
    right: 0,
    top: 0,
    bottom: 0,
    width: '30rem',
    height: '100vh',
    animation: `.5s ease-in-out ${CartTranslation}`

})

export const Content = styled('div', {
  maxWidth: 408,
  margin: '0 auto',
  padding: '0 1.5rem',
  height: '100%',
  footer: {
    position: 'absolute',
    marginTop: 'auto',
    bottom: 0,
    width: '100%',
    maxWidth: 360,
    display: 'grid',
    gap: '3rem',
    marginBottom: '2rem',
    table: {
      display: 'grid',
      tr: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '3px',
        lineHeight: 1.6,
        color: '$gray100',    
      }
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.25rem 2rem',
      borderRadius: 8,
      backgroundColor: '#00875F',
      border: 0,
      outline: 0,
      cursor: 'pointer',
      
      fontSize: '$md',
      color: '$white',
      transition: 'background-color 0.1s',

      '&:hover': {
        backgroundColor: '#008F5F',
      }
    }
  }
})

export const Td = styled('td', {
    variants: {
      variant: {
        small: {
          fontSize: '$md',
          color: '$gray300',
        },
        medium: {
          fontWeight: 'bold',
      },
      large: {
          fontSize: '$xl',
          lineHeight: 1.4,
          fontWeight: 'bold',
        }
      }
    }
})


export const Title = styled(Dialog.Title, {
  fontSize: '$lg',
  fontWeight: 'bold',
  color: '$gray100',
  lineHeight: 1.6,
  marginTop: '2.5rem',
})

export const ListCartProducts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1.5rem',
  marginTop: '2rem',
  maxHeight: 340,
  minHeight: 340,
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: 2,
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '$gray800',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray300',
    borderRadius: 8,
  }
})

export const CartProduct = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  width: '100%',
})

export const Info = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  strong: {
    display: 'block',
    color: '$gray300',
    fontSize: '$md',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  span : {
    fontSize: '$md',
    color: '$gray100',
    lineHeight: 1.6,
    fontWeight: 'bold',
  },

  button: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontWeight: 'bold',
    color: '$green500',
    cursor: 'pointer',
    marginTop: 'auto',
    lineHeight: 1.6,
  }
})

export const ImageContainer = styled('div', {
  position: 'relative',
  maxWidth: 100,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  div: {
    position: 'absolute',
    right: -7,
    top: 2,
    width: '1.25rem',
    height: '1.25rem',
    backgroundColor: '$gray900',
    borderRadius: '100%',
    fontSize: '0.875rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export const DialogClose = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  color: '#8D8D99',
  lineHeight: 0,
  background: 'none',
  outline: 'none',
  border: 'none',
  boxSizing: 'initial',

  cursor: 'pointer',
}) 
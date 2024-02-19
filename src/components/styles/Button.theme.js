export const buttonTheme = {
  baseStyle: {
    fontFamily: 'Lilita One, serif',
    textTransform: 'uppercase',
    borderBottom: '0.5rem solid',
    borderRadius: '3xl',
    transitionProperty: 'common',
    transitionDuration: 'normal',
  },
  sizes: {
    md: {
      maxW: '444px',
      fontSize: 'lg',
      p: '1',
    },
    lg: {
      maxW: '504px',
      fontSize: '2xl',
      p: '2',
    },
    xl: {
      maxW: '560px',
      fontSize: '3xl',
      p: '3',
    },
  },
  variants: {
    primary: {
      color: 'red.400',
      _hover: {
        color: 'blue.400',
        borderBottom: '0.25rem solid',
      },
    },
    secondary: {
      color: 'blue.400',
      _hover: {
        color: 'red.400',
        borderBottom: '0.25rem solid',
      },
    },
    'back-to-start': {
      color: 'red.400',
      _hover: {
        color: 'blue.400',
        borderBottom: '0.25rem solid',
      },

      pos: 'absolute',
      w: 'auto',
      top: '.15rem',
      left: '5rem',
      rounded: 'full',
    },
  },
  defaultProps: {
    size: 'xl',
    variant: 'primary',
  },
};

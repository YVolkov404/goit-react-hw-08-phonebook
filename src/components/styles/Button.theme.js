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
      p: '2',
    },
    lg: {
      maxW: '504px',
      p: '4',
    },
    xl: {
      maxW: '564px',
      p: '8',
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

      position: 'absolute',
      top: '1rem',
      left: '5rem',
      rounded: 'full',
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'primary',
  },
};

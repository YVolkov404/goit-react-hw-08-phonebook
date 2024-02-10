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
    lg: {
      fontSize: '3xl',
      px: '6',
      h: '14',
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
  },
  defaultProps: {
    size: 'lg',
    variant: 'primary',
  },
};

export const buttonTheme = {
  // style object for base or default style
  baseStyle: {
    fontFamily: 'Lilita One, serif',
    textTransform: 'uppercase',

    borderBottom: '0.5rem solid',
    borderRadius: '3xl',
    transitionProperty: 'common',
    transitionDuration: 'normal',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    lg: {
      fontSize: '3xl',
      px: '6',
      h: '14',
    },
  },
  // styles for different visual variants ("outline", "solid")
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
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: 'lg',
    variant: 'primary',
  },
};

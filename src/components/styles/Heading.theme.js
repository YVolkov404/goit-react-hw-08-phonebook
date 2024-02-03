export const headingTheme = {
  // style object for base or default style
  baseStyle: {
    fontFamily: 'inherit',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      color: 'blue.400',
      textShadow: '1px 2px 8px rgba(74,85,104,0.45)',
      letterSpacing: '0.45em',
    },
    secondary: {
      color: 'red.400',
      textShadow: '1px 2px 8px rgba(74,85,104,0.45)',
      letterSpacing: 'widest',
    },
  },
  defaultProps: {
    size: '3xl',
    variant: 'primary',
  },
};

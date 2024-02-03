export const headingTheme = {
  // style object for base or default style
  baseStyle: {
    fontFamily: 'inherit',
    textTransform: 'uppercase',
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      color: 'blue.400',
      textShadow: '1px 2px 8px rgba(74,85,104,0.45)',
      letterSpacing: '0.275em',
    },
    secondary: {
      color: 'red.400',
      textShadow: '1px 2px 8px rgba(74,85,104,0.45)',
      letterSpacing: '0.225em',
    },
  },
  defaultProps: {
    size: '2xl',
    variant: 'primary',
  },
};

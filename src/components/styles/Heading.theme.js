export const headingTheme = {
  baseStyle: {
    fontFamily: 'inherit',
    textTransform: 'uppercase',
  },
  variants: {
    primary: {
      color: 'blue.400',
      textShadow: '1px 2px 8px rgba(74,85,104,0.45)',
      letterSpacing: '0.275em',
    },
    secondary: {
      color: 'red.400',
      textShadow: '1px 2px 8px rgba(74,85,104,0.45)',
      letterSpacing: '0.175em',
    },
    extra: {
      mt: '3rem',
      fontFamily: 'Lilita One, serif',
      letterSpacing: '0.175em',
      bgGradient:
        'linear(to-r, blue.600, blue.400, blue.300, red.300, red.400, red.600)',
      bgClip: 'text',
    },
  },
  defaultProps: {
    size: '3xl',
    variant: 'primary',
  },
};

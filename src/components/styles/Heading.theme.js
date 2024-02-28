export const headingTheme = {
  baseStyle: {
    fontFamily: 'Lilita One, serif',
    fontSize: ['3xl', '4xl', '5xl'],
    fontWeight: 'semibold',
    letterSpacing: ['0.05em', '0.1em'],
    textTransform: 'uppercase',
    textShadow: '1px 2px 8px rgba(74,85,104,0.45)',
    bgGradient:
      'linear(to-r, blue.600, blue.400, blue.300, red.300, red.400, red.600)',
    bgClip: 'text',
  },
  defaultProps: {
    size: '6xl',
  },
};

export const textTheme = {
  baseStyle: {
    fontSize: ['xl', '2xl', '3xl'],
    fontWeight: 'semibold',
    letterSpacing: ['-0,5rem', '0.05rem', '0.01rem'],
  },
  variants: {
    selected: {
      fontSize: 'md',
      fontWeight: 'normal',
      letterSpacing: '0em',
    },
  },
  sizes: {
    md: {
      maxW: '444px',
      fontSize: 'xl',
    },
    lg: {
      maxW: '504px',
      fontSize: '2xl',
    },
    xl: {
      maxW: '564px',
      fontSize: '3xl',
    },
  },
  defaultProps: {
    sizes: 'xl',
  },
};

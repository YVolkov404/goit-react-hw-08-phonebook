export const tooltipTheme = {
  baseStyle: {
    border: 'none',
    borderRadius: 'base',
    zIndex: 'tooltip',

    color: 'yellow.50',
    fontWeight: 'bold',
    fontVariant: 'small-caps',
  },
  sizes: {
    lg: {
      fontSize: 'lg',
      px: '5',
      py: '0.5',
      mr: '1rem',
    },
  },
  variants: {
    primary: {
      bg: 'blue.400',
    },
    secondary: {
      bg: 'red.400',
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'primary',
  },
};

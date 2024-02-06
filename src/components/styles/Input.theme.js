import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const $height = cssVar('input-height');
const $fontSize = cssVar('input-font-size');
const $padding = cssVar('input-padding');
const $borderRadius = cssVar('input-border-radius');

const baseStyle = definePartsStyle({
  addon: {
    height: '3xl',
    fontSize: 'f3xl',
    px: ' 3xl',
    borderRadius: '3xl',
  },
  field: {
    width: '100%',
    height: '3xl',
    fontSize: ' 3xl',
    px: ' 3xl',
    borderRadius: $borderRadius.xl,
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
});

const size = {
  lg: defineStyle({
    [$fontSize.variable]: 'fontSizes.lg',
    [$padding.variable]: 'space.4',
    [$borderRadius.variable]: 'radii.md',
    [$height.variable]: 'sizes.12',
  }),
  md: defineStyle({
    [$fontSize.variable]: 'fontSizes.md',
    [$padding.variable]: 'space.4',
    [$borderRadius.variable]: 'radii.md',
    [$height.variable]: 'sizes.10',
  }),
  sm: defineStyle({
    [$fontSize.variable]: 'fontSizes.sm',
    [$padding.variable]: 'space.3',
    [$borderRadius.variable]: 'radii.sm',
    [$height.variable]: 'sizes.8',
  }),
  xs: defineStyle({
    [$fontSize.variable]: 'fontSizes.xs',
    [$padding.variable]: 'space.2',
    [$borderRadius.variable]: 'radii.sm',
    [$height.variable]: 'sizes.6',
  }),
};

const sizes = {
  lg: definePartsStyle({
    field: size.lg,
    group: size.lg,
  }),
  md: definePartsStyle({
    field: size.md,
    group: size.md,
  }),
  sm: definePartsStyle({
    field: size.sm,
    group: size.sm,
  }),
  xs: definePartsStyle({
    field: size.xs,
    group: size.xs,
  }),
};

const variantOutline = definePartsStyle(props => {
  return {
    field: {
      border: '1px solid',
      borderColor: 'inherit',
      bg: 'inherit',
      _hover: {
        borderColor: mode('gray.300', 'whiteAlpha.400')(props),
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
    },
    addon: {
      border: '1px solid',
      borderColor: mode('inherit', 'whiteAlpha.50')(props),
      bg: mode('gray.100', 'whiteAlpha.300')(props),
    },
  };
});

const variantFilled = definePartsStyle(props => {
  return {
    field: {
      border: '2px solid',
      borderColor: 'transparent',
      bg: mode('gray.100', 'whiteAlpha.50')(props),
      _hover: {
        bg: mode('gray.200', 'whiteAlpha.100')(props),
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
    },
    addon: {
      border: '2px solid',
      borderColor: 'transparent',
      bg: mode('gray.100', 'whiteAlpha.50')(props),
    },
  };
});

const variantFlushed = definePartsStyle(props => {
  return {
    field: {
      borderBottom: '1px solid',
      borderColor: 'inherit',
      borderRadius: '0',
      px: '0',
      bg: 'transparent',
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
    },
    addon: {
      borderBottom: '2px solid',
      borderColor: 'inherit',
      borderRadius: '0',
      px: '0',
      bg: 'transparent',
    },
  };
});

const variantUnstyled = definePartsStyle({
  field: {
    bg: 'transparent',
    px: '0',
    height: 'auto',
  },
  addon: {
    bg: 'transparent',
    px: '0',
    height: 'auto',
  },
});

const myTheme = definePartsStyle({
  field: {
    width: '100%',
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'gray.50',
    borderRadius: 'full',
    height: '2rem',
    fontSize: '3xl',
  },
  addon: {
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'green.50',
    borderRadius: 'md',
    color: 'blue.400',
    height: '2rem',
    fontSize: '3xl',
  },
});

const variants = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled,
};

// export const inputTheme = defineMultiStyleConfig({
//   baseStyle,
//   sizes,
//   variants,
//   defaultProps: {
//     size: 'xl',
//     variant: 'outline',
//   },
// });

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultTheme: {
    baseTheme: myTheme,
    variants: variantOutline,
    size: 'lg',
  },
});

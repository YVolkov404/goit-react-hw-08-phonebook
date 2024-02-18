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
    w: '100%',
    h: '3rem',
    px: '1rem',

    fontSize: '2rem',
    borderRadius: 'base',
  },
  field: {
    w: '100%',
    height: '3rem',
    fontSize: '2xl',
    px: '1.25rem',
    borderRadius: 'full',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _placeholder: {
      color: 'red.400',
      opacity: 0.333,
    },
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
      color: 'gray.600',
      border: '2px solid',
      borderColor: 'red.400',
      bg: mode('green.50', 'whiteAlpha.33')(props),
      _hover: {
        bg: mode('yellow.50', 'whiteAlpha.66')(props),
        borderColor: mode('red.400', 'whiteAlpha.66')(props),
      },
      _focusVisible: {
        border: '2px solid',
        borderColor: mode('red.400', 'whiteAlpha.33')(props),
      },
      _focus: {
        borderColor: mode('red.400', 'whiteAlpha.33')(props),
        bg: mode('yellow.50', 'whiteAlpha.66')(props),
        boxShadow: 'none',
      },
    },
    addon: {
      border: '2px solid',
      borderColor: mode('red.400', 'whiteAlpha.50')(props),
      bg: mode('yellow.50', 'whiteAlpha.300')(props),
    },
  };
});

const variantFilled = definePartsStyle(props => {
  return {
    field: {
      color: 'red.400',
      fontSize: '3xl',
      border: '2px solid',
      borderColor: 'transparent',
      boxShadow: 'md',
      bg: mode('yellow.50', 'whiteAlpha.33')(props),
      _placeholder: {
        color: 'blue.300',
      },
      _hover: {
        bg: mode('blue.50', 'whiteAlpha.33')(props),
        borderColor: mode('blue.100', 'whiteAlpha.66')(props),
        boxShadow: 'none',
      },
      _focusVisible: {
        borderColor: mode('blue.200', 'whiteAlpha.66')(props),
        boxShadow: 'base',
        _placeholder: {
          color: 'blue.400',
        },
      },
    },
    addon: {
      border: '2px solid',
      borderColor: 'transparent',
      bg: mode('yellow.50', 'whiteAlpha.66')(props),
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

const variants = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled,
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
});

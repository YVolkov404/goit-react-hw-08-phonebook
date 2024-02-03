import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system';
import { getColor, mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const $height = cssVar('input-height');
const $fontSize = cssVar('input-font-size');
const $padding = cssVar('input-padding');
const $borderRadius = cssVar('input-border-radius');

const baseStyle = definePartsStyle({
  addon: {
    height: '3.25rem',
    fontSize: 'md',
  },
  field: {
    width: '100%',
    height: '3.25rem',
    fontSize: '3xl',
    px: '1rem',
    borderRadius: 'full',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    placeholder: 'var(--chakra-colors-gray-500)',
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

function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode('blue.500', 'blue.300')(props),
    errorBorderColor: ec || mode('red.500', 'red.300')(props),
  };
}

const variantOutline = definePartsStyle(props => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

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
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0 0 0 1px ${getColor(theme, ec)}`,
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: `0 0 0 1px ${getColor(theme, fc)}`,
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
      borderColor: 'red.400',
      bg: mode('yellow.50')(props),
      _hover: {
        bg: mode('yellow.50')(props),
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _invalid: {
        borderColor: 'red.400',
      },
      _focusVisible: {
        bg: 'transparent',
        borderColor: 'blue.400',
      },
    },
    addon: {
      border: '2px solid',
      borderColor: 'transparent',
      bg: mode('yellow.100', 'yellow.50')(props),
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
  unstyled: variantUnstyled,
  primary: {
    field: {
      width: '100%',
      height: '3.25rem',
      fontSize: '3xl',
      border: '1px solid',
      borderColor: 'inherit',
      bg: 'inherit',
      placeholder: 'var(--chakra-colors-gray-500)',

      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
    },
    addon: {
      height: '3.25rem',
      fontSize: '2xl',
      border: '1px solid',
    },
  },
  secondary: {
    field: {
      width: '100%',
      height: '3.25rem',
      fontSize: 'xl',
      border: '1px solid',
      borderColor: 'inherit',
      bg: 'inherit',
      placeholder: 'var(--chakra-colors-gray-500)',

      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
    },
    addon: {
      height: '2.75rem',
      fontSize: 'lg',
      border: '1px solid',
    },
  },
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'outline',
  },
});

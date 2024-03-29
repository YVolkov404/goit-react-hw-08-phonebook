import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
// import { runIfFn } from '../utils/run-if-fn';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleOverlay = defineStyle({
  bg: 'blackAlpha.600',
  zIndex: 'modal',
});

const baseStyleDialogContainer = defineStyle(props => {
  const { isCentered, scrollBehavior } = props;

  return {
    display: 'flex',
    zIndex: 'modal',
    justifyContent: 'center',
    alignItems: isCentered ? 'center' : 'flex-start',
    overflow: scrollBehavior === 'inside' ? 'hidden' : 'auto',
    overscrollBehaviorY: 'none',
  };
});

// const baseStyleDialog = defineStyle(props => {
//   const { isCentered, scrollBehavior } = props;

//   return {
//     color: 'inherit',
//     my: isCentered ? 'auto' : '16',
//     mx: isCentered ? 'auto' : undefined,
//     zIndex: 'modal',
//     maxH: scrollBehavior === 'inside' ? 'calc(100% - 7.5rem)' : undefined,
//   };
// });

const baseStyleBody = defineStyle(props => {
  const { scrollBehavior } = props;
  return {
    px: '6',
    py: '0',
    flex: '1',
    overflow: scrollBehavior === 'inside' ? 'auto' : undefined,
  };
});

const baseStyleFooter = defineStyle({
  px: '6',
  py: '8',
});

const baseStyle = definePartsStyle(props => ({
  overlay: baseStyleOverlay,
  dialogContainer: {
    baseStyleDialogContainer,
  },
  dialog: {
    height: '550px',
    p: '0',
    border: '1rem solid',
    borderRadius: '2xl',

    bg: 'yellow.50',
    borderColor: 'green.100',
  },

  header: {
    mx: '0.5rem',
    mt: '3rem',
    mb: '1rem',
    padding: '0',
    fontSize: '3xl',
    fontWeight: 'bold',
    textAlign: 'center',

    textShadow: '1px 2px 8px rgba(74,85,104,0.45)',
    p: {
      letterSpacing: '0.075em',
    },
  },
  closeButton: {
    position: 'absolute',
    top: '3',
    insetEnd: '4',
    _hover: {
      bg: 'blue.400',
      color: 'yellow.50',
    },
  },
  body: { baseStyleBody },
  footer: baseStyleFooter,
}));

function getSize(value) {
  if (value === 'full') {
    return definePartsStyle({
      dialog: {
        maxW: '100vw',
        minH: '$100vh',
        my: '0',
        borderRadius: '0',
      },
    });
  }
  return definePartsStyle({
    dialog: { maxW: value },
  });
}

const sizes = {
  xs: getSize('xs'),
  sm: getSize('sm'),
  md: getSize('md'),
  lg: getSize('lg'),
  xl: getSize('xl'),
  '2xl': getSize('2xl'),
  '3xl': getSize('3xl'),
  '4xl': getSize('4xl'),
  '5xl': getSize('5xl'),
  '6xl': getSize('6xl'),
  full: getSize('full'),
};

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: { size: 'lg' },
});

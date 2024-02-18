// import { extendTheme } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const container = defineStyle({
  bg: 'blue.400',
  position: 'absolute',
  right: '2.5rem',
  top: '-2.5rem',
  w: '7.25rem',
  h: '7.25rem',
  boxShadow: 'xl',
});

export const avatarTheme = defineStyleConfig({
  baseStyle: {
    container,
  },
});

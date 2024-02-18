import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brandPrimary = defineStyle({
  display: 'flex',
  w: '100%',
  px: '1rem',
  justifyContent: 'space-between',
  alignItems: 'center',

  fontFamily: 'Lilita One',
  fontWeight: 'thin',
  textDecoration: 'none',

  bg: 'green.50',

  _hover: {
    color: 'yellow.50',
    bg: 'yellow.50',
    cursor: 'pointer',
    textDecorationLine: 'none',
  },
});

export const linkTheme = defineStyleConfig({
  variants: { brandPrimary },
});

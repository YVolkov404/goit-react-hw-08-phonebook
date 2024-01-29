import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

//---------------Heading Styles----------------
const shadow = defineStyle({
  textShadow: '1px 2px 8px rgba(74,85,104,0.45)',
});

export const headingTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: 'inherit',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1.5rem',
  },
  variants: { shadow },
});

//---------------Button Styles----------------
const outline = defineStyle({
  border: '0rem',
  borderBottom: '0.5rem solid',

  fontFamily: 'Lilita One, serif',
  fontSize: '3xl',
  textTransform: 'uppercase',
});

const lg = defineStyle({
  fontSize: 'xl',
  px: '6',
  h: '14',
  borderRadius: '3xl',
});

export const buttonTheme = defineStyleConfig({
  sizes: { lg },
  variants: { outline },
});

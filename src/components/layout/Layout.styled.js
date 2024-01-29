import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// define the base component styles
const sizes = {
  sm: defineStyle({
    maxW: '45ch',
    p: '4',
  }),
  md: defineStyle({
    maxW: 'container.sm',
    p: '6',
    fontSize: 'lg',
  }),
  lg: defineStyle({
    maxW: '75ch',
    p: '8',
    fontSize: 'xl',
  }),
};

// export the component theme
export const containerTheme = defineStyleConfig({ sizes });

import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// define the base component styles
const sizes = {
  xl: defineStyle({
    maxW: '50ch',
    py: '6',
    fontSize: 'xl',
  }),
};

// export the component theme
export const containerTheme = defineStyleConfig({ sizes });

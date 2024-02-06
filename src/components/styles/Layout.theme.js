import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = {
  xl: defineStyle({
    maxW: '50ch',
    py: '6',
    fontSize: 'xl',
  }),
};

export const containerTheme = defineStyleConfig({ sizes });

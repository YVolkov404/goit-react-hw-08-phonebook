import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const xl = defineStyle({
  h: 24,
  borderRadius: 'xl',
});

export const skeletonTheme = defineStyleConfig({
  sizes: { xl },
});

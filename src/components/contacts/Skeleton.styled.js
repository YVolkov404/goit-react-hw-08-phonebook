import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const xl = defineStyle({
  h: 12,
  borderRadius: 'xl',
});

export const skeletonTheme = defineStyleConfig({
  sizes: { xl },
});

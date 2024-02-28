import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react';

// const breakpoints = {
//   md: '48em', //  ~480px
//   lg: '62em', // ~550px
//   xl: '80em', //  ~615px
// };

//  const breakpoints = ['48em', '62em', '80em'];
//  <Box as='div' w={[480, 550, 615]}></Box>
// <Text fontSize={{base: '48em', md: '62em', lg: '80em'}}></Text>

const baseStyle = {
  minWidth: '354px',
  border: '0.05rem solid',
  borderRadius: '1.25rem',
  boxShadow: 'xl',
};

const sizes = {
  md: defineStyle({
    maxW: '444px',
    p: '4',
  }),
  lg: defineStyle({
    maxW: '504px',
    p: '6',
  }),
  xl: defineStyle({
    maxW: '564px',
    p: '8',
  }),
};

const defaultProps = {
  size: 'xl',
  colorScheme: 'brand.first',
};

const variants = {
  primary: defineStyle({
    bgColor: 'green.50',
    borderColor: 'blue.400',
  }),
  secondary: defineStyle({
    bgColor: 'yellow.50',
    borderColor: 'red.400',
  }),
};

export const containerTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});

// * Layer Styles will not override variant styling

//  @ts-check

// -->    Color or text color
// -->    Background color
// -->    Border width and border color
// -->    Box shadow
// -->    Opacity

export const layoutTheme = extendTheme({
  layerStyles: {
    base: {
      bg: 'green.50',
      borderColor: 'blue.400',
    },
    selected: {
      bg: 'yellow.50',
      borderColor: 'red.400',
    },
  },
});

// * Properties defined in a text style

//  -->    Font family, weight, and size
//  -->    Line height
//  -->    Letter spacing
//  -->    Text decoration (strikethrough and underline)
//  -->    Text transform (uppercase, lowercase, and capitalization)

// * <Box />  style properties

// -->     display
// -->     alignItems
// -->     justifyContent
// -->     textAlign
// -->     boxSize
// -->     color
// -->     textShadow
// -->     fontWeight
// -->     fontSize
// -->     padding, p
// -->     margin, m

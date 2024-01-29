import { extendTheme } from '@chakra-ui/react';
import { containerTheme } from 'components/layout/Layout.styled';
import { headingTheme, buttonTheme } from 'components/home/HomePage.styled';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Josefin Slab, serif',
        fontWeight: 'semibold11',
        color: 'gray.600',
      },
      section: {
        // iPAd mini 8.3 portrait view
        w: '744px',
        h: '1133px',
        border: '2px solid',
        borderRadius: '3xl', // 12px
        boxShadow: 'lg',
      },
      p: {
        fontSize: '4xl',
        letterSpacing: '0.225em',
      },
    },
    colors: {
      brand: {
        primary: 'red.400',
        extra: 'blue.400',
        bg1: 'green.50',
        bg2: 'yellow.50',
        liner: 'gray.600',
      },
    },
  },
  components: {
    Container: containerTheme,
    Heading: headingTheme,
    Button: buttonTheme,
  },
});

export default theme;

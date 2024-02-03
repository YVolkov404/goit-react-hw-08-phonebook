import { extendTheme } from '@chakra-ui/react';
import { containerTheme } from 'components/layout/Layout.styled';
import { headingTheme } from 'components/styles/Heading.theme';
import { tooltipTheme } from 'components/styles/Tooltip.theme';
//---------------------------------------------------------------
import { inputTheme } from 'components/contacts/Input.styled';
import { skeletonTheme } from 'components/contacts/Skeleton.styled';
import { buttonTheme } from 'components/styles/Button.theme';
import { modalTheme } from 'components/modal/Modal.styled';

// import { ColorModeSwitcher } from './ColorModeSwitcher';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Josefin Slab, serif',
        fontWeight: 'semibold',
        color: 'gray.600',
      },
      section: {
        // iPAd mini 8.3 portrait view
        w: '717px',
        h: '1106px',
        border: '3px solid',
        borderRadius: '3xl', // 12px
        boxShadow: 'lg',
        p: '115px 58px',
      },
      'p, label': {
        fontSize: '4xl',
        letterSpacing: '0.22em',
      },
      svg: {
        fill: 'green.50',
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
    Button: buttonTheme,
    Container: containerTheme,
    Skeleton: skeletonTheme,
    Heading: headingTheme,
    Tooltip: tooltipTheme,
    Input: inputTheme,
    Modal: modalTheme,
  },
});

export default theme;

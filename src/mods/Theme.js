import { extendTheme } from '@chakra-ui/react';
import { containerTheme } from 'components/layout/Layout.styled';
import { headingTheme } from 'components/styles/Heading.theme';
import { tooltipTheme } from 'components/styles/Tooltip.theme';
//---------------------------------------------------------------
import { inputTheme } from 'components/styles/Input.theme';
import { skeletonTheme } from 'components/styles/Skeleton.theme';
import { buttonTheme } from 'components/styles/Button.theme';
import { modalTheme } from 'components/modal/Modal.styled';
import { labelTheme } from 'components/styles/Form.theme';
import { iconTheme } from 'components/styles/Icon.theme';

// import { ColorModeSwitcher } from './ColorModeSwitcher';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Josefin Slab, serif',
        fontSize: 'md',
        letterSpacing: '0.125em',
        fontWeight: 'semibold',
        color: 'gray.600',
      },
      section: {
        w: '560px',
        h: '947px',
        border: '3px solid',
        borderRadius: '3xl',
        boxShadow: 'lg',
        p: '5rem 2rem',
      },
      p: {
        fontSize: '3xl',
      },
      label: {
        fontSize: 'lg',
        mb: '0',
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
    FormLabel: labelTheme,
    Icon: iconTheme,
  },
});

export default theme;

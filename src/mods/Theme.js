import { extendTheme } from '@chakra-ui/react';
//---------------------------------------------------------------
import { inputTheme } from 'components/styles/Input.theme';
import { skeletonTheme } from 'components/styles/Skeleton.theme';
import { headingTheme } from 'components/styles/Heading.theme';
import { tooltipTheme } from 'components/styles/Tooltip.theme';
import { buttonTheme } from 'components/styles/Button.theme';
import { modalTheme } from 'components/styles/Modal.theme';
import { labelTheme } from 'components/styles/Form.theme';
import { iconTheme } from 'components/styles/Icon.theme';
import { alertTheme } from 'components/styles/Alert.theme';
import { spinnerTheme } from 'components/styles/Spinner.theme';
import { containerTheme } from 'components/styles/Layout.theme';

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
      'div, h1': {
        p: '0',
        m: '0',
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
        fontFamily: 'Lilita One, serif',
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
    Skeleton: skeletonTheme,
    Heading: headingTheme,
    Tooltip: tooltipTheme,
    Input: inputTheme,
    Modal: modalTheme,
    FormLabel: labelTheme,
    Icon: iconTheme,
    Spinner: spinnerTheme,
    Alert: alertTheme,
    Container: containerTheme,
  },
});

export default theme;

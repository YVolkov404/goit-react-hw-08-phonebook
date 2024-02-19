import { extendTheme } from '@chakra-ui/react';
//------------------------------------------
import { inputTheme } from 'components/styles/Input.theme';
import { skeletonTheme } from 'components/styles/Skeleton.theme';
import { tooltipTheme } from 'components/styles/Tooltip.theme';
import { buttonTheme } from 'components/styles/Button.theme';
import { modalTheme } from 'components/styles/Modal.theme';
import { labelTheme } from 'components/styles/Form.theme';
import { iconTheme } from 'components/styles/Icon.theme';
import { alertTheme } from 'components/styles/Alert.theme';
import { spinnerTheme } from 'components/styles/Spinner.theme';
import { containerTheme } from 'components/styles/Layout.theme';
import { linkTheme } from 'components/styles/ChakraLink.theme';
import { avatarTheme } from 'components/styles/Avatar.theme';
import { textTheme } from 'components/styles/Heading.theme';
import { headingTheme } from 'components/styles/Heading.theme';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Josefin Slab, serif',
        color: 'gray.600',
        letterSpacing: ['0.05em', '0.05em', '0.1em'],
        fontWeight: 'semibold',
      },
      'div, h1, h2, p, label, link': {
        p: '0',
        m: '0',
      },
      section: {
        w: '100%',
        h: 'auto',
      },
      a: {
        display: 'inline-flex',
        alignSelf: 'center',
      },
      label: {
        fontFamily: 'Lilita One, serif',
      },
      samp: {
        fontSize: ['0.5em', '0.5em', ' 0.75em'],
        fontWeight: ['normal', 'semibold', 'bold'],
        bgGradient: 'linear(to-r, gray.300, yellow.400, pink.200)',
        bgClip: 'text',
        m: '0 auto',
      },
      span: {
        fontSize: '80em',
        textDecoration: 'none',
        fontVariantCaps: 'all-small-caps',
      },
    },
    colors: {
      colors: {
        brand: {
          base: 'gray.600',
          first: 'green.50',
          second: 'yellow.50',
          extra1: 'blue.400',
          extra2: 'red.400',
        },
      },
    },
  },
  components: {
    Container: containerTheme,
    Heading: headingTheme,
    Text: textTheme,
    Link: linkTheme,
    Button: buttonTheme,
    Skeleton: skeletonTheme,
    Modal: modalTheme,
    Input: inputTheme,
    FormLabel: labelTheme,
    Icon: iconTheme,
    Spinner: spinnerTheme,
    Alert: alertTheme,
    Avatar: avatarTheme,
    Tooltip: tooltipTheme,
  },
});

export default theme;

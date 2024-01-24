import { extendBaseTheme, chakraThemes as theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

// const { Button } = chakraThemes.components;

theme = extendBaseTheme({
  styles: {
    global: props => ({}),
  },
  components: {
    // Button,
  },
});

export default theme;

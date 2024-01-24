import { addons } from '@storybook/manager-api';
import { MyTheme } from './MyTheme';

addons.setConfig({
  themes: MyTheme,
});

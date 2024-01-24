/** @type { import('@storybook/react').Preview } */
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/blocks';
const theme = require('../src/App');

import { DocsContainer } from '@storybook/blocks';

const ExampleContainer = ({ children, ...props }) => {
  return <DocsContainer {...props}>{children}</DocsContainer>;
};

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: {
        container: ExampleContainer,
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2, h3',
        ignoreSelector: '#primary',
        title: 'Table of Contents',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
        page: () => (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories />
          </>
        ),
      },
      chakra: {
        theme,
      },
    },
  },
};

export default preview;

import '../styles/globals.css';
import styled, { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import Theme, { GlobalStyles } from '../styles/Theme';

const themes = [Theme];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyles>
        <Story />
      </GlobalStyles>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

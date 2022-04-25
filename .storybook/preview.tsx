import { ThemeProvider } from 'styled-components';
import Theme, { GlobalStyles } from '../src/styles/Theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

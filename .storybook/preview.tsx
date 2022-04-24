import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';

import Theme, { GlobalStyles } from '../styles/Theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

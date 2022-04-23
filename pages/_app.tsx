import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Theme, { GlobalStyles } from '../styles/Theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </ThemeProvider>
  );
};

export default MyApp;

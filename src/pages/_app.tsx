import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Theme, { GlobalStyles } from 'styles/Theme';
import Layout from 'components/layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;

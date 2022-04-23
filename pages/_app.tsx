import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';

const GlobalTheme = styled.div`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primaryText};
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalTheme>
        <Component {...pageProps} />
      </GlobalTheme>
    </ThemeProvider>
  );
};

export default MyApp;

import { createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#00000',
    primaryText: '#17120F',
    lightPink: '#FCEFF3',
    linkHover: '#E79EB1',
  },
  fonts: {
    montserratMedium: 'Montserrat,sans-serif',
    poppins: 'Poppins,sans-serif',
  },
};

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primaryText};
  }

  body {
    font-size: 1.8rem;
  }

  html,
  body,
  body > div:first-child,
  div#__next {
    height: 100%
  }
`;

export default theme;

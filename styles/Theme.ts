import { createGlobalStyle, css } from 'styled-components';

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
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1440px',
    xxl: '1920px',
  },
};

export const breakpoints = theme.breakpoints;

export const mediaQueries = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  xxl: `(max-width: ${breakpoints.xxl})`,
};

export const responsiveWrapperStyles = css`
  padding-left: 12rem;
  padding-right: 12rem;

  @media ${mediaQueries.xl} {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media ${mediaQueries.md} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const responsiveHeroImageStyles = css`
  margin-left: -12rem;

  @media ${mediaQueries.xl} {
    margin-left: -5rem;
  }

  @media ${mediaQueries.md} {
    margin-left: -2rem;
  }
`;

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

  body > div:first-child,
  div#__next {
    display: flex;
    flex-direction: column;
  }

  ul {
    padding: 0;
    list-style: none;
  }
`;

export default theme;

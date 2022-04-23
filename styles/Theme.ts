import styled from 'styled-components';

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#00000',
    primaryText: '#17120F',
    lightPink: '#FCEFF3',
  },
  fonts: {
    montserratMedium: 'Montserrat, sans-serif',
    poppins: 'Poppins, sans-serif',
  },
};

export const GlobalStyles = styled.div`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primaryText};
`;

export default theme;

import React from 'react';
import styled from 'styled-components';
import { responsiveWrapperStyles } from '../../styles/Theme';

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPink};
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-top: auto;

  ${responsiveWrapperStyles}
`;

export type Footer = {
  text: string;
};

const Footer = (): JSX.Element => {
  return <StyledDiv>Footer WIP. Check back soon!</StyledDiv>;
};

export default Footer;

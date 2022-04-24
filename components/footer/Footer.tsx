import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPink};
  width: 100%;
  padding: 2rem 12rem;
  margin-top: auto;
`;

export type Footer = {
  text: string;
};

const Footer = (): JSX.Element => {
  return <StyledDiv>Footer WIP. Check back soon!</StyledDiv>;
};

export default Footer;

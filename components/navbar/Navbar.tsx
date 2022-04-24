import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPink};
  width: 100%;
  padding: 2rem;
`;

export type Topbar = {
  text: string;
};

const Topbar = (): JSX.Element => {
  return <StyledDiv>this is a work in progress!</StyledDiv>;
};

export default Topbar;

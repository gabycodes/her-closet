import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface StyledParagraphProps {
  size?: string;
}

const StyledParagraph = styled.p<StyledParagraphProps>`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 300;

  ${({ size }) => `
    font-size: ${size ? size : '1.8rem'};
  `}
`;

export type Paragraph = {
  size?: string;
  children: ReactNode;
};

const Paragraph = ({ size, children }: Paragraph): JSX.Element => {
  return <StyledParagraph size={size}>{children}</StyledParagraph>;
};

export default Paragraph;

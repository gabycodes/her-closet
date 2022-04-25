import react from 'react';
import styled, { css } from 'styled-components';

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
  text: string;
  size?: string;
};

const Paragraph = ({ text, size }: Paragraph): JSX.Element => {
  return <StyledParagraph size={size}>{text}</StyledParagraph>;
};

export default Paragraph;

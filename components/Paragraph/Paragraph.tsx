import react from 'react';
import styled, { css } from 'styled-components';

const StyledParagraph = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 300;
  font-size: 1.8rem;
`;

export type Paragraph = {
  text: string;
};

const Paragraph = ({ text }: Paragraph): JSX.Element => {
  return <StyledParagraph>{text}</StyledParagraph>;
};

export default Paragraph;

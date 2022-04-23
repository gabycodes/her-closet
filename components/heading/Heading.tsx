import react from 'react';
import styled, { css } from 'styled-components';

const commonStyles = css`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.montserratMedium};
`;

const StyledH1 = styled.h1`
  ${commonStyles}
  color: purple;
`;

const StyledH2 = styled.h2`
  ${commonStyles}
  color: blue;
`;

const StyledH3 = styled.h3`
  ${commonStyles}
  color: orange;
`;

const StyledH4 = styled.h4`
  ${commonStyles}
  color: green;
`;

const StyledH5 = styled.h5`
  ${commonStyles}
  color: hotpink;
`;

const StyledH6 = styled.h6`
  ${commonStyles}
  color: hotpink;
`;

export type Heading = {
  tag: string;
  text: string;
};

const Heading = ({ tag, text }: Heading): JSX.Element => {
  let Element;

  switch (tag) {
    case 'h2':
      Element = StyledH2;
      break;
    case 'h3':
      Element = StyledH3;
      break;
    case 'h4':
      Element = StyledH4;
      break;
    case 'h5':
      Element = StyledH5;
      break;
    case 'h6':
      Element = StyledH6;
      break;
    case 'h1':
    default:
      Element = StyledH1;
  }

  return <Element>{text}</Element>;
};

export default Heading;

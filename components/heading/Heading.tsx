import react from 'react';
import styled, { css } from 'styled-components';

const commonStyles = css`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.montserratMedium};
  font-weight: 400;
`;

const StyledH1 = styled.h1`
  ${commonStyles}
  font-size: 5.5rem;
`;

const StyledH2 = styled.h2`
  ${commonStyles}
  font-size: 4.5rem;
`;

const StyledH3 = styled.h3`
  ${commonStyles}
  font-size: 4rem;
`;

const StyledH4 = styled.h4`
  ${commonStyles}
  font-size: 3.5rem;
`;

const StyledH5 = styled.h5`
  ${commonStyles}
  font-size: 3rem;
`;

const StyledH6 = styled.h6`
  ${commonStyles}
  font-size: 3rem;
`;

export type Heading = {
  tag: string;
  text: string;
};

const Heading = ({ tag, text }: Heading): JSX.Element => {
  let Tag;

  switch (tag) {
    case 'h2':
      Tag = StyledH2;
      break;
    case 'h3':
      Tag = StyledH3;
      break;
    case 'h4':
      Tag = StyledH4;
      break;
    case 'h5':
      Tag = StyledH5;
      break;
    case 'h6':
      Tag = StyledH6;
      break;
    case 'h1':
    default:
      Tag = StyledH1;
  }

  return <Tag>{text}</Tag>;
};

export default Heading;

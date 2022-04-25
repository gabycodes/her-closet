import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon.stories';

interface StyledLinkProps {
  noUnderline: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
  color: inherit;
  font-size: inherit;
  width: fit-content;
  display: flex;
  align-items: center;
  text-underline-offset: 0.05em;
  text-decoration-thickness: 1px;

  ${({ noUnderline }) => `
    text-decoration: ${noUnderline ? 'none' : 'underline'};
  `}

  &:hover, &:focus-visible {
    color: ${({ theme }) => theme.colors.linkHover};
    outline: none;
  }

  &:active {
    filter: brightness(85%);
  }
`;

const IconHolder = styled.div`
  font-size: 0.8em;
  margin-left: 0.2em;
  display: flex;
  align-items: center;
  text-decoration: none;

  i {
    margin-top: 0.1em;
  }

  i:before {
    display: inline-block;
    text-decoration: none;
  }
`;

export type Link = {
  text?: string;
  url: string;
  ariaLabel?: string;
  isExternal?: boolean;
  noUnderline?: boolean;
  icon?: JSX.Element;
};

const Link = ({
  text,
  url,
  icon,
  isExternal = false,
  noUnderline = false,
  ariaLabel,
}: Link): JSX.Element => {
  return (
    <StyledLink
      href={url}
      target={isExternal ? '_blank' : '_self'}
      noUnderline={noUnderline}
      aria-label={ariaLabel}
    >
      <>
        {text && text}
        {icon && icon}
        {isExternal && (
          <IconHolder>
            <Icon name="externalLink" />
          </IconHolder>
        )}
      </>
    </StyledLink>
  );
};

export default Link;

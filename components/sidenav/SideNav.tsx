import React from 'react';
import styled from 'styled-components';
import Link from '../link/Link';

const StyledNav = styled.nav`
  grid-column: 1/3;

  a {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
`;

export type SideNav = {
  text: string;
};

const SideNav = (): JSX.Element => {
  return (
    <StyledNav data-testid="sidenav">
      <ul>
        <li>
          <Link text="Tops" url="#" noUnderline />
        </li>
        <li>
          <Link text="Pants" url="#" noUnderline />
        </li>
        <li>
          <Link text="Bodysuits" url="#" noUnderline />
        </li>
        <li>
          <Link text="Dresses" url="#" noUnderline />
        </li>
        <li>
          <Link text="Jackets & Coats" url="#" noUnderline />
        </li>
      </ul>
    </StyledNav>
  );
};

export default SideNav;

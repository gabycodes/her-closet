import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/her-closet-logo.svg';
import { mediaQueries, responsiveWrapperStyles } from '../../styles/Theme';
import Icon from '../icon/Icon';
import Link from '../link/Link';
import Paragraph from '../paragraph/Paragraph';

const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPink};
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;
  padding-bottom: 0;

  ${responsiveWrapperStyles}
`;

const BottomContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.montserratMedium};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-top: 2rem;
  padding-bottom: 2rem;

  > a {
    margin-right: 1.5rem;
  }

  ${responsiveWrapperStyles}
`;

const LogoHolder = styled.div`
  width: 24rem;
  position: relative;
  top: 2px;
`;

const LinksHolder = styled.div`
  display: flex;

  > a {
    margin-left: 2.5rem;
  }
`;

const Navbar: React.FC = (): JSX.Element => (
  <>
    {/* TODO: Move banner to separate component, add ability to dismiss it */}
    <Banner>
      <Paragraph text="Free shipping for all orders over $50" size="1.2rem" />
    </Banner>
    <div data-testid="navbar">
      <TopContainer>
        <LogoHolder>
          <a href="#">
            <Logo />
          </a>
        </LogoHolder>
        <LinksHolder>
          <Link
            url="#"
            icon={<Icon name="search" />}
            noUnderline
            ariaLabel="Search"
          />
          <Link
            url="#"
            icon={<Icon name="cart" />}
            noUnderline
            ariaLabel="View cart"
          />
          <Link
            url="#"
            icon={<Icon name="bookmark" />}
            noUnderline
            ariaLabel="View your wishlist"
          />
        </LinksHolder>
      </TopContainer>
      <BottomContainer>
        <Link url="#" text="New" noUnderline />
        <Link url="#" text="Clothing" noUnderline />
        <Link url="#" text="Accessories" noUnderline />
      </BottomContainer>
    </div>
  </>
);

export default Navbar;

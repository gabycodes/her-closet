import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/her-closet-logo.svg';
import Icon from '../icon/Icon';
import Link from '../link/Link';
import Paragraph from '../paragraph/Paragraph';

const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPink};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 12rem;
  font-size: 1.2rem;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4rem 12rem 0 12rem;
`;

const BottomContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.montserratMedium};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 2rem 12rem;
  font-size: 1.5rem;

  > a {
    margin-right: 1.5rem;
  }
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

export type Topbar = {
  text: string;
};

const Topbar = (): JSX.Element => {
  return (
    <>
      <Banner>
        <Paragraph text="Free shipping for all orders over $50" size="1.2rem" />
      </Banner>
      <TopContainer>
        <LogoHolder>
          <a href="#">
            <Logo />
          </a>
        </LogoHolder>
        <LinksHolder>
          <Link url="#" icon={<Icon name="search" />} noUnderline />
          <Link url="#" icon={<Icon name="cart" />} noUnderline />
          <Link url="#" icon={<Icon name="bookmark" />} noUnderline />
        </LinksHolder>
      </TopContainer>
      <BottomContainer>
        <Link url="#" text="New" noUnderline />
        <Link url="#" text="Clothing" noUnderline />
        <Link url="#" text="Accessories" noUnderline />
      </BottomContainer>
    </>
  );
};

export default Topbar;

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { mediaQueries, responsiveWrapperStyles } from '../../styles/Theme';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const PageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: fill-available;

  ${responsiveWrapperStyles}
`;

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <PageContainer>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageContainer>
  );
};
export default Layout;

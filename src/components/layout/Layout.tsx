import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { responsiveWrapperStyles } from 'styles/Theme';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding-top: 2rem;
  padding-bottom: 6rem;
  position: relative;
  flex-grow: 1;

  ${responsiveWrapperStyles}
`;

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <PageContainer data-testid="layout">
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageContainer>
  );
};
export default Layout;

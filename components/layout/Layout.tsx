import React from 'react';
import styled from 'styled-components';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const PageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </PageContainer>
  );
};
export default Layout;

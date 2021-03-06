import React from 'react'
import PageContainer from '../PageContainer/PageContainer';
import NavBar from '../../features/NavBar/NavBarContainer';
import Footer from '../../features/Footer/Footer';

const MainLayout = ({ children }) => (
  <div className="MainLayout">
    <PageContainer>
      <NavBar />
        {children}
      <Footer />
    </PageContainer>
  </div>
);

export default MainLayout;
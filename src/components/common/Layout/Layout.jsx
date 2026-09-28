import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <Header />
            <div className="layout-container">
                <Sidebar />
                <div className="layout-content">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;

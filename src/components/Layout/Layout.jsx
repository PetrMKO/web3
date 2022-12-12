import React from 'react';
import cn from './Layout.module.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return (
        <div className={cn.Layout}>
            <Header/>
            <div className={cn.contentSection}>
                <div className={cn.content}>
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;

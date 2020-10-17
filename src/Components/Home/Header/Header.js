import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Nabar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="header">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;
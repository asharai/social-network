import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <header className="header">
        <nav className="header__menu">
        <a href="#" className="header__menuLogo">
            <img src="https://html.crumina.net/html-olympus/img/logo.png" alt="" />
        </a>
         <p className="header__pageName">PROFILE PAGE</p>
        <input type="search" placeholder="Search here people..." className="header__search"/>
        <div className="header__iconsBlock">
            <i>2</i>
            <i>3</i>
            <i>1</i>
        </div>
            <div className="header__profileInfo">
                <img src="" alt=""/>
                <hgroup>
                    <h3>James Bond</h3>
                    <h5>Agent 007</h5>
                </hgroup>
            </div>
        </nav>
        </header>
    );
};

export default Header;
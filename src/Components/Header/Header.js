import React from 'react';
import './Header.css';
import {Link, useLocation} from 'react-router-dom'

import PersonAvatar from "../PersonAvatar/PersonAvatar";
const Header = () => {
    let location = useLocation().pathname;
    const pageName= ()=>{
        if(location.indexOf('weather')!=-1){
            return 'Weather Page'
        }
        else  if(location.indexOf('calendar')!=-1){
            return 'Calendar Page'
        }
        else{
            return 'Profile Page'
        }
    }

    return (
        <header className="header">
        <nav className="header__menu">
        <Link to="/social-network" className="header__menuLogo">
            <img src="https://html.crumina.net/html-olympus/img/logo.png" alt="" />
        </Link>
         <p className="header__pageName">{pageName()}</p>
        <input type="search" placeholder="Search here people..." className="header__search"/>
        <div className="header__iconsBlock">
            <i>2</i>
            <i>3</i>
            <i>1</i>
        </div>
            <div className="header__profileInfo">
             <PersonAvatar time={"Space Cowboy"}/>
            </div>
        </nav>
        </header>
    );
};

export default Header;
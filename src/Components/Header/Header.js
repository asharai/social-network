import React from 'react';
import './Header.css';
import {Link, useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import MoodIcon from '@material-ui/icons/Mood';
import ChatIcon from '@material-ui/icons/Chat';
import PersonAvatar from "../PersonAvatar/PersonAvatar";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import * as chatActions from '../../store/actions/Chat'
import * as postActions from "../../store/actions/Posts";
const Header = ({openChatMenu,onToggleChatMenu,onToggleMobileMenuNav,menuOpen}) => {
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

            <div className="header__profileInfo">
             <PersonAvatar time={"Space Cowboy"}/>
            </div>
        </nav>
            <nav className="header__mobileMenu">
                <div className= {menuOpen ? "header__menuLogo header__menuLogo-burger" :'header__menuLogo' } onClick={()=>onToggleMobileMenuNav()}>
                <img src="https://html.crumina.net/html-olympus/img/logo.png" alt="" />
                </div>


                <div className="header__menuLogo" onClick={()=>onToggleChatMenu()} >
                    {openChatMenu ?   <CloseIcon /> :      <MenuIcon />}


                </div>
            </nav>
        </header>
    );
};
const mapStateToProps = state =>{
    return{
        openChatMenu:state.chat.mobileChat,
        menuOpen:state.posts.menuOpen
    }
}
const mapDispatchToProps = dispatch =>{
    return{
          onToggleChatMenu:()=>dispatch(chatActions.toggleMobileChat()),
        onToggleMobileMenuNav:()=>dispatch(postActions.toggleMobileMenuNav())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
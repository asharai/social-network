import React, {useState} from 'react';
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
import FindFriend from "../FindFriend/FindFriend";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
const Header = ({openChatMenu,onToggleChatMenu,onToggleMobileMenuNav,menuOpen,findFriends}) => {
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
    const [text,setText]=useState('');

    const searchFriends = findFriends.filter(item=>{
        return item.name.toLowerCase().indexOf(text.toLowerCase())!=-1
    }).map(item=>{
        return (

                <FindFriend idx={item.id} img={item.img} name={item.name} count={item.commonFriends} />

        )
    })
    const [visble,setVisible] = useState(false);

    return (
        <header className="header">
        <nav className="header__menu">
        <Link to="/social-network" className="header__menuLogo">
            <img src="https://html.crumina.net/html-olympus/img/logo.png" alt="" />
        </Link>
         <p className="header__pageName">{pageName()}</p>

            <div className="header__searhContainer">
                <input type="search" placeholder="Search here people..." value={text} onClick={()=>setVisible(true)} onChange={(e)=>setText(e.target.value)} className="header__search"/>

                <div className={visble ? "header__searchContent header__searchContent-active" :"header__searchContent"}>
                    <div  className="header__searchContent-close">

                        <ArrowDropUpIcon style={{fontSize:'40px'}} onClick={()=>setVisible(false)}/>
                    </div>

                    {searchFriends}
                </div>






            </div>

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
        menuOpen:state.posts.menuOpen,
        findFriends:state.friends.findFriends
    }
}
const mapDispatchToProps = dispatch =>{
    return{
          onToggleChatMenu:()=>dispatch(chatActions.toggleMobileChat()),
        onToggleMobileMenuNav:()=>dispatch(postActions.toggleMobileMenuNav())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
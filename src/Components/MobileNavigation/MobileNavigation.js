import React from 'react';
import {Link, NavLink} from "react-router-dom";
import PersonAvatar from "../PersonAvatar/PersonAvatar";
import CloudIcon from "@material-ui/icons/Cloud";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import './MobileNavigation.css';
import {connect} from 'react-redux';
import * as postActions from '../../store/actions/Posts'
const MobileNavigation = ({menuOpen,onToggleMobileMenuNav}) => {
    const useStyles = makeStyles({
     icon:{
         marginRight:'20px',
     },
        logo:{
         height:'70px',
            backgroundColor:' #ff5e3a',
            textDecoration:'none',
            color:'white',
            width:'100%',
            display:'flex',
            alignItems:'center',
            textTransform:'uppercase',
            fontSize:'12px',
            fontWeight:'bold',
            marginBottom:'10px',
        },
        img:{
            objectFit: 'contain',
            height:'35px',

             padding: '0 15px',
            margin: '0'
        }
    });
    const classes = useStyles();
    return (
        <aside className={menuOpen ? "mobileNavigation": "mobileNavigation MobileNavigation__inactive" }>
          <Link to="/social-network" className={classes.logo}  onClick={()=>onToggleMobileMenuNav()}>
            <img src="https://html.crumina.net/html-olympus/img/logo.png" className={classes.img} alt="" />
           Olympus
        </Link>
         <PersonAvatar/>
            <p className="mobileNavigation__subtitle">Main Sections</p>
           <ul className="mobileNavigation__list">

               <li className="leftMenu__Link" onClick={()=>onToggleMobileMenuNav()}><CloseIcon className={classes.icon}/>Collapse Menu</li>
               <li onClick={()=>onToggleMobileMenuNav()}><NavLink to="/social-network/weather" className="leftMenu__Link"><CloudIcon className={classes.icon} />Weather App</NavLink> </li>
               <li onClick={()=>onToggleMobileMenuNav()}><NavLink to="/social-network/calendar" className="leftMenu__Link"><CalendarTodayIcon className={classes.icon} /> Calendar and events</NavLink> </li>
           </ul>
        </aside>
    );
};
const mapStateToProps=state=>{
    return{
        menuOpen:state.posts.menuOpen
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onToggleMobileMenuNav:()=>dispatch(postActions.toggleMobileMenuNav())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MobileNavigation);
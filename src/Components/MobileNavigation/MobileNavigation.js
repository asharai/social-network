import React from 'react';
import {Link, NavLink} from "react-router-dom";
import PersonAvatar from "../PersonAvatar/PersonAvatar";
import CloudIcon from "@material-ui/icons/Cloud";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import './MobileNavigation.css';
const MobileNavigation = () => {
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
        <aside className="mobileNavigation">
          <Link to="/social-network" className={classes.logo}  >
            <img src="https://html.crumina.net/html-olympus/img/logo.png" className={classes.img} alt="" />
           Olympus
        </Link>
         <PersonAvatar/>
            <p className="mobileNavigation__subtitle">Main Sections</p>
           <ul className="mobileNavigation__list">

               <li className="leftMenu__Link"><CloseIcon className={classes.icon}/>Collapse Menu</li>
               <li><NavLink to="/social-network/weather" className="leftMenu__Link"><CloudIcon className={classes.icon} />Weather App</NavLink> </li>
               <li><NavLink to="/social-network/calendar" className="leftMenu__Link"><CalendarTodayIcon className={classes.icon} /> Calendar and events</NavLink> </li>
           </ul>
        </aside>
    );
};

export default MobileNavigation;
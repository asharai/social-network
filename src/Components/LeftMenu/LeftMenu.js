import React from 'react';

import CloudIcon from "@material-ui/icons/Cloud";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import {NavLink} from 'react-router-dom'
import './LeftMenu.css';
const LeftMenu = () => {
    return (
        <ul className="leftMenu">



            <li><NavLink to="/social-network/weather" className="leftMenu__Link"><CloudIcon /></NavLink></li>
            <li><NavLink to="/social-network/calendar" className="leftMenu__Link"><CalendarTodayIcon /></NavLink></li>

        </ul>
    );
};

export default LeftMenu;
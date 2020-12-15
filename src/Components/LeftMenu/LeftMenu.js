import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import CloudIcon from "@material-ui/icons/Cloud";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import {Link,NavLink} from 'react-router-dom'
import './LeftMenu.css';
const LeftMenu = () => {
    return (
        <ul className="leftMenu">
            <li><a href="" className="leftMenu__Link"><MenuIcon /></a></li>
            <li><a href=""  className="leftMenu__Link"><BookmarkIcon /></a></li>
            <li><a href=""  className="leftMenu__Link"><StarBorderIcon /></a></li>
            <li> <SentimentVerySatisfiedIcon /></li>
            <li><a href=""  className="leftMenu__Link"><MusicNoteIcon /></a></li>
            <li><NavLink to="/social-network/weather" className="leftMenu__Link"><CloudIcon /></NavLink></li>
            <li><NavLink to="/social-network/calendar" className="leftMenu__Link"><CalendarTodayIcon /></NavLink></li>

        </ul>
    );
};

export default LeftMenu;
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import CloudIcon from '@material-ui/icons/Cloud';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import './Sidebar.css';
const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li><a href="" className="sidebar__Link"><MenuIcon /></a></li>
                <li><a href=""  className="sidebar__Link"><BookmarkIcon /></a></li>
                <li><a href=""  className="sidebar__Link"><StarBorderIcon /></a></li>
                <li><a href=""  className="sidebar__Link"><SentimentVerySatisfiedIcon /></a></li>
                <li><a href=""  className="sidebar__Link"><MusicNoteIcon /></a></li>
                <li><a href=""  className="sidebar__Link"><CloudIcon /></a></li>
                <li><a href=""  className="sidebar__Link"><CalendarTodayIcon /></a></li>

            </ul>
        </nav>
    );
};

export default Sidebar;
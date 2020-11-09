import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Main.css';
import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <div className="main">

            <ul className="main__menu">
                <li><NavLink to="/" className="main__menuItem" href="">Timeline</NavLink></li>
                <li><NavLink to="/about" className="main__menuItem" href="">About</NavLink></li>
                <li><NavLink to="/friends" className="main__menuItem" href="">Friends</NavLink></li>
                <li className="main__personInfo">
                    <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" className="main__personImg" alt=""/>
                    <h1>John Doe</h1>
                    <h5>San Francisco,CA</h5>
                </li>
                <li><NavLink to="/photos" className="main__menuItem" href="">Photos</NavLink></li>
                <li><NavLink to="/videos" className="main__menuItem" href="">Videos</NavLink></li>
                <li><a className="main__menuItem" href=""><MoreHorizIcon/></a></li>
            </ul>
        </div>
    );
};

export default Main;
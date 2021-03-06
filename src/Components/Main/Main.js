import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Main.css';
import {NavLink, useRouteMatch} from "react-router-dom";

const Main = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="main">

            <ul className="main__menu">
                <li><NavLink to={`${path}/`} className="main__menuItem">Timeline</NavLink></li>
                <li><NavLink to={`${path}/about`} className="main__menuItem" >About</NavLink></li>
                <li><NavLink to={`${path}/friends`} className="main__menuItem" >Friends</NavLink></li>
                <li className="main__personInfo">
                    <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" className="main__personImg" alt=""/>
                    <h1>James Spiegel</h1>
                    <h5>San Francisco,CA</h5>
                </li>
                <li><NavLink to={`${path}/photos`} className="main__menuItem" href="">Photos</NavLink></li>
                <li><NavLink to={`${path}/videos`} className="main__menuItem" href="">Videos</NavLink></li>
                <li><span className="main__menuItem" ><MoreHorizIcon/></span></li>
            </ul>
        </div>
    );
};

export default Main;
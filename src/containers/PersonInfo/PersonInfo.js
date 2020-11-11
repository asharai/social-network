import React from 'react';

import './PersonInfo.css';
import Main from "../../Components/Main/Main";
import {BrowserRouter as Router,Switch,Route,useRouteMatch} from 'react-router-dom';
import Content from "../Content/Content";
import FullFriends from '../../Components/FullFriends/FullFriends'
import About from "../About/About";
const PersonInfo = () => {
    let { path, url } = useRouteMatch();
    return (

        <div className="personInfo">

            <Main/>
                <Switch>
                    <Route  exact path={path}>
                        <Content/>
                    </Route>
                    <Route   path={`${path}about`} >
                        <About/>
                    </Route>
                    <Route   path={`${path}friends`} >
                        <FullFriends/>
                    </Route>
                </Switch>
        </div>

    );
};

export default PersonInfo;
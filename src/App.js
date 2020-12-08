import React from 'react';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import PersonInfo from "./containers/PersonInfo/PersonInfo";
import Sidebar from "./Components/Sidebar/Sidebar";
import LeftMenu from "./Components/LeftMenu/LeftMenu";
import ChatMenu from "./Components/Chat/ChatMenu/ChatMenu";
import Chat from "./Components/Chat/Chat";
import Weather from "./containers/Weather/Weather";


function App() {

  return (
   <Router>
       <div className="App">
           <Header/>
           <Sidebar>
               <LeftMenu/>
           </Sidebar>
           <Switch>
               <Route  path="/social-network/home">
                   <PersonInfo/>
               </Route>
           </Switch>
           <Sidebar right>
               <ChatMenu/>
           </Sidebar>
           <Chat/>
           <Route  path="/social-network/weather" exact>
               <Weather/>
           </Route>
       </div>
   </Router>
  );
}

export default App;

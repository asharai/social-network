import React from 'react';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import PersonInfo from "./containers/PersonInfo/PersonInfo";
import Sidebar from "./Components/Sidebar/Sidebar";
import LeftMenu from "./Components/LeftMenu/LeftMenu";
import ChatMenu from "./Components/Chat/ChatMenu/ChatMenu";
import Chat from "./Components/Chat/Chat";


function App() {

  return (
   <Router>
       <div className="App">
           <Header/>
           <Sidebar>
               <LeftMenu/>
           </Sidebar>
           <Switch>
               <Route  path="/social-network">
                   <PersonInfo/>
               </Route>
           </Switch>
           <Sidebar right>
               <ChatMenu/>
           </Sidebar>
           <Chat/>
       </div>
   </Router>
  );
}

export default App;

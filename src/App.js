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
import Calendar from "./containers/Calendar/Calendar";
import MobileChatMenu from "./Components/Chat/MobileChatMenu/MobileChatMenu";


function App() {

  return (
   <Router>
       <div className="App">
           <Header/>
           <Sidebar>
               <LeftMenu/>
           </Sidebar>

           <Sidebar right>
               <ChatMenu/>
           </Sidebar>
           <Chat/>
           <MobileChatMenu/>
           <Switch>
           <Route  path="/social-network/weather" exact>
               <Weather/>
           </Route>
               <Route  path="/social-network/calendar" exact>
                   <Calendar/>
               </Route>

               <Route  path="/social-network">
                   <PersonInfo/>
               </Route>
           </Switch>
       </div>
   </Router>
  );
}

export default App;

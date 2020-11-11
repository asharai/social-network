import React from 'react';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import PersonInfo from "./containers/PersonInfo/PersonInfo";
import Sidebar from "./Components/Sidebar/Sidebar";


function App() {

  return (
   <Router>
       <div className="App">
           <Header/>
           <Sidebar/>
           <Switch>
               <Route  path="/">
                   <PersonInfo/>
               </Route>
           </Switch>

       </div>
   </Router>
  );
}

export default App;

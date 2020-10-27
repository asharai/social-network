import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import PersonInfo from "./containers/PersonInfo/PersonInfo";
import Sidebar from "./Components/Sidebar/Sidebar";


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
  <PersonInfo/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./containers/Content";
import Sidebar from "./Components/Sidebar/Sidebar";


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
  <Content/>
    </div>
  );
}

export default App;

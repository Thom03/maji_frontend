import React from 'react';
import './App.css';
import Content from './components/Content';
import Nav from "./components/Nav";
import SideMenu from "./components/SideMenu";


function App() {
  return (
      <div id="wrapper">
          <SideMenu/>
          <Content/>
         
      </div>
  );
}

export default App;

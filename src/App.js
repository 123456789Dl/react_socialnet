import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent';
import SecondComp from './SecondComp';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import MainPart from "./Components/MainPart";


function App() {
  return (
    <div className="App">
        <Header/>
        <Nav/>
        <MainPart/>
    </div>
  );
}

export default App;

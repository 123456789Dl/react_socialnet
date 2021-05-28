import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent';
import SecondComp from './SecondComp';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import MainPart from "./Components/Profile/MainPart";


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

import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent';
import SecondComp from './SecondComp';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import MainPart from "./Components/Profile/MainPart";
import Dialogs from "./Components/Dialogs/Dialogs"
import s from './Components/Profile/MainPart.module.css'
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <div className="App_wrapper">
                    <Route path="/Profile" component={MainPart}/>
                    <Route path="/Dialogs" component={Dialogs}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

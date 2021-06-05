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
import News from "./Components/Navbar/News/News";
import Music from "./Components/Navbar/Music/Music";
import Settings from "./Components/Navbar/Settings/Settings";

function App(props) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <div className="App_wrapper">
                    <Route path="/Profile" render={() => <MainPart
                        store={props.store} dispatch={props.dispatch}/>
                    }/>
                    <Route path="/Dialogs" render={() => <Dialogs
                        store={props.store}/>
                    }/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;

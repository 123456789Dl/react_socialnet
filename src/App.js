import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import MainPart from "./Components/Profile/MainPart";
import Dialogs from "./Components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom";
import MainPageNews from "./Components/Navbar/News/MainPageNews";
import Music from "./Components/Navbar/Music/Music";
import Settings from "./Components/Navbar/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App(props) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <div className="App_wrapper">
                    <Route path="/Profile" render={() => <MainPart
                        store={props.store}/>
                    }/>
                    <Route path="/Dialogs" render={() => <DialogsContainer
                        store={props.store}/>
                    }/>
                    <Route path="/MainPageNews" render={() => <MainPageNews store={props.state} dispatch={props.dispatch}/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;

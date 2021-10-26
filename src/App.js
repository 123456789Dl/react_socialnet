import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import MainPart from "./Components/Profile/MainPart";
import {Route} from "react-router-dom";
import MainPageNews from "./Components/Navbar/News/MainPageNews";
import Music from "./Components/Navbar/Music/Music";
import Settings from "./Components/Navbar/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

function App(props) {

    return (

            <div className="App">
                <Header/>
                <Nav/>
                <div className="App_wrapper">
                    <Route path="/Profile" render={() => <MainPart
                        store={props.store}/>
                    }/>
                    <Route path="/Dialogs" render={() => <DialogsContainer/>
                    }/>
                    <Route path="/Users" render={() => <UsersContainer/>}/>
                    <Route path="/MainPageNews" render={() => <MainPageNews/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>

    );

}

export default App;

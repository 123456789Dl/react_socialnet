import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Components/redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";




export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree()
});


serviceWorker.unregister();

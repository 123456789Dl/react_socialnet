import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";




export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} dispatch={store.dispatch}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);


serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


export let rerenderEntireTree = (state, addPosts) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPosts}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

serviceWorker.unregister();

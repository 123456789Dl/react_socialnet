import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {name: 'Жентос', id: 1},
    {name: 'Дантес', id: 2},
    {name: 'Дошик', id: 3}
]

let messageData = [
    {id: 1, message: 'hello world'},
    {id: 2, message: 'how are you?'},
    {id:3, message: 'that happened?'}
]
let postsData = [
    {id: 1, post: "Hello world", likes: 21},
    {id: 2, post: "It's my first post", likes: 20},
    {id: 3, post: "Kak krasivaa", likes: 14}
]


ReactDOM.render(
  <React.StrictMode>
    <App names={dialogsData} messages={messageData} posts={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./render";
import state, {addPosts} from "./redux/state";


rerenderEntireTree(state, addPosts);

serviceWorker.unregister();

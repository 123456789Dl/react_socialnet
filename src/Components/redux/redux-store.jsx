import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import newsPage from "./news-reducer"
import {combineReducers, createStore} from "redux";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    newsPage: newsReducer
});

let store = createStore(reducers);

export default store;
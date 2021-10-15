import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import newsPage from "./news-reducer"
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    newsPage: newsPage
});

let store = createStore(reducers);

export default store;
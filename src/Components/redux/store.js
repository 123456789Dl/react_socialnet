import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";

export let store = {
    _callSub() {
        console.log('state changed')
    },
    _state: {
        dialogsPage: {
            dialogsData: [
                {name: 'Jeno', id: 1},
                {name: 'Дантес', id: 2},
                {name: 'Дошик', id: 3}
            ],
            messageData: [
                {id: 1, message: 'Hello, Helen'},
                {id: 2, message: 'How is your day?'}
            ],
            newMessageText: 'My first message'
        },
        profilePage: {
            postsData: [
                {id: 1, post: "Hello, Helen", likes: 21},
                {id: 2, post: "How is your day?", likes: 20},
                {id: 3, post: "Miss u", likes: 1004}
            ],
            newPostText: 'testing text in text'
        },
        newsPage: {
            newsData: [
                {date:"13.05.90", newsText:"Hello world"}
            ],
            newNewsText: "Helohelohelo"
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSub = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.newsPage = newsReducer(this._state.newsPage, action);
        this._callSub();
    }
}




window.state = store.getState();

export default store;
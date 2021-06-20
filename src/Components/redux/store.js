import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

export let store = {
    _callSub() {
        console.log('state changed')
    },
    _state: {
        dialogsPage: {
            dialogsData: [
                {name: 'Жентос', id: 1},
                {name: 'Дантес', id: 2},
                {name: 'Дошик', id: 3}
            ],
            messageData: [
                {id: 1, message: 'hello world'},
                {id: 2, message: 'how are you?'},
                {id: 3, message: 'that happened?'}
            ],
            newMessageText: 'My first message, DATEBAYO'
        },
        profilePage: {
            postsData: [
                {id: 1, post: "Hello world", likes: 21},
                {id: 2, post: "It's my first post", likes: 20},
                {id: 3, post: "Kak krasivaa", likes: 14}
            ],
            newPostText: 'testing text in text'
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
        this._callSub();
    }
}




window.state = store.getState();

export default store;
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
            ]
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
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likes: 20
            }
            this._callSub();
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = '';

        } else if (action.type === "UPDATE-POST-TEXT") {

            this._state.profilePage.newPostText = action.postText;
            console.log(action.postText);
            this._callSub();
        }
    }
}

window.state = store.getState();

export default store;
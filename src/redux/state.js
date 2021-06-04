export let store = {
    rerenderEntireTree() {
        console.log('state changed')
    },
    state: {
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
    addPosts() {
        let newPost = {
            id: 5,
            post: store.state.profilePage.newPostText,
            likes: 20
        }
        store.rerenderEntireTree(store);
        store.state.profilePage.postsData.push(newPost)
        store.state.profilePage.newPostText = '';
    },
    updatePostText(postText) {
        store.state.profilePage.newPostText = postText;
        console.log(postText);
        store.rerenderEntireTree();
    },
    subscribe(observer) {
        store.rerenderEntireTree = observer;
    }

}

window.state = store.state;

export default store;
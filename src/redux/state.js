import {rerenderEntireTree} from "../render";

let state = {
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
    profilePage: [
        {id: 1, post: "Hello world", likes: 21},
        {id: 2, post: "It's my first post", likes: 20},
        {id: 3, post: "Kak krasivaa", likes: 14}
    ]
}

export let addPosts = (message) => {
    let newPost = {
        id: 5,
        post: message,
        likes: 20
    }
    rerenderEntireTree(state, addPosts);
    state.profilePage.push(newPost);
}
export default state;
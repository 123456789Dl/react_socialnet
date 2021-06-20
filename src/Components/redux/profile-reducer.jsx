const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
        postsData: [
            {id: 1, post: "Hello world", likes: 21},
            {id: 2, post: "It's my first post", likes: 20},
            {id: 3, post: "Kak krasivaa", likes: 14}
        ],
        newPostText: 'testing text in text'
}

const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likes: 20
            }
            state.postsData.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.postText;
            console.log(action.postText);
            return state;
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({ type: "ADD-POST" })
export const onChangePostActionCreator= (text) => ({ type: "UPDATE-POST-TEXT", postText: text})
export default profileReducer;
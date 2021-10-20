const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
        postsData: [
            {id: 1, post: "Hello, Helen", likes: 21},
            {id: 2, post: "How is your day?", likes: 20},
        ],
        newPostText: 'testing text in text'
}

const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likes: 20
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            };
        }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText
            };
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({ type: "ADD-POST" })
export const onChangePostActionCreator= (text) => ({ type: "UPDATE-POST-TEXT", postText: text})
export default profileReducer;
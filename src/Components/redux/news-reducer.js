const UPDATE_MESSAGE = "UPDATE-NEWS-MESSAGE";
const NEWS_MESSAGE_TEXT = "NEW-NEWS-MESSAGE";

let initialState = {
    newsData: [
        {date:"13.05.90", newsText:"Hello world"}
    ],
    newNewsText: "Helohelohelo"
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {
                ...state,
                newNewsText: action.newsNewText
            }
        case NEWS_MESSAGE_TEXT:
            let newsArr = {
                date:"13.06.20",
                newsText: state.newNewsText
            }
            return {
                ...state,
                newsData:[...state.newsData, newsArr],
                newNewsText: ""
            }
        default:
            return state;
    }
}

export const onChangeNewsActionCreator = (text) => ({type:"UPDATE-NEWS-MESSAGE", newsNewText: text})
export const onAddNewsActionCreator = () => ({type:"NEW-NEWS-MESSAGE"})
export default newsReducer;
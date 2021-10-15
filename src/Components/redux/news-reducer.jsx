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
            state.newNewsText = action.newsNewText;
            return state;
        case NEWS_MESSAGE_TEXT:
            let newsArr = {
                date:"13.06.20",
                newsText: state.newNewsText
            }
            state.newsData.push(newsArr);
            state.newNewsText = "";
            return state;
        default:
            return state;
    }
}

export const onChangeNewsActionCreator = (text) => ({type:"UPDATE-NEWS-MESSAGE", newsNewText: text})
export const onAddNewsActionCreator = () => ({type:"NEW-NEWS-MESSAGE"})
export default newsReducer;
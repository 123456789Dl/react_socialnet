const NEW_MESSAGE = "NEW-MESSAGE-POST";
const UPDATE_MESSAGE_TEXT = "NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.messageText
            }
        case NEW_MESSAGE:
            let newMessagePost = {
                id: 4,
                message: state.newMessageText
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessagePost],
                newMessageText: ""
            }
        default:
            return state;

    }
}

export const onChangeMessageActionCreator = (text) => ({type:"NEW-MESSAGE-TEXT", messageText: text})
export const onAddMessageActionCreator = () => ({type:"NEW-MESSAGE-POST"})
export default dialogsReducer;
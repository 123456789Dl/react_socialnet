import React from "react";
import {onAddMessageActionCreator, onChangeMessageActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let addMessage = () => {
        props.store.dispatch(onAddMessageActionCreator())

    }

    let ChangeMessage = (text) => {
        props.store.dispatch(onChangeMessageActionCreator(text))
    }

    return (
        <Dialogs onAddMessage={addMessage}
                 ChangeMessage={ChangeMessage}
                 messageData={props.store.getState().dialogsPage.messageData}
                 dialogsData={props.store.getState().dialogsPage.dialogsData}
                 newMessageText={props.store.getState().dialogsPage.newMessageText}
        />
    )
}

export default DialogsContainer;

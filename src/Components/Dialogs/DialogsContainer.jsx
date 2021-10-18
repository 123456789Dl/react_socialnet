import React from "react";
import {onAddMessageActionCreator, onChangeMessageActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messageData: state.dialogsPage.messageData,
        dialogsData: state.dialogsPage.dialogsData,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => dispatch(onAddMessageActionCreator()),
        ChangeMessage: (text) => dispatch(onChangeMessageActionCreator(text))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;

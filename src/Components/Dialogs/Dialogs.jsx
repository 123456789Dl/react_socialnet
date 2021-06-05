import React from "react";
import D from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Messages/Message";
import DialogItem from "./DialogItem/DialogItem";
import M from "./Messages/Message.module.css";

const Dialogs = (props) => {

    let addNewMessage = React.createRef();

    let addMessage = () => {
        let textNewMessage = addNewMessage.current.value;
        props.store.dispatch({type:"NEW-MESSAGE-POST"})

    }

    let onChangeMessage = () => {
        let textNewMessage = addNewMessage.current.value;
        props.store.dispatch({type:"NEW-MESSAGE-TEXT", messageText:textNewMessage})
    }

    let namesMap = props.store._state.dialogsPage.dialogsData.map((element) => {
        return (<DialogItem name={element.name} id={element.id}/>)
    })

    let messageMap = props.store._state.dialogsPage.messageData.map((el)=> {
        return (<Message text={el.message}/>)
    })
    return (
        <div className={D.Dialogs}>
            <div className={D.Dialogs_items}>
                {namesMap}
            </div>
            <div className={M.Messages}>
                {messageMap}
            </div>
            <div>
                <textarea ref={addNewMessage}
                          value={props.store._state.dialogsPage.newMessageText}
                          onChange={onChangeMessage}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;

import React from "react";
import D from "./Dialogs.module.css"
import Message from "./Messages/Message";
import DialogItem from "./DialogItem/DialogItem";
import M from "./Messages/Message.module.css";

const Dialogs = (props) => {

    let addNewMessage = React.createRef();
    let onChangeMessage = () => {
        let textNewMessage = addNewMessage.current.value;
        props.ChangeMessage(textNewMessage)
    }

    let namesMap = props.dialogsData.map( element  => <DialogItem name={element.name} id={element.id}/>)

    let messageMap = props.messageData.map( el => <Message text={el.message}/>)


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
                          value={props.newMessageText}
                          onChange={onChangeMessage}></textarea>
                <button onClick={props.onAddMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;

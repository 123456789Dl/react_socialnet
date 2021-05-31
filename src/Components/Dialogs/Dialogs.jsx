import React from "react";
import D from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./DialogItem/Messages/Message";
import DialogItem from "./DialogItem/DialogItem";
import M from "./DialogItem/Messages/Message.module.css";

const Dialogs = (props) => {
    let dialogsData = [
        {name: 'Жентос', id: 1},
        {name: 'Дантес', id: 2},
        {name: 'Дошик', id: 3}
    ]
    let methodMap = dialogsData.map((element) => {
        return (<DialogItem name={element.name} id={element.id}/>)
    })
    let messageData = [
        {id: 1, message: 'hello world'},
        {id: 2, message: 'how are you?'},
        {id:3, message: 'that happened?'}
    ]
    let messageMap = messageData.map((el)=> {
        return (<Message text={el.message}/>)
    })
    return (
        <div className={D.Dialogs}>
            <div className={D.Dialogs_items}>
                {methodMap}
            </div>
            <div className={M.Messages}>
                {messageMap}
            </div>
        </div>
    )
}

export default Dialogs;

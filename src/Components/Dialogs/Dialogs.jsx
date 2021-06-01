import React from "react";
import D from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Messages/Message";
import DialogItem from "./DialogItem/DialogItem";
import M from "./Messages/Message.module.css";

const Dialogs = (props) => {

    let methodMap = props.names.map((element) => {
        return (<DialogItem name={element.name} id={element.id}/>)
    })

    let messageMap = props.messages.map((el)=> {
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

import React from "react";
import D from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./DialogItem/Messages/Message";
import DialogItem from "./DialogItem/DialogItem";
import M from "./DialogItem/Messages/Message.module.css";

const Dialogs = (props) => {
    return (
        <div className={D.Dialogs}>
            <div className={D.Dialogs_items}>
                <DialogItem name="Жентос" id="1"/>
                <DialogItem name="Дантес" id="2"/>
                <DialogItem name="Дошик" id="3"/>
            </div>
            <div className={M.Messages}>
                <Message text="Hello world"/>
            </div>
        </div>
    )
}

export default Dialogs;

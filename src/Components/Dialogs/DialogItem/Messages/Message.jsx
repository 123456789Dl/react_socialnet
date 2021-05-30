import React from "react";
import M from "./Message.module.css";


export default function Message(props) {
    return (
        <div className={M.Message}>
            {props.text}
        </div>
    )
}
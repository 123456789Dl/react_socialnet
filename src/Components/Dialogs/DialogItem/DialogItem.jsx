import D from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export default function DialogItem(props) {
    return (
        <div className={D.Dialog}>
            <NavLink to={"/dialogs/"+ props.id} activeClassName={D.active}> {props.name}</NavLink>
        </div>
    )
}

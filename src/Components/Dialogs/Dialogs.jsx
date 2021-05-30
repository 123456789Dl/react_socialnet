import React from "react";
import D from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={D.Dialogs}>
            <div className={D.Dialogs_items}>
                <div className={D.Dialog}>
                    <NavLink to="/Dialogs/Evgeniy" activeClassName={D.active}> Жентос</NavLink>
                </div>
                <div className={D.Dialog}>
                   <NavLink to="/Dialogs/Danya" activeClassName={D.active}> Дантес</NavLink>
                </div>
                <div className={D.Dialog}>
                    <NavLink to="/Dialogs/Anton" activeClassName={D.active}> Дошик</NavLink>
                </div>
            </div>
            <div className={D.Messages}>
                <div className={D.Message}>
                    hellow worlds
                </div>
                <div className={D.Message}>
                    How are you?
                </div>
                <div className={D.Message}>
                    I'm heree
                </div>

            </div>
        </div>
    )
}

export default Dialogs;

import React from "react";
import N from "./Nav.module.css"
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={N.Links}>
            <div className={N.item}>
                <NavLink to="/Profile" activeClassName={N.active}>Profile</NavLink>
            </div>
            <div className={N.item}>
                <NavLink to="/Dialogs" activeClassName={N.active}>Messages</NavLink>
            </div>
            <div className={N.item}>
                <NavLink to="/MainPageNews" activeClassName={N.active}>News</NavLink>
            </div>
            <div className={N.item}>
                <NavLink to="/Music" activeClassName={N.active}>Music</NavLink>
            </div>
            <div className={N.item}>
                <NavLink to="/Settings" activeClassName={N.active}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Nav;
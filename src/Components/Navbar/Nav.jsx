import React from "react";
import N from "./Nav.module.css"

const Nav = () => {
    return (
        <nav className={N.Links}>
            <div className="Link-1">
                <a href="/Profile">Profile</a>
            </div>
            <div className="Link-2">
                <a href="/Dialogs">Messages</a>
            </div>
            <div className="Link-3">
                <a href="/News">News</a>
            </div>
            <div className="Link-4">
                <a href="/Music">Music</a>
            </div>
            <div className="Link-5">
                <a href="/Settings">Settings</a>
            </div>
        </nav>
    )
}
export default Nav;
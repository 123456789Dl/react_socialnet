import React from "react";
import N from "./Nav.module.css"

const Nav = () => {
    return (
        <nav className={N.Links}>
            <div className="Link-1">
                <p>Profile</p>
            </div>
            <div className="Link-2">
                <p>Messages</p>
            </div>
            <div className="Link-3">
                <p>News</p>
            </div>
            <div className="Link-4">
                <p>Music</p>
            </div>
            <div className="Link-5">
                <p>Settings</p>
            </div>
        </nav>
    )
}
export default Nav;
import React from "react";
import H from "./Header.module.css"

const Header = (props) => {
    return (
        <header className={H.Header}>
            <div className={H.Header_logo}>

            </div>
            <div className={H.Header_name}>
                <h1>SocialNetwork</h1>
            </div>
        </header>
    )
}

export default Header;
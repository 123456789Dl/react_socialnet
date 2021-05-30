import React from "react";
import M from "./MainPart.module.css"
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MainPart = () => {
    return(
        <main>
            <ProfileInfo/>
            <MyPost/>
        </main>
    )
}

export default MainPart;